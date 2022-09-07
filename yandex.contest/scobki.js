let depth = 0
function scobki(str,left,right,needed) {
		
	if ((left==needed)&&(right==needed)) {
		console.log(str)
	} else {
		//console.log("ELSE: ", str)
		if (left<needed) { 
			scobki(str+'(',left+1,right,needed);
		//	console.log("LEFT: ", str)
		}
		if (right<left) {
			scobki(str+')',left,right+1,needed)
		//	console.log("RIGHT: ",str)
		}
	}
}

scobki('',0,0,3)
