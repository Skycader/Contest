/*Thu 05 January 2023  17:58 */
const f = nums => {
	const res = []

	for (let start = 0, i = 1; i<=nums.length; i++) {
		if (nums[i] - nums[i-1] > 1 || nums.length === i) {
			res.push(nums[start] + (start < i - 1 ? `->${nums[i-1]}`:``))
			start = i
		}
	}

	return res;
}



/* Mon 29 december 2022 09:17 */

const f = nums => {
	const res = [];
	for (let start = 0, i = 1; i<=nums.length; i++) {
		if (nums[i] - nums[i-1] > 1 || i === nums.length) {
			res.push(nums[start] + (start < i - 1 ? `->${nums[i-1]}` : ``))
			start = i
		}
	}
	return res;
}



/* Mon 26 december 2022 22:43 */
const f = nums => {
	const res = []
	for (let start = 0, i = 1; i<=nums.length; i++) {
		if (nums[i] - nums[i-1] > 1 || i == nums.length) {
			res.push(nums[start] + (start < i - 1 ? `->${nums[i-1]}` : ``))
			start = i
		}
	}
	return res;
}

const summaryRanges = nums => {
	let i = 0
	let arr = []
	let chain = 0
	for (let item of nums) {
		if ((nums[i+1] == item+1)&&(chain==0)) {
			//chain begin
			chain=1
			arr.push(`${item}->`)
		}
		if (nums[i+1] != item+1) {
			//chain break
			chain=0
			if (arr[arr.length-1]?.slice(-2)=='->') {arr[arr.length-1]+=item } else
			arr.push(`${item}`)			
		}
		i++
	}
	return arr
}

const f = (nums) => { /* 12 december 2022 */
	const stack = []
	for (let i = 0; i<nums.length; i++) {
		console.log(nums[i], ' ', nums[i+1])
		if (nums[i]+1 !== nums[i+1]) { //detected break
			stack.push(nums[i]+";"); console.log("PUSHING1: ", nums[i])	
			if (nums[i+1]+1 == nums[i+2]) stack.push(nums[i+1]+"->"); console.log("PUSHING2: ", nums[i+1])
		} 
	}
	return stack
}

const f = nums => {
	let arr = []
	let chain = 0
	let i = 0
	for (let num of nums) {
		if ((num+1==nums[i+1])&&(chain==0)) {
			arr.push(`${num}->`)
			chain=1
		}
		if ((num+1 !== nums[i+1])) {
			chain=0
			if (arr[arr.length-1]?.slice(-2) == '->') {
				arr[arr.length-1]+=num
			} else {
				arr.push(num.toString())
			}
		}
			i++
	}
	return arr
}

const f = nums => {
	let i = 0
	let arr = []
	let chain = false
	for (let num of nums) {
		if (num+1 == nums[i+1]) {
			if (!chain) {
				chain=true
				arr.push(num)
			}
		} else {
			if (chain) {
			arr[arr.length-1] = arr[arr.length-1] + "->" + num
			} else {
				arr.push(num.toString())
			}
			chain=false

		}

		i++
	}
	return arr
}

const arr = [0,2,3,4,6,8,9]
console.log(summaryRanges(arr))
