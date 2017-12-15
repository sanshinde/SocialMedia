var count_right=0;
var count_left=0;
var counter=1;
var q_counter=1;
var key=0;
var i=1;
var twitter=0;
var facebook=0;
var instagram=0;
var pintrest=0;
var youtube=0;
var snapchat=0;
var tumblr=0;


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