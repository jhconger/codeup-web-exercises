// // for(i = 0; i <= 10; i++) {
// // for(i = 0; i <= 10; i++)
//     // prompt("Please enter an odd number between 1 and 50");
//     // alert("You may exit");
//
// var myNumber = 0 ;
//
// do {
//    myNumber = Number(prompt("put in odd number between 1 and 50"))
//     if(myNumber < 1 || myNumber  > 50) {
//         alert("Go Home")
//     } else if (myNumber %2 === 0) {
//         alert("number is even!")
//     } else {
//         alert("all done")
//         break;
//     }
//
// } while(true)
//
// console.log("number to skip is: " + myNumber)
// for (var i = 1; i <= 50; i+=2) {
//     if (i === myNumber) {
//         console.log("yikes, skipping number: " + myNumber)
//         continue;
//     }
//     console.log(i)
// }3


// var theNumber = 2;
//
// while (theNumber <= 65536) {
//     console.log(theNumber)
//     theNumber *= 2
// }

//
// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var conesToPurchase = Math.floor(Math.random() * 5) + 1;
//     if( conesToPurchase <= allCones) {
//     console.log(conesToPurchase + " conses sold...")
//     allCones -= conesToPurchase
//     } else {
//         console.log("Cannot sell you" + conesToPurchase + " cones I only have " + allCones + "...")
//     }
// console.log(allCones)
//
// } while(allCones > 0)
