document.addEventListener("DOMContentLoaded", function () {
    
 var exercise = document.querySelector(".side-exercise");
 var tital = document.querySelector(".ex-name");
var m = document.querySelector(".main-mid");
var secound = document.querySelector(".main-mid2");
 exercise.addEventListener("click", function (event) {
    m.style.display = "none";
    secound.style.display = "block";
 });
});