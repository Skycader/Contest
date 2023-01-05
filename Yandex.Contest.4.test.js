f=require('./Yandex.Contest.4.js')
const { assert } = require('chai');

function foo(callback) {
    setTimeout(function(){
        callback('A')
    },3000)
}

function bar(callback) {
    setTimeout(function(){
        callback('B')
    },2000)
}

function baz(callback) {
    setTimeout(function(){
        callback('C')
    },1000)
}

describe('Testing ... ', () => {
	test('Test 1', async () => {
	let res = await f(foo,bar,baz)
	expect(res).toEqual(['A','B','C'])
	})
})


/*
describe('Basic Test', () => {
  let response = 0
  f(foo,bar,baz).then(res=>{response=res})
  setTimeout(()=>{
  it('Promise test', () => {
    f(foo,bar,baz).then(response => Test.assertEquals(JSON.stringify(response), JSON.stringify(['DDA','B','CC'])));
  });
  },3500)
});
*/
