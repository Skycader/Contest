function Promise(executor) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
 if (typeof executor !== 'function') {
   throw new TypeError('Promise constructor\'s argument is not a function');
 }
  this._deferredState = 0;
  this._state = 0;
  this._value = null;
  this._deferreds = null;
 // if (executor === noop) return;
  doResolve(executor, this);
}

function doResolve(fn, promise) {
  var done = false;
  var resolveCallback = function(value) {
      if (done) return;
      done = true;
      resolve(promise, value);
 };
}
const req = (callback) => {
	callback("DATA")
}

const p = new Promise((resolve,reject)=>{
	console.log("INIT")
	req(resolve)

})

p.then(res=>console.log(res))
