import { Util } from "./util.js"

let util = new Util();

document.getElementById("show").addEventListener("click", function (e) {
    var box =document.querySelector('.box');
    if(box.style.height == "0px"){
        box.style.height = "160px";
    }
    else{
        box.style.height = "0px";
    }
});
