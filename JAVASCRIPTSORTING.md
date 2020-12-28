### Javascript has a sort method...

---

Yes, it does!
...but it doesn't always work the way you expect.

<img src='https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510__480.jpg' width='50'>
```
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// ['Algorithms', 'Colt', 'Data Structures', 'Steele']
```
<img src='https://cdn.pixabay.com/photo/2013/04/01/09/07/sad-98457__480.png' width='40'>
```
[6,4,15,10].sort();
// [10,15,4,6]
```
---

#### Telling Javascript how to sort
---
- The built-in sort method accepts an optional *comparator* function
- You can use this comparator function to tell javascript how you want it to sort.
- The comparator looks at pairs of elements(*a*, and *b*), determines their sort order based on the return value.
- - If it returns a negative number, *a* should come before *b*
- - If it returns a positive number, *b* should come before *a*

#### Example
~~~
function numberCompare(num1, num2){
  return num1 - num2;
}
[6,4,15,10].sort(numberCompare);
// [4,6,10,15]
~~~

