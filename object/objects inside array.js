// multiple object in an array
const users = [
   {userId: 1,firstName: "Rahul", gender: "male"},  // 1 obj
   {userId: 2,firstName: "Surjo", gender: "male"},  // 2 obj
   {userId: 3,firstName: "Bikram", gender: "male"}, // 3 obj
]
for(user of users){
    console.log(user);
}