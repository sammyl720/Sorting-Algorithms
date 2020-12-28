[<button style="outline:none;border:none;border-radius:500px;padding: 8px 12px;cursor:pointer;background-color:#11698e;color:white;">Back</button>](README.md)
### Selection Sort
Similiar to bubble sort, but instead of first placing 
large values into sorted position, it places small values into sorted position.

---

#### Selection Sort Pseudocode

- Store the index of the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number's index to be the new 'minimum' and continue until the end of the array.
- if the minimum is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the arrray is sorted
---

#### Code Implementation
```
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
```
---
### Big O time complexity of Selection Sort
O(N^2^)

---

[<button style="outline:none;border:none;border-radius:500px;padding: 8px 12px;cursor:pointer;background-color:#11698e;color:white;">Back</button>](README.md)
 