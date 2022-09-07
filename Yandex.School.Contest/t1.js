var f = (amount,width,height) => {
	let columns = Math.ceil(Math.sqrt(amount))
	let rows = Math.ceil(amount/columns)
	let firstRowAmount = (amount%columns) ? amount%columns : columns

	let result = []
	let visualize = ""
	visualize+=`*`.repeat(firstRowAmount)+"\n"
	for (let i = 1; i<rows; i++) {
		visualize+=`*`.repeat(columns)+"\n"
	}

	const g_width = Math.round(width/columns)
	// const g_height = Math.round(height/columns)
	const g_height = Math.round((g_width*height)/width)
	const spaceLeft = Math.round((height-rows*g_height)/2)

	for (let i = 0; i<firstRowAmount; i++) {
		let x = Math.round(((width/firstRowAmount)-(width/firstRowAmount/2))+(width/firstRowAmount)*i)
		result.push({width: g_width, height: g_height, x: x,y: 0+spaceLeft})
	}

	for (let j = 1; j<rows; j++) {
		for (let i = 0; i<columns; i++) {
		let x = Math.round(((width/columns)-(width/columns/2))+(width/columns)*i)
		result.push({width: g_width, height: g_height, x: x, y: j*g_height+spaceLeft})
	}
	}
	//((100/3)-(100/3/2))+(100/3)*(3-1)
	//let onX = ((width/columns)-(width/columns/2))+(width/columns)*(flat-1)
	console.log(visualize)
	console.log([rows,columns,firstRowAmount]) //floors, flats - for better understanding
	return result

}

console.log(f(7,185,138))

module.exports = f
