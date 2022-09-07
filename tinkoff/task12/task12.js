var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lines = 0
let N,A,B,C = 0
rl.on('line', function (data) {

        if (lines==0) {
          N = data*1
        }
        if (lines==1) {
          data = data.split(' ')
          A = data[0]*1
          B = data[1]*1
          C = data[2]*1
        }
        
        lines++
        if (lines==2) {
        console.log(coins()); process.exit(0);
        }

});

function coins() {
let max = 1000000
let count = 0
let abort = 0
for (let i = 0; i<max&&!abort; i++) {
    for (let j = 0; j<max&&!abort; j++) {
        for (let k = 0; k<max&&!abort; k++) {
            if (1+i*A+j*B+k*C<=N) {
                count++
            } else if ((i*A>N)&&(j*B>N)&&(k*C>N)){
                max = 0
                abort=1
            }
            if (k*C>N) {
                break;
            }
        }
        if (j*B>N) {
            break;
        }
    }
    if (i*A>N) {
        break
    }
}

return count;
}
