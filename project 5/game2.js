//
// game2.js
//

var playerhassonicscrewdriver = false;
var playerHasphysicsbox = false;

var movecount = 0


function init(){
//call the starting location
  location0();
}

function displayInventory() {
/* var msg = "Inventory: ";
 if (playerHasphysicsbox) {
  msg = msg + "Physics Box";
 }
 if (playerHassonicscrewdriver) {
 msg = msg + "Sonic Screwdriver";
*/
var index;
for(index in inventory)
{
	msg += inventory[index].name;
}
}
updateDisplay(msg);
}


var inventory= new array();
var itemCount = 0;
 







