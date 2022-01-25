$(document).ready(function() {

    $("dd").addClass('visible');

    $("#disappear").click(function(event) {
        $("dd").toggleClass('invisible')
    });


$('dt') .click(function(event) {
    $(this).toggleClass('highlighted');
});
// $('li').addClass('bold')
$('h3').click(function(event) {
    $(this).next().children().toggleClass('bold');
});
    $("#change").click(function(event) {
        $("li:last-child") .toggleClass('highlighted')
    });
    $("li").click(function(event) {
        $(this).siblings().first().toggleClass('blue')
    });
});