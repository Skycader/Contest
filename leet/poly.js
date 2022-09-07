var isPalindrome = function(x) {
    const div = (num1,num2) => (num1-num1%num2)/num2
	if (x<0) return false 
    let xcopy = x
    let check = 0
    while (xcopy) {
        check = xcopy%10+check*10
        xcopy = div(xcopy,10)
    }
	console.log(check)
    if (x==check) return true
    return false
};

console.log(isPalindrome(23))
console.log(isPalindrome(232))

