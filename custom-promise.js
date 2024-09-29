class Prom {
  result = null;

  executeFunc = null;

  resolve(data) {
    this.result = data;
    if (this.executeFunc) this.executeFunc(data);
  }

  then(fun) {
    if (this.result !== null) return fun(this.result);
    this.executeFunc = fun;
  }

  constructor(fun) {
    fun.call(this, this.resolve.bind(this));
  }
}
