// // // "use strict";
// // //
// // // /* ########################################################################## */
// // //
// // // /**
// // //  * TODO:
// // //  * Create a function named `analyzeColor` that accepts a string that is a color
// // //  * name as input. This function should return a message which relates to the
// // //  * color stated in the argument of the function. For colors you do not have
// // //  * responses written for, return a string stating so
// //
// //
// // function analyzeColor(colorName) {
// //     if (colorName === "blue") {
// //         return "Just like the sky!";
// //     } else if (colorName === "red") {
// //         return "Just like fast cars!";
// //     } else if (colorName === "green") {
// //         return "Just like emeralds!"
// //     } else {
// //         return "Sorry I do not recognize the color " + (colorName) + "!"
// //     }
// // }
// //
// // console.log(analyzeColor("gren"))
// //
// //
// // // * Example:
// // //  *  > analyzeColor('blue') // returns "blue is the color of the sky"
// // //  *  > analyzeColor('red') // returns "Strawberries are red"
// // //  *
// // //  *
// // //  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// // //  *
// // //  * You should use an if-else-if-else block to return different messages.
// // //  *
// // //  * Test your function by passing various string literals to it and
// // //  * console.logging the function's return value
// // //  */
// //
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // // // /**
// // // //  * TODO:
// // // //  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// // // //  * You should see a different message every time you refresh the page
// // // console.log(analyzeColor(randomColor))
// // //
// // //  * TODO:
// // //  * Comment out the code above, and refactor your function to use a switch-case statement
// // //  */
// // function colorIs(color) {
// //     var color;
// //     var colorIs;
// //
// //     switch (color) {
// //         case "green":
// //             colorIs = color + " Like an emerald";
// //             break;
// //         case "blue":
// //             colorIs = color + " Like the sky!";
// //             break;
// //         case "red":
// //             colorIs = color + " Like fast cars!";
// //             break;
// //         default:
// //             colorIs = color + " ...I don't recognize that color";
// //     }
// //     return colorIs
// // }
// // console.log(colorIs(randomColor))
// //
// // //
// // // /**
// // //  * TODO:
// // //  * Prompt the user for a color when the page loads, and pass the input from the
// // //  * user to your `analyzeColor` function. Alert the return value from your
// // //  * function to show it to the user.
// // //  */
// // let color = prompt("Please input a color.")
// //
// // alert("You chose the color " + (colorIs(color)))
//
//
// //
// // /**
// //  * TODO:
// //  * Suppose there's a promotion in Walmart, each customer is given a randomly
// //  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// //  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// //  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// //  * everything for free!.
// //  *
// //  * Write a function named `calculateTotal` which accepts a lucky number and total
// //  * amount, and returns the discounted price.
// //  *
// // function calculateTotal(luckyNumber, totalAmount){
// //     let discountedPrice
// //
// //     switch (luckyNumber) {
// //         case 1:
// //             discountedPrice = (totalAmount - (totalAmount * .10));
// //             break;
// //         case 2:
// //             discountedPrice = (totalAmount - (totalAmount * .25));
// //             break;
// //         case 3:
// //             discountedPrice = (totalAmount - (totalAmount * .35));
// //             break;
// //         case 4:
// //             discountedPrice = (totalAmount - (totalAmount * .50));
// //             break;
// //         case 5:
// //             discountedPrice = (totalAmount - totalAmount);
// //             break;
// //         default:
// //             discountedPrice = totalAmount;
// //     }
// //     return discountedPrice
// // }
// //
// // console.log(calculateTotal(5,100))
// //  * Example:
// //  * calculateTotal(0, 100) // returns 100
// //  * calculateTotal(4, 100) // returns 50
// //  * calculateTotal(5, 100) // returns 0
// //  *
// //  * Test your function by passing it various values and checking for the expected
// //  * return value.
// //  */
// //
// // /**
// //  * TODO:
// //  * Uncomment the line below to generate a random number between 0 and 5.
// //  * (In this line of code, 0 is inclusive, and 6 is exclusive)
// //  * Prompt the user for their total bill, then use your `calculateTotal` function
// //  * and alerts to display to the user what their lucky number was, what their
// //  * price before the discount was, and what their price after the discount is.
// //  */
// // // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
// // let totalAmount = prompt("Please enter your bill total.")
// // alert("Your lucky number was " + luckyNumber + ". Your total bill was " + totalAmount + ". Your total bill after discounts is " + (calculateTotal(luckyNumber, totalAmount)))
//
// // /**
// //  * TODO:
// //  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
// //  * would like to enter a number. If they click 'Ok', prompt the user for a
// //  * number, then use 3 separate alerts to tell the user:
// //  *
// //  * - whether the number is even or odd
// //  * - what the number plus 100 is
// //  * - if the number is negative or positive
// //  *
// //  * Do *NOT* display any of the above information
// //  * if the user enters a value that is not of the number data type.
// //  * Instead, use an alert to inform them of the incorrect input data type.
// //  *
// //  *
// //  * Can you refactor your code to use functions?
// //  * HINT: The way we prompt for a value could be improved
// //  */
// let confirmed = confirm("Would you like to enter a number today?");
// if (confirmed === true) {
//     let putNumber = prompt("Enter a number of your choosing: ");
//     alert("The number you entered is an " + evenOrOdd() + " number.");
//     alert("The number you entered plus 100 is " + addHundred());
//     alert("The number you have entered is a " + positiveOrNegative + " number.");
// } else {
//     alert("You have entered something other than a number!");
// }
// function evenOrOdd(number) {
//     if (number % 2 == 0)
//         return "even";
//     else
//         return "odd";
// }
//
// function addHundred(number) {
//         return number +=100;
//     }
//
// function positiveOrNegative(number) {
//     if (number > 0)
//         return "positive ";
//     else if (number < 0)
//         return "negative ";
//     else
//         return "illogical number";
// }
//
function getPassword(){
    var correct = "codeup";
    var guess = "";
    while (guess != correct){
        guess = prompt("Password?");
    } // end while
    alert("You may proceed");
}