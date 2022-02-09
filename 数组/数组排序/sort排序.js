let arr = [11,15,20,13,25];
arr.sort( (a, b) => {
  //1 为从小到大(升序), -1则相反
  //return a > b ? 1 : -1; //[ 11, 13, 15, 20, 25 ]
  return a > b ? -1 : 1; //[ 25, 20, 15, 13, 11 ]
})

let arrObj = [
  {
    name: 'Tony',
    age: 25
  },{
    name: 'Jack',
    age: 22
  },{
    name: 'Jams',
    age:23
  }
]
// arrObj.sort( (a, b) => {
//   return  a.age > b.age ? 1:-1;
// })

//经典的sort 排序数组对象
function compare (prop) {
  return (a, b) => {
    let value1 = a[prop];
    let value2 = b[prop];
    return value1 > value2 ? 1 : -1;
  }
}
arrObj.sort(compare('age'))
console.log(arrObj[0]);

