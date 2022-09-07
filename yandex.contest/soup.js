function soup(mapString) {
  // Ваш код
  let holes = []; //with holes {number: int, x:int,y:int}
  let letters = []; //with objects {letter : char, x:int, y:int}
  let timings = []; //all times of escape, find the max to be the answer
  let distances = []
  let res = mapString.split("\n");

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      //detect holes on top and bottom
      if (i == 0 || i == res.length - 1) {
        if (res[i][j] != "+" && res[i][j] != "-") {
          holes.push({ number: res[i][j], x: j, y: i });
        }
      } else if (j == 0 || j == res[i].length - 1) {
        //detect holes on left and right

        if (res[i][j] != "|" && res[i][j] != " ") {
          holes.push({ number: res[i][j], x: j, y: i });
        }
      } else if (res[i][j] != " ") {
        letters.push({letter: res[i][j],x:j,y:i})
      }
    }
  }

  //

  console.log("Holes:")
  console.log(holes)
  console.log("Letters:")
  console.log(letters)

  let distance = 0
  let minimalDistance = 0
  let data = {}
  for (let i = 0; i<letters.length; i++) {
    for (let j = 0; j<holes.length; j++) {
        distance = getDistance(letters[i],holes[j])
        if (minimalDistance==0) {
            minimalDistance = distance
            data = {letter: letters[i],hole: holes[j]}
        }
        if (distance<minimalDistance) {
            minimalDistance = distance
            data = {letter: letters[i],hole: holes[j]}
        }
    }
    timings.push({data: JSON.stringify(data),min: minimalDistance})
    distances.push(minimalDistance)
    minimalDistance=0
}

  let max = distances.max()
    console.log(timings) //debug
  return max;  
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

function getDistance(letter,hole) {
    return distance(letter.x,letter.y,hole.x,hole.y)
}

function distance(x1, y1, x2, y2) { //distance in cells (pixels)
//   return (Math.hypot(x2 - x1, y2 - y1));
    let distX = Math.abs(x2-x1)
    let distY = Math.abs(y2-y1)

    if (distX>distY) {
        return distX
    } 
    return distY
}

module.exports = soup;

let a = 
`+----------------0---------------+
|                                |
|                                |
|          Y        D            |
|     A                          |
|              E                 |
|           N                    |
|  Y                             1
3        Y    D                  |
|         A              X       |
|                                |
+----------------2---------------+`;

console.log(soup(a));
