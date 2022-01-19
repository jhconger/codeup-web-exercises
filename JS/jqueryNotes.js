// https://api.jquery.com/
"use strict";

document.getElementById("heading");

let myEl = $("#p-one");
console.log(myEl);

let heading = $("#heading").text();
console.log(heading);

let user1 = {
    name: "justin",
    isLoggedIn: false,
    age: 37
}

let loginStatus = user1.isLoggedIn;

if(loginStatus === true){
    $("#heading").addClass("border")
}