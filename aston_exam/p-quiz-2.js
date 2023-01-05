var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("OK");
    }, 0);
});

p.then().then().then(function(data) {
    console.log(data);
});
