// function drop(arr, node) {
//     var newDrop = document.createElement("select");

//     for (var i = 0; i < arr.length; i++) {
//         var option = document.createElement("option");
//         var newText = document.createTextNode(arr[i]);
//         option.appendChild(newText);
//         newDrop.appendChild(option);
//     }

//     node.appendChild(newDrop);
// }

// var firstDiv = document.querySelector('div');
// drop(["milos", "goran", "djuro"], firstDiv);

function drop2(arr, node) {
    var newDrop = "<select>";

    for (var i = 0; i < arr.length; i++) {
        newDrop += "<option>" + arr[i] + "</option>"; 
    }
    

    newDrop += "</select>";
    node.innerHTML = newDrop;
}

var firstDiv = document.querySelector('div');
drop2(["milos", "goran", "djuro"], firstDiv);

