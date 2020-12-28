### Insertion Sort
---

Builds up the sort by gradually creating a larger left half which is always sorted.

---
###Insertion Sort Pseudocode
- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct order.
- Repeat until the array is sorted.

---
### Insertion Sort Implementation
```
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
```
---
### Big O Notation time complexity of insertion sort
O(N^2)