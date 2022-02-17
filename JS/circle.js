(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * (this.radius ** 2))
        },


    logInfo: function (doRounding) {
        if ( doRounding === true) {
            console.log("Area of a circle with radius: " + this.radius + ", is: ", Math.round(this.getArea()));
        } else {
            console.log("Area of a circle with radius: " + this.radius + ", is: ", this.getArea());
        }
    }
    };
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    //     circle = {
    //     radius: 5,
    //
    //     getArea: function () {
    //         // TODO: complete this method
    //         // hint: area = pi * radius^2
    //         return (Math.PI * (this.radius ** 2))
    //     },
    //
    //
    //     logInfo: function (doRounding) {
    //         if ( doRounding === true) {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: ", Math.round(this.getArea()));
    //         } else {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: ", this.getArea());
    //         }
    //     }
    // };
    // log info about the circle
    circle.radius = 5
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are “a”, “e”, “i”, “o”, “u”.
input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter
function vowel_count(str1)
{
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("helicopter"));