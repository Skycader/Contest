var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("OK");
    }, 0);
}).
then();

var p2 = p.then(function(data) {
	console.log(data)
    return data + " Good";
})
