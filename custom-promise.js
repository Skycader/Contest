class Prom {
  result = null;
  resolved = false;
  executeFunc = null;

  resolve(data) {
    this.result = data;
    this.resolved = true;
    if (this.executeFunc) this.executeFunc(data);
  }

  then(fun) {
    if (this.resolved) return fun(this.result);
    this.executeFunc = fun;
  }

  constructor(fun) {
    fun.call(this, this.resolve.bind(this));
  }
}
