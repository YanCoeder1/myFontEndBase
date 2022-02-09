function allString(str) {
  let result = [];
  let arr = str.split('');
  function range(left, right) {
    if (left.length === arr.length) {
      result.push(left.join(''));
    } else {
      right.map( (item, index) => {
        let temp = [...right];
        temp.splice(index, 1);
        range([...left,item],temp);
      })
    }
  }
  range([], arr);
  return result;
}
console.log(allString('abc'));

// let arr = [2,3,5];
// let brr = arr.map( (item,index) => {
//   return item += index;
// }) 
// console.log(brr);