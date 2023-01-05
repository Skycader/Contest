function generateNumber(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber(str){
    generateNumber(str)
    .then(value => {
        console.log(value);
        return "hello from then";
    })
    .catch(error => {
        console.log(error);
        return "hello from catch";
    })
    .finally(() => {
        console.log("End");
        return "hello from finally";
    })
    .then(message => console.log(message));
}
printNumber("3");
