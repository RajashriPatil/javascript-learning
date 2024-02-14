// MDN Documentation => Mozila Organization
// ecma6 script => Original documentation (standards)

"use strict"; //treat all JS codde as newer version

// alert(3+3) ReferenceError: alert is not defined | We are using nodejs not browser

// console.log(3+3) console.log("Rajashri") => Error

console.log(3+3); console.log("Rajashri") // code readability should be high


// ------- Data Types ---- (dynamically typed language)

/* Primitive data type:
    7 types: String, Number, Boolean, null, undefined, symbol, BigInt 

    Reference type: (non premitive)=>
    Arrays, Objects, Functions => datatype function and data type of function is =>object function
*/
let name="Rajashir"
let age=18
let isLoggedIn=false
let bigumber=32344342352352352131n
const heros=["shaktiman","spiderman", "superman"]

let obj={
    name:"Rajashri",
    age:22,
}

const myFunction=function(){
    console.log("Hello world")
}


// number => 2 to power 33
// bigint
// string =>""
// boolean =>true/false
// null =>standalone value | empty
// undefine => now value not assigned
// symbol => uniquness

// object

console.log(typeof "Rajashri");// string
console.log(typeof undefined); // undefined
console.log(typeof null);// object 

// we can also use typeof(variable) method




