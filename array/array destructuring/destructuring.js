const myArray = ["val1","val2"];
// let myval1 = myArray[0];
// let myval2 = myArray[1];

//array destructuring :->
let [myval1,myval2] = myArray;
console.log("value of myval1  ->",myval1);
console.log("value of myval2  ->",myval2);

// push one element
myArray.push("val3");

let [val1,val2,val3] = myArray;
console.log("\nvalue of val1  ->",val1);
console.log("value of val2  ->",val2);
console.log("value of val2  ->",val3);

// suppose we have only one element   
const newArray = ["mango"];
let [num1,num2,num3] = newArray;
console.log("\nvalue of num1  ->",num1);
console.log("value of num2  ->",num2);
console.log("value of num32  ->",num3);

// skip the 2nd value 
const nArray = ["mango","banana","apple"];
let [n1,,n3] = nArray;
console.log("\nvalue of n1  ->",n1);
console.log("value of n3  ->",n3);

// store last two val into new array
const NewArray = ["mango","banana","apple","lemon"];
// let [new1,new2] = NewArray;
// const array1 = NewArray.slice(2);

//new way :->
let [new1,new2,...array1] = NewArray; // here use using spread operator
console.log("\nvalue of new1  ->",new1);
console.log("value of new2  ->",new2);
console.log('other values ',array1);

