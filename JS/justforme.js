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
//
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//
// console.log(reverseString("hello"));
//
// let weather = "sunny";
// if (weather === "sunny") {
//     console.log("wear a shirt");
// } else if (weather === "rainy"){
//     console.log("bring umbrella");
// } else if (weather === "snowy"){
//     console.log("grab a jacket");
// } else {
//     console.log("Better get some help!")
// }
// var color = "red"
// var colorIs;
// switch (color) {
//     case "green":
//        colorIs = "Like an emerald";
//         break;
//     case "blue":
//         colorIs = "Like the sky!";
//         break;
//     case "red":
//         colorIs = "Like fast cars!";
//         break;
//     default:
//         colorIs = "I don't recognize that color";
// }
// console.log(colorIs)
//
//      function letterGrade(score) {
//          var score;
//          var letter;
//
//          switch (true) {
//              case (score <= 100 && score >= 90):
//                  letter = 'A';
//                  break;
//              case (score <= 89 && score >= 80):
//                  letter = 'B';
//                  break;
//              case (score <= 79 && score >= 70):
//                  letter = 'C';
//                  break;
//              case (score <= 69 && score >= 60):
//                  letter = 'D';
//                  break;
//              case (score <= 59 && score >= 0):
//                  letter = 'F';
//                  break;
//
//              case (score > 100 && score < 0):
//                  letter = 'INVALID SCORE';
//                  break;
//              default:
//                  return 'INVALID SCORE';
//          }
//          return letter
//      }
// console.log(letterGrade(84))

 function letterGrade(score){
     var score;
     var letter;
     if (score <= 100 && score >= 90) {
         return "A";
     } else if (score <= 89 && score >= 80){
         return "B";
     } else if (score <= 79 && score >= 70){
         return "C";
     } else if (score <= 69 && score >= 60){
         return "D";
     } else if (score <= 59 && score >= 0){
         return "F";
     } else {
         return "Go back a to Kindergarten!"
     }
}

console.log(letterGrade(82))
console.log(letterGrade(74))
console.log(letterGrade(68))
console.log(letterGrade(100))
console.log(letterGrade("butter"))
// let numGrade = 80
// let student = "Steve"
// numGrade !== 80 || student = "Bob"
//     ? console.log("you got a B")
//     : console.log("not a grade");

function whatToWear(weather) {
var weather;
var bring;
switch (weather) {
    case "sunny":
        bring = "sunglasses";
        break;
    case "rainy":
        bring = "umbrella";
    case "snowy":
        bring = "jacket";
        break;
    default:
        return "No clue buddy!";
    }
    return bring
}
console.log(whatToWear("snowy"))