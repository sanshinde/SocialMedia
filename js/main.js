var count_right = 0;
var count_left = 0;
var counter = 1;
var q_counter = 1;
var key = 0;
var i = 1;
var twitter = 0;
var facebook = 0;
var instagram = 0;
var pintrest = 0;
var youtube = 0;
var snapchat = 0;
var tumblr = 0;
var flagq1=0;
var flagq2=0;
var flagq3=0;
var flagq4=0;
var flagq5=0;
var flagq6=0;
var flagq7=0;
var flagq8=0;
var flagq9=0;


function myFunction(event) {
 key = event.which;
 if (key == 37) {
  slide_left();
 }
 if (key == 39) {
  slide_right();
 }
}

$(document).ready(function() {
 $('#q-' + counter).attr("hidden", false);
 document.getElementById("bkbtn").className = "btn btn-info btn-md disabled";
});

function slide_left() {
 $('#q-' + counter).attr("hidden", true);
 counter -= 1;
 if (counter == 1) {
  $('#q-' + counter).attr("hidden", false);
  document.getElementById("bkbtn").className = "btn btn-info btn-md disabled";
 } else {
  $('#q-' + counter).attr("hidden", false);
  document.getElementById("nxbtn").className = "btn btn-info btn-md"
 }
}

function slide_right() {
 $('#q-' + counter).attr("hidden", true);
 counter += 1;
 if (counter >= 9) {
  $('#q-9').attr("hidden", false);
  document.getElementById("nxbtn").className = "btn btn-info btn-md disabled";
     document.getElementById("submit").style.visibility="visible";
 } else {
  $('#q-' + counter).attr("hidden", false);
  document.getElementById("bkbtn").className = "btn btn-info btn-md";
 }
}

//if(document.getElementsByName('optradio-q-'+counter)[0].value=="Yes")
      //cal(counter);

//function calculate()
//{ 
function calno() {
    
    switch(counter){
            
        case 1:
            if(flagq1==1)
                {
                   twitter--;
                    instagram--; 
                }
            break;
        case 2:
            if(flagq2==1)
                {
            instagram--;
            facebook--;
            snapchat--;
                }
            break;
        case 3:
            if(flagq3==1)
                {
            twitter--;
            instagram--;
            facebook--;
            snapchat--;
                }
            break;
        case 4:
            if(flagq4==1)
                {
             youtube--;
            pintrest--;
                    }
            break;
        case 5:
            if(flagq5==1)
                {
                    facebook--;
                }
            break;
        case 6:
            if(flagq6==1)
                {
                  instagram--;
            facebook--;
            tumblr--;
            snapchat--;  
                }
            break;
        case 7:
            if(flagq7==1)
                {
            instagram--;
            snapchat--;
                    }
            break;
        case 8:
            if(flagq8==1)
                {
            facebook--;
            snapchat--;
                    }
            break;
        case 9:
            if(flagq9==1)
                {
            instagram--;
            tumblr--;
            youtube--;
            
                }
            break;
            
    }
  document.getElementById("txt").innerHTML ="Twitter "+twitter+" Instagram "+instagram+" Snapchat "+snapchat+" Facebook "+facebook+" Tumblr "+tumblr+" Youtube "+youtube+"Pintrest "+pintrest;
     
} 
              
function calyes() {
       switch(counter){
        case 1:
            twitter++;
            instagram++;
            flagq1 = 1;
            break;
        
        case 2:
            instagram++;
            facebook++;
            snapchat++;
            flagq2 = 1;
            break;
            
        case 3:
            
            twitter++;
            instagram++;
            facebook++;
            snapchat++; 
            flagq3 = 1;
            break;
            
        case 4:
            
            youtube++;
            pintrest++;
            flagq4 = 1;
            break;

        case 5:
            
            facebook++;
            flagq5 = 1;
            break;

        case 6:
           
            instagram++;
            facebook++;
            tumblr++;
            snapchat++; 
            flagq6 = 1;
            break;

        case 7:
            
            instagram++;
            snapchat++;
            flagq7 = 1;
            break;
            
        case 8:
            facebook++;
            snapchat++;
            flagq8 = 1;
            break;

        case 9:
            instagram++;
            tumblr++;
            youtube++;
            flagq9 =1; 
            break;        
            
    }
    document.getElementById("txt").innerHTML ="Twitter "+twitter+" Instagram "+instagram+" Snapchat "+snapchat+" Facebook "+facebook+" Tumblr "+tumblr+" Youtube "+youtube+"Pintrest "+pintrest;
}
