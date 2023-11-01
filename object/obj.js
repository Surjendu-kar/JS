// objects reference type
// object are good but not sufficient
// for real world data
// object store key value pairs
// object don't have index

// create an object :->
//const person = {name:"Surjo",age:19}; name and age is key value or properties
const person = {
    name:"Surjo",
    age:19,
    hobbies:["guitar","coding","listening music"] // u can also storearray
};
// key values are bydefault string
// const person = {
//     "name":"Surjo",
//     "age":19,
//     "hobbies":["guitar","coding","listening music"] // u can also storearray
// };
console.log(person);

 // how to access data from obj
 console.log(person.hobbies);

 // how to add key value pair to objects
 person.gender = "male"; 
 console.log(person);

 //how to access data from obj using square brackets
 console.log(person["name"]); // key values are bydefault string thatswhy using "" 
 
 // how to add key value to obj using square brackets
 person["game"] = "pubg"; 
 console.log(person);
