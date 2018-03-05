$(function(){
    console.log("Hello World!")
});

$("li:eq(0)").addClass("border");

$("li").addClass("uppercase");

$("li:active").addClass("fontcolor");

var middle = ($("li").length + 1)/2

$("li:nth-of-type("+ middle +")").addClass("background");