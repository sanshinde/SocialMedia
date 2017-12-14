var count_right=0;
var count_left=0;
function myFunction() {
    document.getElementsByClassName("backbtn").disabled;
    document.getElementsByClassName("test").innerHTML = "Paragraph changed!";
}

document.getElementById("backbtn").onload = function() {myFunction()};
function myFunction() {
    document.getElementById("backbtn").innerHTML = "Iframe is loaded.";
}