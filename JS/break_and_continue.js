// // for(i = 0; i <= 10; i++) {
// // for(i = 0; i <= 10; i++)
//     // prompt("Please enter an odd number between 1 and 50");
//     // alert("You may exit");
//
// var mynumber = 0 ;
//
// do {
//    mynumber = Number(prompt("put in odd number between 1 and 50"))
//     if(mynumber < 1 || mynumber  > 50) {
//         alert("Go Home")
//     } else if (mynumber %2 === 0) {
//         alert("number is even!")
//     } else {
//         alert("all done")
//         break;
//     }
//
// } while(true)
//
// console.log("number to skip is: " + mynumber)
// for (var i = 1; i <= 50; i+=2) {
//     if(i === mynumber) {
//         console.log("yikes, skipping number: " + mynumber)
//
//     }
// }

var theNumber = 2;

while (theNumber <= 65536) {
    console.log(theNumber)
    theNumber *= 2
}