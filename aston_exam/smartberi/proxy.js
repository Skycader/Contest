function editableProxy (myObj) {
    return new Proxy(myObj, {
        toJSON: () => myObj,
        get: function (target, prop) {
            return Reflect.get(myObj, prop);
        },
        set: function (target, prop, receiver) {
            if (prop === 'billTo') {
                myObj.billToId = receiver?.id;
            }
            return Reflect.set(myObj, prop, receiver);
        },
    });
};
let da = {id:123}
let wrapped = editableProxy(da)
let id = wrapped.id // 123
wrapped.id=234
wrapped.id===da.id // true
wrapped.billTo={id:567,name:'Big Bad Bill'} // triggers setter side effect
wrapped.billToId // 567

