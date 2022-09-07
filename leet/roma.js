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

function IntToRoman(s) {
    let a = {}
    a[0] = 'I'; a[5] = 'V'; a[10]='X'; a[50]='L'; a[100]='C'; a[500]='D'; a[1000]='M';
    let ar = [0,5,10,100,500,1000]
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
//console.log(romanToInt("MCMXCIV")) //1994
console.log(romanToInt("MMMCMXCIX"))