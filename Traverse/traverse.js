$(document).ready(function() {
    $('.image-link').magnificPopup({ type: 'image' });
});

$('.test-popup-link').magnificPopup({
    type: 'image'
        // other options
});

function removeBorder() {

    var element = $(".selected");
    element.removeClass('selected');
    element.parent().next().children("img:eq(1)").addClass("selected");

}
// removeBorder();