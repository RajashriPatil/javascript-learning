/* console.log(2==2) // true  | only checks value
console.log(2!=1) //true
console.log(2>1) // true
console.log(2<1) // false
console.log(2>=1) // true
console.log(2<=1) // false */

// Non  predictable
console.log("2">1); // true
console.log("02">1); // true

console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true null converted in 0

console.log(undefined==0)// false
console.log(undefined>0) // false
console.log(undefined<0) // false

// ===
console.log("2"===2); // false | check datatype and values
