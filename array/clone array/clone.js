// clone means copy

let array1 = ["items1","items2"];
let array2 = array1;
console.log(array1);
console.log(array2);
console.log(array1 === array2);


let arr1 = ["items1","items2"];
// let arr2 = ["items1","items2"];
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1);
// new way

//spread operator
let arr2 = [...arr1];

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

arr1.push("items3");
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);