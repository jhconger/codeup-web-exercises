
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */


var names = ["john", "george", "beth", "sarah"];


//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */


// var len = names.length
//  console.log(len)

//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index


// console.log(names [0])
// console.log(names [1])
// console.log(names [2])
// console.log(names [3])


//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.


// for(i = 0; i < 5; i++) {
//
//     console.log(names[i])
// }


//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */


names.forEach(function(names) {

    console.log("Students name is " + names);
})


//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
var isFirst = [1, 2, 3, 4, 5]
var isSecond = [1, 2, 3, 4, 5]
var isLast = [1, 2, 3, 4, 5]

function returnFirst(isFirst) {
    console.log(isFirst[0])
    return isFirst[isFirst[0]];
}
returnFirst(isFirst);

function returnSecond(isSecond) {
    console.log(isSecond[1])
    return isSecond[1];


}
returnSecond(isSecond)

function returnLast(isLast) {
    console.log(isLast[isLast.length - 1])
        return isLast.length - 1
}
returnLast(isLast)
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
// })();
