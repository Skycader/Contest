let began = Date.now()

//To translate int into roman, you first break number into thousands, hundreds, dozens and units
//Then, you translate them into roman separately, like so:
//459 -> 400 + 50 + 9
//CDLIX -> CD + L + IX
//I think it's O(n) (linear dependancy, coz the longer the number is so is the longer the work, however it does not grow n^2 or log n)
function div(num) {
	return (num - num%10)/10
}
function breakNumber(num) {
	let numArray = []
	let power = 0;
	while (num) {
		numArray.push((num%10)*Math.pow(10,power))
		power++
		num = div(num)
	}
	return numArray.reverse()

}
//console.log(breakNumber(process.argv[2]*1))
function sub(num) {
	if (num == 0) {
		return null;
	}
	let nums = [1,5,10,50,100,500,1000]
	if (nums.indexOf(num) == -1) {
		nums.push(num)
		nums = nums.sort(function(a, b){return a-b});
		console.log(nums)
		let index = nums.indexOf(num)
		let array = [nums[index-1],num,nums[index+1]]
		let toUse
		if ((array[0]+"")[0] == 1) {
			toUse = array[0]
		} else {
			toUse = nums[index-2]
		}

		let a = Math.abs(array[0]-num)
		let b = Math.abs(array[2]-num)
		let closest 
		if (a<b) {
			closest = array[0] || array[2]
		} else {
			closest = array[2] || array[0]
		}

		if (a==b) {
			closest = array[0]
		}

		let toGo
		if (array[0] !== toUse) {
			if ((array[0]+toUse*3)>=num) {
				closest=array[0]
			} else {
				closest=array[2]
			}
		}
		
		let sign
		if (num>closest) {
			sign = 1
		} else {
			sign = -1
		} 
		console.log(array)
		let finalResult = closest
		let roman = [closest]
			
		while (finalResult != num) {
			finalResult+=(sign*toUse)
			console.log(num)
			if (sign==1) {
				roman.push(toUse)
			} else {
				roman.unshift(toUse)
			}
		}
		
		
		console.log([num,closest,sign,toUse])
		
	    return roman
		
	} else {
		console.log("Already in")
		return num
	}


}

//console.log(clusterIntToRoman(1*process.argv[2]))
let alphabet = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"}
function intToRoman(num) {
	let numArray = breakNumber(num)
	let romanArray = []
	console.log(numArray)
	for (var i = 0; i<numArray.length; i++) {
		romanArray.push(sub(numArray[i]))
	}

	let roman = ""
	
	for (var i = 0; i<romanArray.length; i++) {
			let length
			if (romanArray[i] != null) {
				length = romanArray[i].length || 1
				if (length==1) {
					roman += alphabet[romanArray[i]]
				}
			}
			for (var j = 0; j<length; j++) {
				let letter = alphabet[romanArray[i][j]]
				if (letter) {
				roman += letter
				}
			}
		}
	
		
		console.log(romanArray)

	return roman
}
let arg = 1*process.argv[2]
//console.log(intToRoman(1*process.argv[2]))
//console.log(sub(arg))
console.log(intToRoman(arg))
console.log(Date.now()-began + "ms")
const used = process. memoryUsage(). heapUsed / 1024 / 1024;
console. log(`The script uses approximately ${Math. round(used * 100) / 100} MB`);
