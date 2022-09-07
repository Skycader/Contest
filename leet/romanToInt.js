function romanToInt(s) {
let a = {}
a['I'] = 1; a['V'] = 5; a['X']=10; a['L']=50; a['C']=100; a['D']=500; a['M']=1000;
let r = 0;
for (var i = 0; i<(s.length); i++) {

    if (a[s[i]]<a[s[i+1]]) {
        r+= -1*(a[s[i]])
    } else {
        r+= (a[s[i]])
    }
}
return r;

}


//console.log(r("CDXCIV"))
//console.log(r("MMCDXLI"))
//console.log(r("MCMXCIV")) //1994
console.log(romanToInt(process.argv[2]))
