let cities = [
    {city: "San Antonio", people: 30, isGreat: true, team:"spurs"},
    {city: "Dallas", people: 40, isGreat: true, team:"mavericks"},
    {city: "Houston", people: 50, isGreat: false, team:"rockets"},
    {city: "Austin", people: 30, isGreat: true, team:"keepItWeird"},
]
cities.forEach(function(city){
    console.log("is " + city.city + " great?: " + city.isGreat); //concatenation
    console.log('is ${city.city} great?: ${city.isGreat}');
})
//
// let sports = ["spurs", "mavericks", "rockets", "bucks"];
// console.log(sports.length -1);
//
// for(let i = 0; i <= sports.length -1; i++){
//     console.log("current team: " + sports[i]);
// }
// || or
//  && and
// == checks value
// === checks value and type


// let USA = {
//     // printStates
//     Texas: {
//         size: "big",
//         flower: "bluebonnet",
//         bird: "mockingbird",
//         people: 30,
//         //method
//         addPeople: function() {
//             let nowPeople = this.people
//             console.log(this.people) //30
//         }
//     }
// }
// let sirius = {
// //    properties
//     numStudents: 29,
//     city: ["Dallas", "Fort Worth", ["downtown", "rim" , "north central", "museum district"],  "Houston",
//         {city: "Austin1", numPeople: 40, lake: true, weird: true}],
//     inPerson: false,
//     theBest: true,
//     Austin: {
//         city: "Austin2", numPeople: 40, lake: true, weird: true
//     },
//
//
//
// //    methods - storage that stores functions
//     returnCity: function () {
//         console.log(8 + 8)
//         console.log("hello world")
//         return this.city;
//     }
// }
// console.log(sirius.city[4].weird)
// console.log(sirius.city[2][2])
// console.log(sirius.city)

// console.log(sirius.city[sirius.city.length -1]);

// console.log(sirius.inPerson);  // dot notation
// // console.log (sirius.returnCity); //value of returnCity: function
// //
// //


let sports = ["spurs", "mavericks", "rockets", "bucks"];
sports.forEach(function(team){
    let firstLetter = team.charAt(0);
    console.log(firstLetter);
    if(firstLetter === "r"){
        console.log("true");
    } else {
        console.log("false")
    }
})


// // 1. Write a JavaScript program that accept two integers and display the larger.Go to the editor
// // Click me to see the solution
// //

// var num1, num2;
// num1 = window.prompt("please enter an integer","0")
// num2 = window.prompt("please enter another integer", "0")
//
// if(parseInt(num1, 10) > parseInt(num2,10))
// {
//     console.log("The larger of "+ num1+ " and " + num2+ " is "+ num1+ ".");
//     alert("The larger of "+ num1+ " and " + num2+ " is "+ num1+ ".");
// }
// else if(parseInt(num2,10) > parseInt(num1,10))
// {
//     console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//     alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
// }
// else
// {
//     console.log("The values "+ num1+ " and "+num2+ " are equal.");
//     alert("The values "+ num1+ " and "+num2+ " are equal.");
// }

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