function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let minValue = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minValue]){
        minValue = j;
      }
    }
    if(i !== minValue){
      const temp = arr[i];
      arr[i] = arr[minValue];
      arr[minValue] = temp;
    }
  }
  return arr;
}

console.table(selectionSort([17,9,2,19,56,87,34,62,45,4,18,2]));