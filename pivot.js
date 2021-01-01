const arrNums = [12,10,9,11,23,1,8,33,4,22];

function pivot(arr, start=0, end=arr.length - 1) {
  function swap(array, i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  const pivot = arr[start];
  let swapIndex = start;
  for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
      swapIndex++;
      swap(arr, i, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(pivot(arrNums, 0, arrNums.length - 1));
console.log(arrNums)
console.log(pivot(arrNums, 0, arrNums.length - 1));
console.log(arrNums)

module.exports = pivot;