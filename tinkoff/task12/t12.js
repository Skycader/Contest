let N = 15
let A = 4
let B = 7
let C = 9

let max = 1000000
let count = 0
let iterator = 0
let abort = 0
for (let i = 0; i<max&&!abort; i++) {
    // console.log("iMAX: ", max)
    for (let j = 0; j<max&&!abort; j++) {
        for (let k = 0; k<max&&!abort; k++) {

            // console.log(iterator, "iMAX: ", max)
            // iterator++
            if (1+i*A+j*B+k*C<=N) {
                
                count++
                
                // console.log("ijk",i,j,k)
                console.log("1",A*i,B*j,C*k, 1+A*i+B*j+C*k)
            } else if ((i*A>N)&&(j*B>N)&&(k*C>N)){
                max = 0
                // console.log("MAX", i,j,k)
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

console.log(count)