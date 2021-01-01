## Quick Sort
- Like merge sort, exploits the fact that arrays of 0 ir 1 elements are always sorted.
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
---
###How does it work?
If this is are initial array
`[5,2,1,8,4,7,6,3]`
We pick some random element. for this example will pick first element (5) than move all the numbers that are less than it to the left of it and all the numbers that are greater than it to the right.

Which get us: `[3,2,1,4,5,7,6,8]`
So we now know the index (4) of the sorted element (5)
So now we recursively repeat the process on the left side and on the right side - picking a random element and putting smaller elements to the left of it and bigger elements to the right.

---
### Pivot Helper
- In order to implement quick sort, it's useful to first implement a function that is responsible arranging elements in an array on either side of a pivot
- Given an array, this function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- This helper should do this **in place**, that is, it should not create a new array
- When complete, it should return the index of the pivot

###Picking a Pivot
- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

###Pivot Helper Example
```
let arr = [5,2,1,8,4,7,6,3]
pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2,1,4,3,5,8,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,8,7]
// there are other acceptable mutations too!
```
---
### Pivot Pseudocode
- It will help to accept three arguments: an array, a start index, and an end index ( these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the should end up)
- Loop through the array from the start until the end
- - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e the pivot) with the pivot index
- return the pivot index

---
### Pivot Helper Implementation
```
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
```

---
### Quicksort Pseudocode
- Call the [pivot helper](#pivot-helper-implementation) on the array
- When the helper returns to you the updated pivot index, recursively call the [pivot helper](#pivot-helper-implementation) on the subarray to the left of that index, and the subarray to the right of that index
- Keep Recursively pivoting as long as the subarray to the left and/or right has at least two elements
- Return the sorted array once completed

---
### QuickSort Implementation
```
function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}
```
---
### Big O of quickSort


| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worse) | Space Complexity |
| :---: | :---: | :---: | :---: |
| O(n log n) | O(n log n) | O(n log n) | O(n) |