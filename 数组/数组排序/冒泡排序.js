let arr = [21,10,25,15,23];
function quickSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-1; j++) {
      if (arr[j] < arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
quickSort(arr);
console.log(arr);