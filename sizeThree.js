/*
A string is good if there are no repeated characters.

Given a string s, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
*/

//count good substrings of size 3
var f = str => {
	let count = 0
	for (let i = 0; i<=str.length-3; i++) {
		let string = str.slice(i,i+3)
		let arr = []
		for (let sym of string) {
			if (arr.indexOf(sym)==-1) arr.push(sym)	
		}
		if (arr.length == string.length) count+=1
	}
	return count
}
