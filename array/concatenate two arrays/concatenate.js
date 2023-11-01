let arr1 = ["items1","items2"];

// let arr2 = arr1.slice(0).concat(["item3","item4"]);
// let arr2 = [].concat(arr1,"item3","item4");

//spread operator

// let arr2 = [...arr1,"item3","item4"];
let myarr = ["item3","item4"];
let arr2 = [...arr1 , ...myarr];

console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);