var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    return data;
});

var p3 = p.then(function(data) {
    return data;
});

console.log(p2, " ||| ", p3)
console.log(p2 === p3);
