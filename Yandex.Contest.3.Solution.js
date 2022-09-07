//Определить правильную последовательность скобок из ()[]<>, желательно масштабируемое решение

const f2 = (str) => {
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

const f = (str) => {
  const brackets = "()[]<>"
  const stack = []

  for (let sym of str) {
      switch (brackets.indexOf(sym)%2) {
          case 0:
              stack.push(sym)
              break
          case 1:
              let got = stack.pop()
              let pair = brackets.indexOf(got)
              if (brackets.indexOf(sym)-1 !=  pair) return false
              break
      }
  }
  if (stack.length) return false
  return true
}

const f3 = (str) => {
  const brackets = "()[]<>"
  const stack = []

  for (let sym of str) {
      switch(brackets.indexOf(sym)%2) {
          case 0:
              stack.push(sym)
              break
          case 1:
              let open = brackets.indexOf(stack.pop())
              let close = brackets.indexOf(sym)-1
              if (open != close) return false
              break
      }
  }
  if (stack.length) return false
  return true
}

const f4 = (str) => {
  const brackets = "()[]<>"
  const stack = []

  for (let sym of str) {
      switch(brackets.indexOf(sym)%2) {
          case 0:
              stack.push(sym)
              break
          case 1:
              let open = brackets.indexOf(stack.pop())
              let close = brackets.indexOf(sym)-1
              if (open != close) return false
              break
      }
  }
  if (stack.length) return false
  return true
}

const f5 = (str) => {
  const brackets = "()[]<>"
  const stack = []

  for (let sym of str) {
      switch (brackets.indexOf(sym)%2) {
          case 0:
              stack.push(sym)
              break
          case 1:
              let open = brackets.indexOf(stack.pop())
              let close = brackets.indexOf(sym)-1
              if (open != close) return false
              break
      }
  }
  if (stack.length) return false
  return true
}

const f6 = (str) => {
  const bra = "()[]<>"
  const stack = []

  for (let sym of str) {
      switch (bra.indexOf(sym)%2){
          case 0:
              stack.push(sym)
              break
          case 1:
              let open = bra.indexOf(stack.pop())+1
              let close = bra.indexOf(sym)
              if (open != close) return false
              break
      }
  }
  if (stack.length) return false
  return true
}

const f0 = (str) => {
	const brackets = "()[]<>"
	const stack = []

	for (const sym of str) {
		switch (brackets.indexOf(sym)%2) {
			case 0:
				stack.push(sym)
				break
			case 1:
				const [open,close] = [brackets.indexOf(stack.pop())+1,brackets.indexOf(sym)]
				if (open != close) return false
				break
		}
	}
	if (stack.length) return false
	return true
}


const testBrackets = f;

console.log(testBrackets("[a] (b) <>")); // => true
console.log(testBrackets("[a] (b<)>")); // => false
console.log(testBrackets("<[(<a>)]>")); // => true
console.log(testBrackets("hello[ [w]orld(!)] <y[ande]x>!")); // => true
console.log(testBrackets("[>]")); // => false
console.log(testBrackets("hello () world ]")); // => false
console.log(testBrackets("empty")); // => true
console.log(testBrackets("[ xxx ( yyy )")); // => false