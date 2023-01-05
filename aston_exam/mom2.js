
const call = {
  caller: "mom", 
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();
