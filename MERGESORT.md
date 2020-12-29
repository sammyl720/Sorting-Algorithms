### Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 elements are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

#### How does it work?

Imagine we have this array here &swarr;
~~~
[8,3,5,4,7,6,1,2]
~~~
The code starts by splitting the array in half
Until we're left with just 0 or 1 element arrays

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[8,3,5,4,7,6,1,2]`
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&searr;
&nbsp;&nbsp;&nbsp;`[8,3,5,4]` &nbsp;&nbsp;&nbsp;&nbsp;`[7,6,1,2]`
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&searr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&searr;
`[8,3] `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `[5,4]`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `[7,6]` &nbsp;&nbsp;&nbsp;&nbsp;`[1,2]`
 &nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&searr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&searr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&searr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&searr;
`[8]` `[3]` `[5]` `[4]` `[7]` `[6]` `[1]` `[2]`

Next we start merging them together into sorted arrays
`[8]` `[3]` `[5]` `[4]` `[7]` `[6]` `[1]` `[2]`
Becomes
`[3,8]` `[4,5]` `[6,7]` `[1,2]`

Now we have four seperately sorted arrays of 2 elements.

##### Merging
We merge the arrays my making some comparisions between
the two arrays that are merging: A = `[3,8]` B =  `[4,5]`
Since we know that both arrays are sorted, we can check first element of each array to see which one is smaller (which goes first), in this case A[0] (3) is smaller than B[0] (4), so 3 goes first in the merging array C = `[3]`. Next, we compare A[1] (8) to B[0] (4), to see which one is smaller, in this case B[0] (4) is smaller. So we add B[0] to the new array C = `[3,4]`. Next we compare the remaining element of each array to each other to see which one is smaller A[1] (8) to B[1] (5). Since 5 is smaller we added to the new array C = `[3,4,5]`. Finally we add the last element (8) to the new array C = `[3,4,5,8]`

We repeat this process to the other half `[6,7]` `[1,2]`. To get [1,2,6,7].

So we are arrays look like: `[3,4,5,8]` and [1,2,6,7]

We can repeat the [the proccess mentioned above](#merging) to merge the remaining two arrays into a final array.
`[1,2,3,4,5,6,7,8]`

---
### Merging arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging to sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the input arrays.
- This function should run in O(n + m) time and O(n + m) space **should not** modify the parameters passed to it.

#### Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- while there are still values we haven't looked at...
- - If the value in the first array is smaller than the value of the second array, push the value in the first array into our results and move on to the next value in the first array 
- - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
- - Once we exhaust one array, push in all remaining valus from the other array

#### Merging Arrays Implementation

```
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
```
---
#### mergeSort Pseudocode
- Break up the array into halves.
- Use recursion to keep halving the arrays until the array length is less than or equal to 1.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together, return the merged (and sorted!) array.

#### mergeSort Code Implimentation
[*Use the merge helper function described above*](#merging-arrays-implementation)
```
function mergeSort(arr){
  if(arr.length <= 1) return arr;
  const halfPoint = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, halfPoint));
  let secondHalf = mergeSort(arr.slice(halfPoint));
  return merge(firstHalf, secondHalf);
}
```
---
### Big O of mergeSort


| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worse) | Space Complexity |
| :---: | :---: | :---: | :---: |
| O(n log n) | O(n log n) | O(n log n) | O(n) |