const f = n => Array.from(String(n)).reverse().join("") === String(n) /* 11 june 2023 */
const f = (num, c = num, b = 0) => (c > 0) ? (f(num, c / 10 >> 0, b * 10 + c % 10)) : num == b
const f = (n, c = n, b = 0) => (c > 0) ? f(n, c / 10 | 0, b * 10 + c % 10) : (n === b)

const f = num => {
	num = num.toString()
	let j = 0
	for (let i = num.length - 1; i >= 0; i--) {
		if (num[i] !== num[j]) return false
		j++
	}
	return true
}
const isPalindrome = (n, c = n, b = 0) => (n < 0) ? false : c ? isPalindrome(n, ((c - c % 10) / 10), c % 10 + b * 10) : n == b
