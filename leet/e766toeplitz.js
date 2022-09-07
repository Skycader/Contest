/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
	for (var i = 0; i<matrix.length; i++) {
	console.log("\n")
	for (var j = 0; j<matrix[0].length; j++) {
		console.log(j+i, "-", j, " --- ", i, "-",0)
		if (matrix[j+i]&&matrix[j+i][j] != undefined) {
		
		if (matrix[j+i][j] != matrix[i][0]) {
			return false
		}
		}	

	}
	}
	console.log("---")
	for (var i = 0; i<matrix[0].length; i++) {
		console.log("\n")
		for (var j = 0; j<matrix.length; j++) {
	
			console.log(j, "-", j+i, "---", 0, "-", i)
			if (matrix[j]&&matrix[j][j+i] != undefined)
			if (matrix[j][j+i] != matrix[0][i])  {
				return false
			}
	

	}
	}
	return true
};

let m = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
m =  [[1,2],[2,2]]
m = [[11,74,0,93],
	[40,11,74,7]]

m = [[1,2,3,4],
	[5,1,2,3],
	[9,5,1,2]]
/*m = [[1,2,3,4],
	[5,1,2,3],
	[9,5,1,2]] */

m = [[36,86,7,94,71,59,10],
	[19,0,86,7,94,71,59]]
r = isToeplitzMatrix(m)
console.log(r)

