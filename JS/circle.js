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
