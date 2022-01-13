// todolist change color of hello world to coral when we click on the button
// 1. define element to change
// 2. define the button listening for click
// 3. add the event listener to the button
// 4. define what event is being listened for
// 5. change the color
//




var el = document.getElementById( "orange");
el.addEventListener("click", function (){
    console.log('TABLE OF CONTENTS WAS CLICKED ON');
    el.style.color = "orange";
})

var helloWorldEl= document.getElementsByTagName("h1")[0];
console.log(helloWorldEl[0]);

var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",function (){
    console.log('btn was clicked on');
    helloWorldEl.style.color = "coral"
})
document.getElementById('dark-mode').addEventListener("click", function (){

    el.style.color = "orange"; helloWorldEl.style.color = "coral"
})
