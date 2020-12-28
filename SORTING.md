### What is sorting?
---

Sorting is the process of rearranginig the items in a collection (e.g. an array) so that the items are in some kind of order.

---
##### Examples
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue
  
---
```
function sort(arr) {
  return arr.sort((a,b) => a - b);
}

sort([23,45,6,12,13]);
// should return [6,12,13,23,45]
```

---
### Why do we need to learn this?

---
- Sorting is an incredible common task, so it's good to know how it works.
- There are many different ways of to sort things, and different techniques have their own advantages and disadvantages

---
## Objectives
- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms