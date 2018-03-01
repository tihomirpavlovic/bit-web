// (function () {

//     var element = document.getElementById("red");
//     element.className = "second";

// })();

// function liElements() {

//     var liElement = document.getElementsByTagName("li");

//     for (var i = 0; i < liElement.length; i++) {

//         liElement[i].className = "blue";

//     }
// }
// liElements();

// function green() {

//     var lists = document.getElementsByTagName("ul");

//     console.log(lists)

//     var greenElement = lists[lists.length - 1];

//     for (var i = 0; i < greenElement.children.length; i++) {

//         greenElement.children[i].className = "green";

//     }
// }

// green();




//travers


function nova(){
    var element = document.getElementsByClassName("active")[0];
    element.className = "";
    // console.log(element)
    var element1 = element.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.className = "active";
    // console.log(element1)
}
nova();

// function pictures() {
//     var element = document.getElementsByClassName("selected")[0];
//     element.className = "";
//     // console.log(element)
//     var element1 = element.parentNode.nextElementSibling.firstElementChild.nextElementSibling.className = "selected";
//     // console.log(element1)
// }
// pictures();