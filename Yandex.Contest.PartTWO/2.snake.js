const field = [ //21 x 13 widthxheight
  "---------Y--AND------",
  "-----EXY--A--N---D--E",
  "-X-----Y--A-N---D----",
  "------EXY----A---N---",
  "--DE--X---------YA---",
  "-----ND---EXY--AN--D-",
  "----E-----X-Y----A--N",
  "D-----E-XY---AN---D--",
  "E--------------------",
  "-------X---Y------A-N",
  "----D-EX----------YA-",
  "--N-DEX--Y-A--N-----D",
  "E------X--Y----------",
];

const moves = "R 12 D 2 R 2 U 1 R 2"

const eat = (field,x,y) => (field[x][y] !== '-') ? 1 : 0
//const eat = (field,x,y) => {console.log(x,y)}
const go = (field,pos,command,count) => {
	let eaten = 0
	for (let i = 0; i<count; i++) {
		switch(command) {
			case 'U':
				pos[0] -= 1
				eaten += eat(field,pos[0],pos[1])
				break
			case 'D':
				pos[0]+=1
				eaten += eat(field,pos[0],pos[1])
			case 'L':
				pos[1]-=1
				eaten += eat(field,pos[0],pos[1])
			case 'R':
				pos[1]+=1
				eaten += eat(field,pos[0],pos[1])

		}
	}
	return [pos,eaten]
}


const snake = (field,moves) => {
	let length = 2
	let pos = [0,2] //x,y
	moves = moves.split(" ")

	for (let i = 0; i<moves.length; i+=2) {

		let res = go(field,pos,moves[i],moves[i+1])
		length+= res[1]
		pos = res[0]

		//console.log(moves[i],moves[i+1])
	}

	return [pos,length]
	

}

console.log(snake(field,moves))

module.exports = snake
