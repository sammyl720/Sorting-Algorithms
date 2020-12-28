function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i;j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps){
      break;
    }
  }
  return arr;
}

const computedArr = [34,12,18,4,9,1,32,27];

console.table({ unsorted: computedArr, sorted: bubbleSort([...computedArr])})