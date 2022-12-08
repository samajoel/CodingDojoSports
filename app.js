
/* contadores */
var clicks = 314;
var clicks2 = 159;
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};


var clicks2 = 159;

function onClick2() {
  clicks2 += 1;
  document.getElementById("clicks2").innerHTML = clicks2;
};

/* contadores */


/* Hacer desaparecer el box */

var container = getElementById("box1c")

var btn = getElementById("btn3")

function reset() {
    document.getElementById("box1c").remove();
  }
  
/* Hacer desaparecer el box */
setTimeout(() => { alert('Time Out') }, 1000)