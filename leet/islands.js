let grid = [
    [0,1,0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0],
    [1,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,1],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [1,1,0,0,1,1,0,0,0,0]
]
let count = 0
let maxX = 0
let maxY = 0
let numIslands = (grid) => {
    maxX = grid[0].length
    maxY = grid.length
    //show()
    //console.log()
    let coords = findNewIsland(grid)
    console.log(coords)
    if (coords != null) {
    let globalY = coords[0]
    let globalX = coords[1]
    let count = subGo(grid,"down",2,globalX,globalY)
    //console.log("count: ", count)
    return count
    } else {
        
        return 0
    }
    
}


//console.log(maxX,maxY)
let show = () => {
    for (var i = 0; i<maxY; i++) {
        for (var j = 0; j<maxX; j++) {
            process.stdout.write(grid[i][j].toString())
        }
       process.stdout.write("\n")
    }
}

//let subGo be a rectusive function
//it recursivly checks if the cell is island, so if it would be called from a center of 3x3, the result would be like so:
// 000 --> 010
// 000 --> 111
// 000 --> 010
let islandCount = 0
let subGo = (grid,direction,islandId,x,y) => {
    
    if ((grid[y] != undefined )&& (grid[y][x] != undefined)) {
         
        if ((grid[y][x] != islandId)&&(grid[y][x] == 1)) {

            grid[y][x] = islandId
            count++
            //console.log(Date.now())
            //show()
            
            //console.log(x,y,grid[y][x])
            //console.log(direction,islandId,x,y)

            switch (direction) {
                case "down":
                    //console.log("Going down")
                    subGo(grid,"down",islandId,x,y+1)
                    subGo(grid,"left",islandId,x-1,y)
                    subGo(grid,"right",islandId,x+1,y)
                     
                    break
            
                case "up":
                    //console.log("Going up")
                    subGo(grid,"up",islandId,x,y-1)
                    subGo(grid,"left",islandId,x-1,y)
                    subGo(grid,"right",islandId,x+1,y)
                   
                    break
                case "left":
                    subGo(grid,"left",islandId,x-1,y)
                    subGo(grid,"up",islandId,x,y-1)
                    subGo(grid,"down",islandId,x,y+1)
                    
                    break
                case "right":
                    subGo(grid,"right",islandId,x+1,y)
                    subGo(grid,"up",islandId,x,y-1)
                    subGo(grid,"down",islandId,x,y+1)
                     
                    break

            }
            count--
            //console.log(count)
            if (!count) {
                //show()
                coords = findNewIsland(grid)
                if (coords) {
                    subGo(grid,"down",islandId+1,coords[1],coords[0])
                } else {

                    //console.log()
                    //show()
                    //console.log("Finished, total island number: ", islandId)
                    islandCount = islandId-1
                    //console.log((islandId-1).toString())
                     
                }
            }
        }  
    }
    if (islandCount) {
        return islandCount
    }
    
}

let findNewIsland = (grid) => {
    for (var i = 0; i<maxY; i++) {
        for (var j = 0; j<maxX; j++) {
            if (grid[i][j] == 1) {
                return [i,j]
            }
        }
      
        
    }
    return null
     
}
let globalX = 0
let globalY = 0

let goNext = () => {
    
    subGo("down",islandsId,globalX,globalY)
    subGo("up",islandsId,globalX,globalY)
    subGo("left",islandsId,globalX,globalY)
    subGo("right",islandsId,globalX,globalY)

}
 

//console.log(islandsNum(grid))
console.log(numIslands([["0"]]))