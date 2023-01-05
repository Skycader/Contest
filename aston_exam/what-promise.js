var p = new Promise(function() {
    return "OK";
});

p.then(data=>console.log(data))
