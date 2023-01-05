var p = new Promise(function() {
	resolve("OK")
    return "OK";
});

var p2 = p.then(function(data) {
	consolelog("p2: "+data)
    return data;
});

var p3 = p2.then(function(data) {
	console.log("123")
    console.log( data + " Bye");
});
