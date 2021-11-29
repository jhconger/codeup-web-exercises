// let isAtBar = false;
// let bac = .07;
// let age = 22;
// let cashOnHand = 5.99;
//
//
// let canHaveADrink = (isAtBar || (bac < .08 && age >= 21 && cashOnHand >= 5.00)) // true && false && true && true --> false
// if (canHaveADrink){ // true or false
//     console.log("Have a brewski my dude!");
// }else{ // it was not true
//     console.log("Sorry buddy, no brew for u");
// }
//
// console.log(true == "true")

// function reverseString(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }
//
// console.log(reverseString("hello"))

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));