// https://api.jquery.com/
"use strict";

// document.getElementById("heading");
//
// let myEl = $("#p-one");
// console.log(myEl);
//
// let heading = $("#heading").text();
// console.log(heading);
//
// let user1 = {
//     name: "justin",
//     isLoggedIn: false,
//     age: 37
// }
//
// let loginStatus = user1.isLoggedIn;
//
// if(loginStatus === true){
//     $("#heading").addClass("border")
// }

// console.log(10 % 3)
//
// for (var i = 0; i <= 10; i++){
//     console.log(i);
// }
//
// console.log(!!true)

// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
//
// // console.log(
// //     array[array.length - 1]
// // );
// console.log(
//     array.splice(array.indexOf('Ringo'), 0, 'Yoko')
//
// );
// console.log(array);


// console.log(10 % 3);
//
//
// var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];
//
//
// console.log(array[array.length - 2]);



// var band = {}
// band.shred = function() {
//     console.log('RAAAAAAAAAA!!!!');
//
// }
// console.log(band.shred())

// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"

// var i = 0;
// var character='';
// let strings = "How are you doing ,.@$#today?";
// const myArray = strings.split("");
// for (i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//
//
// character = strings.charAt(i);
//     if (!isNaN(character * 1)){
//         alert('character is numeric');
//     }else{
//         if (character == character.toUpperCase()) {
//             alert ('upper case true');
//         }
//         if (character == character.toLowerCase()){
//             alert ('lower case true');
//         } else {
//             alert("this is not a letter")
//         }
// }
// }

function sumDigitsFromString(str) {
    let nums = [];
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            nums.push(Number(str[i]));
        }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// Test it
console.log(sumDigitsFromString("42958372" + ""));