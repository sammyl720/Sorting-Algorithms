const pivot = require('./pivot');

const arrNums = [4,6,9,1,2,5,3];

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right)
  }
  // return arr;
}
quickSort(arrNums)
console.table({ list: arrNums});