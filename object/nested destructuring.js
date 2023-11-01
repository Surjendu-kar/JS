const users = [
    {userId: 1,firstName: "Rahul", gender: "male"},  // 1 obj
    {userId: 2,firstName: "Surjo", gender: "male"},  // 2 obj
    {userId: 3,firstName: "Sunayna", gender: "female"}, // 3 obj
 ]

// const [user1,user2,user3] = users;
// console.log(user1);

const [{firstName}, ,{gender}] = users;
console.log(firstName);
console.log(gender);

const [{firstName : User1FirstName}, ,{gender : User3gender}] = users;
console.log(User1FirstName);
console.log(User3gender);
