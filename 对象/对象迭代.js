/**
 * 对象不能 for...of 循环
 * 数组能，有自己的 @iterator
 * 通过definePrototype添加 Symbol.iterator 这个属性
 * 对应的方法手动添加 next方法
 */
let obj = {
  a: 12,
  b: 20
}
Object.defineProperty(obj, Symbol.iterator, {
  writable: true,
  configurable: true,
  enumerable: true,
  value: function() {
    let _this = this;
    let key = Object.keys(obj);
    let flag = 0;
    return {
      next: function() {
        return {
          value: obj[key[flag++]],
          done: (flag) > key.length
        }
      }
    }
  }
})
//手动调用
// let test = obj[Symbol.iterator]();
// console.log(test);
// let t1 = test.next();
// console.log(t1);
// let t2 = test.next();
// console.log(t2);
// let t3 = test.next();
// console.log(t3);


for (const item of obj) {
  console.log(item);
}