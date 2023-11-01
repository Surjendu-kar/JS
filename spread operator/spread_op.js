//spread operator
const arr1 = ["items1","items2"];
const arr2 = ["items3","items4"];
const NewArray = [...arr1,...arr2,"items5"];

console.log(NewArray);

// u can spread the array 
const newArray = [..."123456789"];
console.log(newArray);
console.log(newArray[1]);

// spread operator in objects
const obj1 = {
    key1  : "value1",
    key2  : "value2",
};
const obj2 = {
    key1  : "valueUnique",
    key3  : "value3",
    key4  : "value4",
};
const newObject1 = {...obj1, ...obj2};
console.log(newObject1);

const newObject2 = { ...obj2,...obj1}; // order change
console.log(newObject2);
// add new key
const newObject3 = {...obj1, ...obj2,key5 : "NeWvalue"};
console.log(newObject3);
