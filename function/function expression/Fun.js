// function isEven(num){
//     return num%2 === 0;
// }

// using function expression

const isEven = function(num){ 
    return num%2 === 0;
}

// Using Arrow fun
const isOdd = (num) => {
    return num%2 !== 0;
}

console.log(isEven(5));
console.log(isOdd(5));