/* Mouse follwing effect */ 

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){ /* Added eventhandler in order to sense mouse moving */
/* The code dynamically sets the position of the "cursor" and "cursor2" elements based on the current mouse position.
This creates an effect where the elements follow the mouse cursor. */
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});