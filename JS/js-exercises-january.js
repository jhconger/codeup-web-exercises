// 1. Write a JavaScript program that accept two integers and display the larger.Go to the editor
// Click me to see the solution
//

var num1, num2;
num1 = window.prompt("please enter an integer","0")
num2 = window.prompt("please enter another integer", "0")

if(parseInt(num1, 10) > parseInt(num2,10))
{
    console.log("The larger of "+ num1+ " and " + num2+ " is "+ num1+ ".");
    alert("The larger of "+ num1+ " and " + num2+ " is "+ num1+ ".");
}
else if(parseInt(num2,10) > parseInt(num1,10))
{
    console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
    alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}
else
{
    console.log("The values "+ num1+ " and "+num2+ " are equal.");
    alert("The values "+ num1+ " and "+num2+ " are equal.");
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -
// Click me to see the solution
//
// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
// Click me to see the solution
//
// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// Click me to see the solution
//
// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
//     "0 is even"
// "1 is odd"
// "2 is even"
// ----------
//     ----------
//         Click me to see the solution