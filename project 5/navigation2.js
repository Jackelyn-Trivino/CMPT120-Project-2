//      
// navigation2.js
//




       var score= 0;
       var currentLocation=0;
       //var north= false;
       //var south= false;
       //var east= false;
       //var west= false;
       var locationArray = new Array();
       locationArray[0] = 0;
       
       var blocked="You can't go this way!";
        
        function btn_go_click()
        {
            
            var input = document.getElementById("input").value;
            input = input.toLowerCase();
            if(input=="north" || input=="south" || input=="east" || input=="west" || input=="n" || input=="s" || input=="e" || input=="w")  
            {
                //alert(input);
                processLocation(input);
            }
        }
        
        function processLocation(direction)
        {
            if (direction=="take")
		{
			inventory[itemCount] = loc[currentLocation].item;
			itemCount++;
		}
		//alert(direction)
            else if (direction=="north" || direction=="n")
            {
                switch(currentLocation){
		case 0:
                    enable_buttons();
                    currentLocation=1;
                    updateText(loc[1].description);
                    var northButton=document.getElementById("north_button");
                    northButton.disabled="disabled";
                    var eastButton=document.getElementById("east_button");
                    eastButton.disabled="disabled";
                    var westButton=document.getElementById("west_button");
                    westButton.disabled="disabled";
                break;    
                                
                case 4:
                    enable_buttons();
                    currentLocation=0;
                    //location0();
                    updateText(loc[0].description);
		break;
                                
		case 3:
                    enable_buttons();
                    currentLocation=6;
                    //location6 ();
                    updateText(loc[6].description);
                    var northButton=document.getElementByID("north_button");
                    northButton.disabled="diabled";
                    var eastButton=document.getElementById("east_button");
                    eastButton.disabled="disabled";
                    var westButton=document.getElementById("west_button");
                    westButton.disabled="disabled";
		break;
                               
		case 7:
                    enable_buttons();
                    currentLocation=5;
                    updateText(loc[5].description);
                    //location5 ();
                    var northButton=document.getElementByID("north_button");
                    northButton.disabled="diabled";
                    var westButton=document.getElementById("west_button");
                    westButton.disabled="disabled";
		 break;
 
                 case 8:
                     enable_buttons();
                     currentLocation=9;
                     updateText(loc[9].description);
                     //location9 ();
                     var westButton=document.getElementByID("west_button");
                     west.button.disabled="disabled";
                     var eastButton=document.getElementByID("east_button");
                     eastButton.disabled="disabled";
                  break;
 
                 case 9:
                     enable_buttons();
                     currentLocation=2;
                     updateText(loc[2].description);
                     //location2 ();
                     var northButton=document.getElementByID("north_button");
                     north.button.disabled="disabled";
                  break;
                     
                default:    updateDisplay(blocked);        
                }    

            }
            else if(direction=="south" || direction=="s")
            {
                 switch(currentLocation){
                 case 0:
                     enable_buttons();
                     currentLocation=4;
                     updateText(loc[4].description);
                     location4 ();
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;
                
                
                case 1:
                    enable_buttons();
                    currentLocation=0;
                    updateText(loc[0].description); 
                    //location0 ();
                break;

                case 6:
                     enable_buttons();
                     currentLocation=3;
                     updateText(loc[3].description);
                     //location3 ();
                     var westButton=document.getElementById("west_button");
                     westButton.disabled="disabled";
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                break;
                    
                case 5:
                     enable_buttons();
                     currentLocation=7;
                     updateText(loc[7].description);
                     //location7 ();
                     var westButton=document.getElementById("west_button");
                     westButton.disabled="disabled";
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;

                case 2:
                     enable_buttons();
                     currentLocation=9;
                     updateText(loc[9].description);
                     //location9 ();
                     var westButton=document.getElementById("west_button");
                     westButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;

                case 9:
                     enable_buttons();
                     currentLocation=8;
                     updateText(loc[8].description);
                     //location8 ();
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;
                default:    updateDisplay(blocked);
		}
            }
            
            else if(direction=="east" || direction=="e")
            {
                switch(currentLocation){
                case 0:
                     enable_buttons();
                     currentLocation=2;
                     updateText(loc[2].description);
                     //location2 ();
                     var northButton=document.getElementById("north_button");
                     northButton.disabled="disabled";
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;
                    
                
                case 5:
                
                     enable_buttons();
                     currentLocation=4;
                     updateText(loc[4].description);
                     //location4 ();
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                 break;

                 case 4:
                     enable_buttons();
                     currentLocation=8;
                     updateText(loc[8].description);
                     //location8 ();
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     var eastButton=document.getElementById("east_button");
                     eastButton.disabled="disabled";
                break;
                     
                
                case 3:  
                     enable_buttons();
                     currentLocation=0;
                     updateText(loc[0].description);
                     //location0 ();
                break;     
                      
               default:    updateDisplay(blocked);
          	  }
            }
            else if(direction=="west" || direction=="w")
            {
                   switch(currentLocation){
                   case 0:
                     alert(direction);
                     enable_buttons();
                     currentLocation=3;
                     updateText(loc[3].description);
                     //location3 ();
                     var westButton=document.getElementById("west_button");
                     westButton.disabled="disabled";
                     var northButton=document.getElementById("north_button");
                     northButton.disabled="disabled";
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled";
                     break; 
                    
                    
                    case 4:
                
                     enable_buttons();
                     currentLocation=5
                     updateText(loc[5].description);
                     //location5 ();
                     var westButton=document.getElementById("west_button");
                     westButton.disabled="disabled";
                     var northButton=document.getElementById("north_button");
                     northButton.disabled="disabled";
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled"; 
                     break;
                     
                   
                   case 2:
                
                     enable_buttons();
                     currentLocation=0
                     updateText(loc[0].description);
                     //location0 ();
                 break;   

                   case 8:
                
                     enable_buttons();
                     currentLocation=4
                     updateText(loc[4].description);
                     //location4 ();
                     var southButton=document.getElementById("south_button");
                     southButton.disabled="disabled"; 
                     break;                  
                     
                default:    updateDisplay(blocked);
           }
            
            //locationMessages();
            checkScore(); 
        }
        }
        function enable_buttons()
        {
            var westButton=document.getElementById("west_button");
            westButton.disabled="";
            var eastButton=document.getElementById("east_button");
            eastButton.disabled="";
            var northButton=document.getElementById("north_button");
            northButton.disabled="";
            var southButton=document.getElementById("south_button");
            southButton.disabled="";
            //copy
        }
        
              
       function btn_north_click () {      
          //var msg="You are facing a spaceship full of Daleks!!!";
          //updateText(msg);
          processLocation("north");
          //if (north===false){		
            // score = score + 5;              
            // north = true;
          //alert(msg);
       //}
       }
            
           
       function btn_south_click () {
           //var msg="You are facing the Tardis door!";
           //updateText(msg);
           processLocation("south");
           //if (south===false){		
            // score = score + 5;              
            // south = true;
          //}
          //alert=(msg);
       } 

       
       function btn_east_click () {
          //var msg="There is a blackhole!";
          //updateText(msg);
          processLocation("east");
          //if (east===false){		
            // score = score + 5;              
            // east = true;
          //}
          //alert=(msg);
       } 
       
       function btn_west_click() {
          //var msg="You are facing a troop of cyberman! ";
          //updateText(msg);
          processLocation("west");
          //if (west===false){
            // score = score + 5;
            // west = true;
          //}
          //alert=(msg);
       } 

       

        function btn_score_click() {
             var msg= score;
             alert(msg);     
       }  

       
       function updateText(msg){
           var ta = document.getElementById("taGame");
           ta.value = msg + "\n" + ta.value;
       }

       function updateDisplay(msg){
           var ta = document.getElementById("taGame");
           ta.value = msg + "\n" + ta.value;
        }
        
       function checkScore()
       {
          var beenThere = false;
          for(var i=0; i<locationArray.length; i++)
          {
            if(locationArray[i]==currentLocation)
            {
                beenThere = true;
                i += 100;
            }
          }
          if(beenThere == false)
          {
              score += 5;
              locationArray.push(currentLocation);
          }
       }