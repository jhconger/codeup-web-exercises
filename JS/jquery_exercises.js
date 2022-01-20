"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

//
// $('.important').css('background-color', 'chartreuse');
//
// $('p').css('font-size', '24px');
//
// var contents = $('#div').html();
// alert("Here is your requested content: " + contents);

 // $('.codeup').css('border', '1px solid red');

//     $('li').css('font-size', '20px');
//
//     $('h1, p, li').css({"background-color":"chartreuse", "color":"blue"});
//
//     var contents = $('#heading').html();
//     alert("Here is your requested content: " + contents);
//
//
//
// });
    var ele = document.getElementById('heading');
    ele.addEventListener('click', function(e) {
        alert('My element was clicked!');
        $('h1, p, li').css({"background-color":"chartreuse", "color":"blue"});
    });
    $('#p-two').dblclick(function(e) {
        alert('Paragraph was double clicked!');
        $('p').css('font-size', '18px');
    });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

























});