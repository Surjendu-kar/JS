// primitive 
// In primitive value stored in the stack

let num1 = 6;
let num2 = num1;
console.log("num1 = "+num1);
console.log("num2 = "+num2);
num1++;
console.log("num1 = "+num1);
console.log("num2 = "+num2);

// reference types
// value stored in heap memory
let arr1=["val1","val2"];
let arr2=arr1;

console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);

arr1.push("val3");
console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);
