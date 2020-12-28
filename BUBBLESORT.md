[<button style="outline:none;border:none;border-radius:500px;padding: 8px 12px;cursor:pointer;background-color:#11698e;color:white;">Back</button>](README.md)
### Bubble Sort
---

A sorting algorithm where the largest values bubble up to the top!

---

#### Before we sort, we must swap!
---

Many sorting algorithms involve some type of (e.g. swapping two numbers to put them in order)

####Swapping Functionality
```
// ES5
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```
---

### bubbleSort Pseudocode

- Create a function called **bubbleSort** which accepts an array as a parameter
- Start looping with a variable called *i*, from the end of the array towards the beginning
- Start an inner loop with a variable called *j* from the beginning of the array until *i - 1*
- if *arr[j]* is greater than *arr[j + 1]*, [swap those two values](#swapping-functionality)!
- return the sorted array

### bubleSort Code
```
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i;j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### Bubble Sort Optimization
---
  We can tweak the bubbleSort function for Optimization
  by checking at the end of each loop if there where no swaps made on that loop. If it's true, then we know that the array is already sorted and there is no need to keep on looping.
```
// Optimized with noSwap check
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
```
---

### Big O time complexity of Bubble Sort
 **Best Case:** O(N)
 **Worst Case:** O(N^2^)

---
[<button style="outline:none;border:none;border-radius:500px;padding: 8px 12px;cursor:pointer;background-color:#11698e;color:white;">Back</button>](README.md)