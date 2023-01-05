const call = {
  caller: "mom", 
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();
