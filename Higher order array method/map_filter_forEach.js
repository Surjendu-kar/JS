const arr1=[3,4,5,12];
arr1.forEach((element)=>{   //used for perform operation
    console.log(element*2);
})

const arr2=[13,24,45,2];
let newArr = arr2.map((element)=>{  // create new array by performing some operation on eacg array element
    return element+1;
})
console.log(newArr)


const arr3=[13,24,45,2,9,3,10];

let myArr = arr3.filter((element)=>{   // used for return some condition related values 
    return element < 15;
})
console.log(myArr)