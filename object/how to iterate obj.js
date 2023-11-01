const person = {
    name:"Surjo",
    age:19,
    hobbies:["guitar","coding","listening music"] // u can also storearray
};
// for in loop
// Object.keys

for(let key in person){
 //   console.log(`${key} : ${person[key]}`);
    console.log(key,":",person[key]);
}

// console.log( Object.keys(person));

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let x in cars) {
  text += cars[x] + " ";
  console.log(x);
}

console.log(text);