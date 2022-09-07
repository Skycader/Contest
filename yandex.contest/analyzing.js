const findCommon = (str1 = '', str2 = '') => {
    const s1 = [...str1];
    const s2 = [...str2];
    const arr = Array(s2.length + 1).fill(null).map(() => {
       return Array(s1.length + 1).fill(null);
    });
    for (let j = 0; j <= s1.length; j += 1) {
       arr[0][j] = 0;
    }
    for (let i = 0; i <= s2.length; i += 1) {
       arr[i][0] = 0;
    }

	return arr;
}

console.log(findCommon('123','456'))
