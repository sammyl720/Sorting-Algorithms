function merge(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let results = [];
  while(idx1 < arr1.length && idx2 < arr2.length) {
    if(arr1[idx1] < arr2[idx2]){
      results.push(arr1[idx1]);
      idx1++;
    } else{
      results.push(arr2[idx2]);
      idx2++;
    }
  }
  while(arr1.length > idx1){
    results.push(arr1[idx1]);
    idx1++;
  }
  while(arr2.length > idx2){
    results.push(arr2[idx2]);
    idx2++;
  }
  return results;
}

// console.table({list: merge([1,3,8,12,13],[2,4,7,9,14,20])})

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  const halfPoint = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, halfPoint));
  let secondHalf = mergeSort(arr.slice(halfPoint));
  return merge(firstHalf, secondHalf)
}

console.table({list: mergeSort([1,37,49,34,20,17,99,23,21,3,84,12,34,84,23,44,55,22,24])})