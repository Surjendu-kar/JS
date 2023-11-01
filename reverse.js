function reverseString(num){
    return num.split('').reverse().join("")+" "
}
const num = "raj kar"
let revStr = ""

let New_num = num.split(' ')

for (let i=0; i<New_num.length; i++){
    revStr += reverseString(New_num[i]);
}
console.log(revStr); 

// const user_name = 'Raj kar';
// const rev_name = user_name.split(" ").map(reverseString).join(" ")
// console.log(rev_name)

// const arr = [1,2,3,4];

// const newArr = arr.filter((each) => console.log(each));
// // console.log(newArr)

const myName = "Rahul Kar"
const revName = myName.split(' ').map((each)=>each.split('').reverse().join("")).join(" ")
console.log(revName);