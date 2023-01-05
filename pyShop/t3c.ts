const fs = require('fs')

interface Authors {
    [key: string]: Object[]
}

class Library {

	protected file: string = ""								 /* text data from file */
	protected csv: string[][] = []								       /* csv array */
	protected library: Authors = {} /* Object with authors as keys, books as values */
	protected renderedBooks: Authors = {}
	constructor(fileName:string) {

		try {
			this.file = fs.readFileSync(fileName,"utf8")
		} catch (e) {
			throw new Error(e)
		}

		this.csv = this.file
			.split("\n")
			.map((item) => item.trim())
			.filter((item) => (item != ""))
			.map((item) => item.split("; "))
	}

	filterByAuthors() {
		let library: Authors = {}
		for (let item of this.csv.slice(1) ) {
			let author = item[1]
			let bookName = item[0]
			let anno = item[2]

			if (item)
				if (!library[author]) library[author] = []
				library[author].push([bookName,anno])

		}

		this.library = library
	}

	renderBook(book) {
		return {"title" : book[0], "description" : book[1]}
	}

	render() { /* collect library into array as shown */
		let renderedBooks = {"authors" : [] }
		for (let item of Object.entries(this.library) ) {
			renderedBooks["authors"].push(
				{
					"author" : item[0],
					"books" : item[1].map((item) => this.renderBook(item))
				}
			)
		}

		this.renderedBooks = renderedBooks
	}

	saveToJson() {
		try {
			 fs.writeFileSync("books.json", 
			 JSON.stringify(this.renderedBooks, null, "  "));
		} catch (e) {
			throw new Error(e);
		}
	}

	get lib() {
		return this.library
	}

	get rendered() {
		return this.renderedBooks
	}
}

const library = new Library("books.csv")
library.filterByAuthors()
library.render()
library.saveToJson()
