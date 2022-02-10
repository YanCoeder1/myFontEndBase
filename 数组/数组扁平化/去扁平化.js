let arr = [12,20,[11,20,['str',true],['abc',15,[14,false]]]];
function foo(arr) {
  let result = [];
  arr.forEach( (item, index) => {
    if (Array.isArray(item)) {
      result = result.concat(foo(item));
    } else {
      result.push(item)
    }
  })
  return result;
}
// console.log(foo(arr));

function bar(arr) {
  return arr.reduce( (result, item) => {
    return result.concat(Array.isArray(item)? bar(item) : item);
  },[])
}
console.log(bar(arr));