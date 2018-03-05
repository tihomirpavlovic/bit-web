var links = ["https://i.pinimg.com/736x/da/8e/fc/da8efc68a9eb13b228eee3609962a1a5--cute-dog-costumes-puppy-costume.jpg", "https://www.what-dog.net/Images/faces2/scroll0015.jpg", "https://www.petmd.com/sites/default/files/legg-calve-perthes-disease-dogs%20.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRO06aRgpx_cMscbjMIB1xhtYZOQ1x2lr4JL1zyw1V9dtVQlfzA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4YGZKmxi8phm9q2yNBPXczEMouUsdQVapuevpuK_PWbeiw05"]

//create gallery of img
for (var i = 0; i < links.length; i++) {
    var img = $("<img>");
    img.attr("src", links[i]);
    $("body").prepend(img);
}

$("img").css("float", "left");

//add headline above images
var headline = $("<h1>Amazing Gallery</h1>").css("text-align", "center");

$("body").before(headline);

//make img random size
$("img").each(function (index, element) {
    var size = Math.floor(Math.random() * 500);
    $(element).width(size);
});

//create border for every img bigger then 200px
$("img").each(function (index, element) {
    if ($(this).width() > 200) {
        $(element).css("border", "1px solid red");
    }

});