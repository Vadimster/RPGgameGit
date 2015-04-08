
var playerFights = function(terrainType){
	alert("Player fights in " + terrainType + "  Day: " + turnManager.day);
	
  var combatDialogBackgroundURL = "img/combat/background/" + terrainType + ".jpg"; 
  $('#combat-dialog-background').css("background-image", "url(" + combatDialogBackgroundURL + ")");

  $('#combatPage')
  			.dialog(
      			{buttons: 
         			{'Close!' : function(){
           				$(this).dialog('close'); 
           				//playerFights();  // action when OK pressed. Must also delete the div from DOM as it is not needed in the future (to be dynamically generated) possibly via .remove() method
               			}
       				},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 1020,
       		height: 730,
       		closeOnEscape: false,
       		dialogClass: "no-close"
       		//position: ["right", "center"]
       		}
       	); //creates the dialog
}; //initialises variable 

var playerRetreats = function(){
	alert("Retreat!");



};