function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call.anotherCaller;

newCall();
