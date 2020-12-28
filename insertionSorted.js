function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    const currentVal = arr[i]; // 5
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
  }
  return arr;
}

console.table(insertionSort([3,2,5,8,12,1,9,18,14,11]));