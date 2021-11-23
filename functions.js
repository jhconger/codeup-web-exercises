// function tryToGetADrink(isAtBar, bac, age, cashOnHand){ //function definition contains PARAMETERS
//
//
//
//     let canHaveADrink = (isAtBar || (bac < .08 && age >= 21 && cashOnHand >= 5.00)) // true && false && true && true --> false
//
//     if (canHaveADrink){ // true or false
//         console.log("Have a brewski my dude!");
//     }else{ // it was not true
//         console.log("Sorry buddy, no brew for u");
//     }
//
// }
// console.log("First invocation:")
// tryToGetADrink(true,.07,20,5.01); //when you CALL (INVOKE) the function you pass ARGUMENTS
//
// console.log("Second invocation:")

//Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!
// function isTodayTheDayToFly(cloudy, planesScheduled) {
//     if (!cloudy && planesScheduled < 10) {
//         console.log("it is a good day to fly!");
//     } else { // it was not true
//         console.log("Sorry buddy, no fly for you!");
//     }
// }
//     console.log(isTodayTheDayToFly(true,8));
//
function getFullName(firstName, lastName){
    return firstName + "" + lastName;
}
let fullName = function(firstName, lastName){
    return firstName + "" + lastName;
}

console.log(fullName("justin","conger"))

// Return the sum of two numbers
// Return the difference of two numbers
// Return the product of two numbers
// Return the dividend of two numbers
function getSum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log(getSum(2 , 3))

function getDiff(numberOne, numberTwo){
    return numberOne - numberTwo;
}
console.log(getDiff (5,3))

function getProduct(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
console.log(getSum (5,3))

function getDividend(firstNumber, secondNumber){
    return firstNumber % secondNumber;
}
console.log(getDividend(8,4))

"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */