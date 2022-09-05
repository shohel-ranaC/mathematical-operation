let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2;
console.log(sum);

console.log(Math.ceil(5.95));

var num3 = 5.50;
var absNumber = Math.ceil(num3);
console.log(absNumber);

console.log(Math.floor(num3));

console.log(Math.round(num3));

let x = Math.random();
let fixNumber = x.toFixed(3);
console.log(fixNumber);

let num4 = 4;
// if (num4 != 10) {
//     console.log("not show value");
// }
// else{
//     console.log("value is show 10 or others");
// }
if (num4 < 0) {
    console.log("you have got negative value");
}
else if(num4 <= 5){
    console.log("you have got 1 to 5 digit");
}
else if(num4 >= 10){
    console.log("you have got 10 and upper number");
}

