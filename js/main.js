$(document).ready(function() {
    $('.camp-options img').mouseenter(function() {
    $(this).fadeTo('fast', 1.00);
    })
    $('.camp-options img').mouseleave(function() {
    $(this).fadeTo('fast', 0.75);
    });
});

$(document).ready(function() {
	$('#post1').modal(data-show="false")
});