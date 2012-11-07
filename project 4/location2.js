//
//location2.js
//
            
            function location0 () {
                updateDisplay("You are outside of the Tardis with the 10th Doctor. You are his faithful companion but are surrounded by alien enemies!");
            }
            function location1 () {
                updateDisplay("You are facing a spaceship full of Daleks!!!")
                updateDisplay("There is an sonic screwdriver here.");
                updateDisplay("You take the sonic screwdriver.");
                playerhassonicscrewdriver = true;
            } else {
            updateDisplay("There is nothing on the floor.");
               }
            }
                
            
            function location2 () {
                updateDisplay("The master has returned");    
            }
            function location3 () {
                updateDisplay("The Ponds are leaving");
            }  
            function location4 () {
                updateDisplay("A time Hole");
            }  
            Function location5 () {
                updateDisplay("A spaceShip");
            } 
            Function location6 () {
                updateDisplay("Mind controlled by the silence);    
            }  
            function location7 () {
                updateDisplay("River is trapped by a weeping angel");
                updateDisplay("There is a physics box here.");
                updateDisplay("You take the physics box.");
                playerhasphysicsbox = true;
            } else {
            updateDisplay("you notice a physics box behind the angel");
               }    
            }
            function location8 () {
                updateDisplay("YOu're at BAD Wolf bay!!!");
            }
            function location9 () {
                updateDisplay("Rose disappeared into another parellel world!");    
              
            } 
        }