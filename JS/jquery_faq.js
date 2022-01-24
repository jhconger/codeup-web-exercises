$(document).ready(function() {

    $("dd").addClass('visible');

    $("button").click(function(event) {
        $("dd").toggleClass('invisible')
    })
});

$('dt') .click(function(event) {
    $(this).toggleClass('highlighted');
});

