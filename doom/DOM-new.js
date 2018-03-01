function nav(){
  var text = document.querySelector("ul li").textContent;  

  alert(text);
}
nav();


function nova(text){//
    var list= document.querySelector("ul");
    var last = list.lastElementChild.textContent = text;
}

nova("tica");


