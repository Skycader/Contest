var p = new Promise(function(resolve, reject) {
    throw "Sorry";
}).
then((data) => console.log(data), (data) => data);
