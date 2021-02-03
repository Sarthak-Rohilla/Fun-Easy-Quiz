var var_input = document.querySelectorAll("input")[1];
var_input.style.color = "#e6e8fa";
var_input.style.backgroundColor = "#967bb6";
var_input.style.outline = "none";
var_input.style.cursor = "pointer";

document.querySelector("button").addEventListener("click",function() {
    window.open("https://www.google.com");
    window.close("this");
})