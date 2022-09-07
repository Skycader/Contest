const f = (str) => {
  let stack = [];
  let brackets = "()[]<>";
  for (sym of str) {
    let index = brackets.indexOf(sym);
    // console.log(`index: ${index}`);
    switch (index % 2) {
      case 0:
        stack.push(index);
        break;
      case 1:
        let bracketType = stack.pop();
        bracketType++;
        // console.log(`${bracketType} != ${index}`);
        if (bracketType != index) return false;
        break;
    }
  }
  if (!stack.length) return true;
  return false;
};

const testBrackets = f;

console.log(testBrackets("[a] (b) <>")); // => true
console.log(testBrackets("[a] (b<)>")); // => false
console.log(testBrackets("<[(<a>)]>")); // => true
console.log(testBrackets("hello[ [w]orld(!)] <y[ande]x>!")); // => true
console.log(testBrackets("[>]")); // => false
console.log(testBrackets("hello () world ]")); // => false
console.log(testBrackets("empty")); // => true
console.log(testBrackets("[ xxx ( yyy )")); // => false
