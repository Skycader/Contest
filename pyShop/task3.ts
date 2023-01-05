const fs = require("fs");
const fileContent = fs.readFileSync("books.csv", "utf8");

const strings = fileContent.split("\n");
const authors = []
const headers = strings.shift().split(';') // Заголовки вынесены в отдельный массив, но из-за несоответствия их со структурой выходного json попытка их использовать существенно усложняет код.


// Объявления классов книг и авторов
class Book {
  title: string
  author: string;
  annotation: string;
  constructor(string) {
    let data = string.split(';')
    this.title = data[0]
    this.author = data[1]
    this.annotation = data[2]
  }
}

class Author {
  author: string;
  books = [];
  constructor(book) {
    this.author = book.author
    this.books.push(book)
  };
  addBook(book) {
    this.books.push(book)
  }  
}

const findAuthor = name => {
  for (let i=0;i<authors.length;i++)
    if (authors[i].author === name) {
      return i
    }
   return -1 
}

// Формирование результирующего массива объектов

for (let j=0; j<strings.length; j++) {
    let book = new Book(strings[j])
    if (findAuthor(book.author)===-1) {
      let author = new Author(book)
      authors.push(author)
    }
    else {
      authors[findAuthor(book.author)].addBook(book)
      }
}

// удаление лишнего свойства авторства у книг

(function authorRemover() {
  for (let person of authors) {
      for (let someBook of person.books) {
        delete someBook.author
      }
  }
 })()

// Форматирование массива для соответствия с выходным json
authors = {'authors': authors}

const json = JSON.stringify(authors, null , 2)
fs.writeFileSync("books.json", json)
