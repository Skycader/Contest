const add = (x, y) => x + y;
const double = (x) => add(x, x);

function sequence(funs) {
  let obj = {
      num : 0,
      calculate: function(){
        let num = this.num
        this.num = 0
        return num
      }
  }
  for (let item of Object.entries(funs)) {
      obj[item[0]] = function(){
          this.num = (this.num) 
              ? item[1].apply(this,[this.num, ...arguments])
              : item[1].apply(this,arguments)
          return this
      }
  }
  
  return obj 
}

let s = sequence({ add, double });