//location

            
            





                /*  function location0 () {
                updateDisplay("You are outside of the Tardis with the 10th Doctor. You are his faithful companion but are surrounded by alien enemies!");
            }
            function location1 () {
                updateDisplay("You are facing a spaceship full of Daleks!!!");
                if (!playerhassonicscrewdriver) {
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
            function location5 () {
                updateDisplay("A spaceShip");
            } 
            function location6 () {
                updateDisplay("Mind controlled by the silence");    
            }  
            function location7 () {
                updateDisplay("River is trapped by a weeping angel");
                if (!playerhasphysicsbox) {
                updateDisplay("There is a physics box here.");
                updateDisplay("You take the physics box.");
                playerhasphysicsbox = true;
            } else {
            updateDisplay("you notice a physics box behind the angel");
               }    
            }
            function location8 () {
                updateDisplay("You're at BAD Wolf bay!!!");
            }
            function location9 () {
                updateDisplay("Rose disappeared into another parellel world!");    
              
            }

        */



var loc=new array();

loc[0]= new location();
loc[0].id= 0;
loc[0].name= location0;
loc[0].description="You are outside of the Tardis with the 10th Doctor. You are his faithful companion but are surrounded by alien enemies!";

loc[1]= new location();
loc[1].id= 1;
loc[1].name= location1;
loc[1].description= "You are facing a spaceship full of Daleks!!!"
loc[1].item= new item();
loc[1].item.id= 1;
loc[1].item.name= "sonic screwdriver";
loc[1].item.description= "Use the sonic screwdriver to zap the daleks back to their isolated planet";


loc[2]= new location();
loc[2].id= 2;
loc[2].name= location2;
loc[2].description="The master has returned";


loc[3]= new location();
loc[3].id= 3;
loc[3].name= location3;
loc[3].description="The Ponds are leaving";
loc[3].item= new item();
loc[3].item.id= 2;
loc[3].item.name= "fez";
loc[3].item.description= "fez is not actually useful but very stylish!";

loc[4]= new location();
loc[4].id= 4;
loc[4].name= location4;
loc[4].description="A time Hole";

loc[5]= new location();
loc[5].id= 5;
loc[5].name= location5;
loc[5].description="A spaceShip";

loc[6]= new location();
loc[6].id= 6;
loc[6].name= location6;
loc[6].description="Mind controlled by the silence";

loc[7]= new location();
loc[7].id= 7;
loc[7].name= location7;
loc[7].description="River is trapped by a weeping angel";
loc[7].item= new item();
loc[7].item.id= 3;
loc[7].item.name= "physics paper";
loc[7].item.description= "Can help you sneak your way into places having people think you're someone you're not!";


loc[8]= new location();
loc[8].id= 8;
loc[8].name= location8;
loc[8].description="You're at BAD Wolf bay!!!";

loc[9]= new location();
loc[9].id= 9;
loc[9].name= location0;
loc[9].description="Rose disappeared into another parellel world!";
loc[9].item= new item();
loc[9].item.id= 4;
loc[9].item.name= "bowtie";
loc[9].item.description= "You found your bowtie! THE UNIVERSE IS SAVED!";

function location() {
   this.name      = "";
   this.id        = 0;
   this.description = 0;
   this.toString  = function();
 }

function item() {
   this.name      = "";
   this.id        = 0;
   this.description = 0;
   this.toString  = function();
 }





















        