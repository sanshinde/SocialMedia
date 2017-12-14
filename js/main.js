var count_right=0;
var count_left=0;
var counter=1;
var q_counter=1;
var key=0;
var i=1;
function myFunction(event) {
key = event.which;
if(key==37)
{
slide_left();
}
if(key==39)
{
slide_right();
}
}

$( document ).ready (function() {	
$('#q-'+counter).attr("hidden",false);
document.getElementById("bkbtn").className = "btn btn-info btn-md disabled";
});
function slide_left(){
    $('#q-'+counter).attr("hidden",true);
    counter-=1;
if(counter==1)
{
$('#q-'+counter).attr("hidden",false);
document.getElementById("bkbtn").className = "btn btn-info btn-md disabled";
} 
else
{

$('#q-'+counter).attr("hidden",false);
document.getElementById("nxbtn").className = "btn btn-info btn-md"
}
}
function slide_right(){
    $('#q-'+counter).attr("hidden",true);
counter+=1;
if(counter==9)
{
$('#q-9').attr("hidden",false);
document.getElementById("nxbtn").className = "btn btn-info btn-md disabled"; 
} 
else
{
$('#q-'+counter).attr("hidden",false);
document.getElementById("bkbtn").className = "btn btn-info btn-md";
}
}