const person = {
    name:"Surjo",
    age:19,
    // person hobbies:["guitar","coding","listening music"]  it is not possible 
    "person hobbies":["guitar","coding","listening music"] //  thatswhy bracket notation is more usefull 
};
// console.log(person.person hobbies); not possible
console.log(person["person hobbies"]);