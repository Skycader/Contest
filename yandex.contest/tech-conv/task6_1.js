const arr = ['any [complex] string', function(){},{a:2},[1,2,3],[[[5]]]]

function flatten(arr) {
    const result = [];
    const stack = [];
  
    for (let i = 0; i < arr.length || stack.length; i++) {
      if (i >= arr.length) {
        [ arr, i ] = stack.pop();
      } else if (arr[i] instanceof Array) {
        stack.push([ arr, i ]);
        arr = arr[i];
        i = -1;
      } else {
        result.push(arr[i]);
      }
    }
    
    return result;
  }

  console.log(flatten(arr))