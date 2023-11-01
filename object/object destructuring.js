const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    year : 1968,
};

// let {bandName , famousSong} = band;
// console.log(bandName);
// console.log(famousSong);

// u can also gives a name of that particular keys
let {bandName : var1 , famousSong : var2} = band;
console.log(var1);
console.log(var2);
