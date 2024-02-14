let score=33;
console.log(typeof score); // Number
console.log(typeof(score))// Number
score="33aab" 
console.log(typeof score); // string
let valueNumber=Number(score)
console.log(typeof valueNumber); // Number
console.log(valueNumber); // NaN


score=null;
console.log(typeof score); // object
valueNumber=Number(score)
console.log(typeof valueNumber); // Number
console.log(valueNumber); // 0

score=undefined;
console.log(typeof score); // undefined
valueNumber=Number(score)
console.log(typeof valueNumber); // Number
console.log(valueNumber); // NaN

// "33" =>33
// "33abc"=>NaN
// true => 1 \ false =>0

let isLogIn=1
let booleanval=Boolean(isLogIn)
console.log(booleanval); // true

//1 => true \ 2=> false
// "" =>false \ "raj"=>true

let someNumber=33
let stringnumber=Stirng(someNumber)
console.log(stringnumber);// "33"
console.log(typeof(stringnumber));// string





