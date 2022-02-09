function allConcat(str) {
  let arr = str.split('');
  let result = [];
  function range(left, right) {
    if (left.length === arr.length) {
      result.push(left.join(''));
    } else {
      right.map( (item, index) => {
        let temp = [...right];
        temp.splice(index, 1);
        range([...left,item], temp);
      })
    }
  }
  range([], arr);
  return result;
}
allConcat('abcd')