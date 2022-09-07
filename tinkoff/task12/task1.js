var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


rl.on('line', function (data) {
        let A,B,C,D = 0
        data = data.split(' ')
        A = 1*data[0]; B = 1*data[1]; C = 1*data[2]; D = 1*data[3]
        console.log(answer(A,B,C,D)); process.exit(0);  
});

function answer(a,b,c,d) {
    if (d<=b) {
        return a
    }
    return  a+(d-b)*c;
}
