let arr = [12,21,20,11,15,12];

function xierSort(arr) {
  let len = arr.length;
  let m = parseInt(len / 2);
  while(m > 0) { //不能取 0 会死循环
    for(let i = 0; i < len; i++) {
      let n = i;
      while(n-m > 0 && arr[n] < arr[n-m]) {
        let temp = arr[n];
        arr[n] = arr[n-m];
        arr[n-m] = temp;
        n -= m;
      }
    }
    m = parseInt(m / 2);
  }
}
xierSort(arr);
console.log(arr);