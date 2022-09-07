const isPalindrome = (n,c=n,b=0) => (n<0) ? false : c ? isPalindrome(n,((c-c%10)/10),c%10+b*10) : n==b
