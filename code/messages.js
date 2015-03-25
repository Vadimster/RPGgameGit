

var enemy = {
url: "img/monsters/dragon.png"

};



eventIntro = function(eventResult){ //event alert constructor

	

	var playerExperienceLoss = 40;
	var playerCanRetreat1 = "You can try and avoid the enemy. Your luck matters indeed, but irrespective of the outcome you will lose ";
	var playerCanRetreat2 = " experience.";
	var playerCannotRetreat = "You cannot retreat and have to face your destiny now...";
	var eventDescription= "A large dark shadow is hovering over you. Behold, it is a Great Red Dragon!";



	$("#experience-loss-span").html(playerExperienceLoss);
  	$("#dialog-header").text(createEventIntroHeader(eventResult)); //calling a function which will generate ebent title using the argument   
  	$('#dialog-image').css("background-image", "url(" + enemy.url + ")");  // update image based on mob generated
  	$("#dialog-event-intro").text(createEventDescription(eventResult));  

	if (player.canRetreat) {
    	$("#dialog-player-options").text(playerCanRetreat1 + playerExperienceLoss + playerCanRetreat2);         
   		$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
    //.attr('title','This is a title')
    //.text('test text') //places text in div
    		.dialog(
      			{buttons: 
         			{'Fight!' : function(){
           				$(this).dialog('close'); 
           				alert("You fight");  // action when OK pressed. Must also delete the div from DOM as it is not needed in the future (to be dynamically generated) possibly via .remove() method
               			},
          			'Retreat...' :function(){
            			$(this).dialog('close'); 
            			alert("You retreat");  // action when NOT OK pressed 
               			}
       				},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 400,
       		height: 620
       		//position: ["right", "center"]
       		}
       	); //creates the dialog
    } else {
    	$("#dialog-player-options").text(playerCannotRetreat);         
   		$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
    //.attr('title','This is a title')
    //.text('test text') //places text in div
    		.dialog(
      			{buttons: 
         			{'Fight!' : function(){
           				$(this).dialog('close'); 
           				alert("You fight");  // action when OK pressed. Must also delete the div from DOM as it is not needed in the future (to be dynamically generated) possibly via .remove() method
               			}
       				},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 400,
       		height: 620
       		//position: ["right", "center"]
       		}
       	); //creates the dialog
    } // closes else statement	
} //closes function 



createEventIntroHeader = function(eventResult){ //creates a title for the encounter introduction pop-up
	var robbersText = ["Attacked by robbers!","Robbers are after you!"];
	var peasantsText = ["Attacked by peasants!", "Hungry peasants!"];
	var animalsText = ["Attacked by animals!", "Wild animals!"];
	var monsterText = ["Terrible encounter!", "No good news..."];
	var chestText = ["A wonderful discovery!", "Old chest found!"];
	var trapText = ["Sudden trap!", "Misfortune!"];
	var wizardText = ["A mysterious stranger..."];
	var merchantText = ["Travelling merchant!"];

	if (eventResult === "robbers"){
		var text = robbersText[Math.floor(Math.random()*robbersText.length)];
		return text;
	} else if (eventResult === "peasants") {
		var text = peasantsText[Math.floor(Math.random()*peasantsText.length)];
		return text;		
	} else if (eventResult === "animals") {
		var text = animalsText[Math.floor(Math.random()*animalsText.length)];
		return text;		
	} else if (eventResult === "monster") {
		var text = monsterText[Math.floor(Math.random()*monsterText.length)];
		return text;
	} else if (eventResult === "chest") {
		var text = chestText[Math.floor(Math.random()*chestText.length)];
		return text;
	} else if (eventResult === "trap") {
		var text = trapText[Math.floor(Math.random()*trapText.length)];
		return text;
	} else if (eventResult === "wizard") {
		var text = wizardText[Math.floor(Math.random()*wizardText.length)];
		return text;
	} else if (eventResult === "merchant") {
		var text = merchantText[Math.floor(Math.random()*merchantText.length)];
		return text;
	}

}

createEventDescription = function(eventResult){ //auxilary function - creates event description for the encounter introduction pop-up

	var robbersText = ["It is not safe to walk around like that these days... Robbers have spotted you and are willing to check what it is that you are carrying in your bag.", "They appear out of nowhere! Dark shadows holding sparkling knives, they are ready to check out your pockets.", "Robbers -- what can be more terrifying to a stranger walking on his own in forests and meadows of Vadimaria! It is now time to show them that your sword is precise and deadly."];
	var peasantsText = ["Hungry and greedy they run towards you waving their spades and pitchforks. Oh you poor kids, run! Run for your lives!", "A bunch of poor clowns, they should be easy to deal with. One  a few fall dead the rest will retreat.", "Albeit their weapons being numerous -- their hands are weak. Teach these worms a good lesson!"];
	var animalsText = ["Attacked by animals!", "Wild animals!"];
	var monsterText = ["Terrible encounter!", "No good news..."];
	var chestText = ["A wonderful discovery!", "Old chest found!"];
	var trapText = ["Sudden trap!", "Misfortune!"];
	var wizardText = ["A mysterious stranger..."];
	var merchantText = ["Travelling merchant!"];


	if (eventResult === "robbers"){
		var text = robbersText[Math.floor(Math.random()*robbersText.length)];
		return text;
	} else if (eventResult === "peasants") {
		var text = peasantsText[Math.floor(Math.random()*peasantsText.length)];
		return text;		
	} else if (eventResult === "animals") { 
		var text = animalsText[Math.floor(Math.random()*animalsText.length)];
		return text;		
	} else if (eventResult === "monster") {
		var text = monsterText[Math.floor(Math.random()*monsterText.length)];
		return text;
	} else if (eventResult === "chest") {
		var text = chestText[Math.floor(Math.random()*chestText.length)];
		return text;
	} else if (eventResult === "trap") {
		var text = trapText[Math.floor(Math.random()*trapText.length)];
		return text;
	} else if (eventResult === "wizard") {
		var text = wizardText[Math.floor(Math.random()*wizardText.length)];
		return text;
	} else if (eventResult === "merchant") {
		var text = merchantText[Math.floor(Math.random()*merchantText.length)];
		return text;
	}
}






