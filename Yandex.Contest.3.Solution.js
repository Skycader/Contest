//Определить правильную последовательность скобок из ()[]<>, желательно масштабируемое решение

/* 31 March 2024 21:46 */
const f = (str) => {
  const syms = "()[]<>";
  const stack = [];
  for (let sym of str) {
    switch (syms.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = stack.pop();
        if (syms.indexOf(open) !== syms.indexOf(sym) - 1) return false;
        break;
    }
  }

  return stack.length === 0;
};

/* 15 sept 2023 14:11 NIIAS */

const f = (str) => {
  const stack = [];
  const brs = "()<>[]";

  for (let sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()) + 1, brs.indexOf(sym)];
        if (open !== close) return false;
    }
  }
  if (stack.length) return false;
  return true;
};

/* 14 june 2023 */
const f = (str) => {
  const brs = "()[]<>";
  const stack = [];
  for (let sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()), brs.indexOf(sym) - 1];
        if (open !== close) return false;
        break;
    }
  }

  if (stack.length) return false;
  return true;
};

/* 18.02.2023 17:43 */

const f = (str) => {
  const brs = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()) + 1, brs.indexOf(sym)];
        if (open !== close) return false;
        break;
    }
  }

  if (stack.length) return false;
  return true;
};

/* 21.01.2023 12:09 */

const f = (str) => {
  const brs = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()) + 1, brs.indexOf(sym)];
        if (open !== close) return false;
        break;
    }
  }

  if (stack.length) return false;
  return true;
};

//

const f = (str) => {
  const bra = "[]()<>";
  const stack = [];

  const defineType = (b) => bra.indexOf(b) % 2;

  for (let sym of str) {
    console.log(defineType(sym));
    switch (defineType(sym)) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = stack.pop();
        if (bra.indexOf(open) + 1 !== bra.indexOf(sym)) return false;
        break;
    }
  }

  if (stack.length) return false;

  return true;
};

const f = (str) => {
  const brs = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()) + 1, brs.indexOf(sym)];
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

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
  const brs = "()[]<>";
  const stack = [];

  for (const sym of str) {
    switch (brs.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [brs.indexOf(stack.pop()) + 1, brs.indexOf(sym)];
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f = (str) => {
  const brackets = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brackets.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let got = stack.pop();
        let pair = brackets.indexOf(got);
        if (brackets.indexOf(sym) - 1 != pair) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f3 = (str) => {
  const brackets = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brackets.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = brackets.indexOf(stack.pop());
        let close = brackets.indexOf(sym) - 1;
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f4 = (str) => {
  const brackets = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brackets.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = brackets.indexOf(stack.pop());
        let close = brackets.indexOf(sym) - 1;
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f5 = (str) => {
  const brackets = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (brackets.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = brackets.indexOf(stack.pop());
        let close = brackets.indexOf(sym) - 1;
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f6 = (str) => {
  const bra = "()[]<>";
  const stack = [];

  for (let sym of str) {
    switch (bra.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        let open = bra.indexOf(stack.pop()) + 1;
        let close = bra.indexOf(sym);
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
};

const f0 = (str) => {
  const brackets = "()[]<>";
  const stack = [];

  for (const sym of str) {
    switch (brackets.indexOf(sym) % 2) {
      case 0:
        stack.push(sym);
        break;
      case 1:
        const [open, close] = [
          brackets.indexOf(stack.pop()) + 1,
          brackets.indexOf(sym),
        ];
        if (open != close) return false;
        break;
    }
  }
  if (stack.length) return false;
  return true;
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
