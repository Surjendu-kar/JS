// ES6 Syntax 
const isEven = (num) => num%2 === 0;  // new nd easy way

const isOdd = (num) => { // its also known as arrow fun
    return num%2 !== 0;
}
console.log(isEven(5));
console.log(isOdd(5));

// sum two numbers using Arrow fun
const Add = (num1 , num2) => num1 + num2;

console.log(Add(5,6));
console.log(Add(5)); // 5 + undefind = NaN (Not a Number)
console.log(Add());  // undefind + undefined = NaN 