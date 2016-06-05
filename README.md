# cycle-iteration
JavaScript library for cycle iteration array, collection, etc...

```
var mas = [1, 2, 3];
var ci = new CycleIterator(mas);

console.log(ci.next());     //1
console.log(ci.next());     //2
console.log(ci.next());     //3
console.log(ci.next());     //1
console.log(ci.next());     //2
```