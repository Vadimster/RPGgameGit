

var enemy = {
url: "img/monsters/dragon.png"

};

insufficientFundsMessage = function(item){

			
        	$("#insufficientFundsPage-message").text('Oh you are a real bomzh! You do not have enough money to purchase ' +item.name+ ' for ' +item.buyPrice+ ' coins.'); //calling a function which will generate event title using the argument   


			$('#insufficientFundsPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Okay...' :function(){
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 400,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creat



}


insufficientExperienceMessage = function(item){

			
        	$("#insufficientExperiencePage-message").text('You do not have enough experience to learn the ' +item.name+ ' spell. This spell requires ' +item.price+ ' experience, but you have ' +player.experience+ ' available.'); //calling a function which will generate event title using the argument   


			$('#insufficientExperiencePage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Okay...' :function(){
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 400,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates dialog



}


cityEntranceErrorPage = function(){

			
        	$("#cityEntranceErrorPage-message").text('You need to be on the same tile as the city in order to enter it. You can trade items in a city.'); //calling a function which will generate event title using the argument   


			$('#cityEntranceErrorPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Got it!' :function(){
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 400,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creat



}




getLevelUpMessage = function(){
        	console.log('getLevelUpMessage() launched');

        	$("#dialog-header").text("Welcome to level " + player.level); //calling a function which will generate event title using the argument   
		  	$('#dialog-image').css("background-image", "url('img/statsicons/level.png')");  // update image based on mob generated
  			$("#dialog-event-intro").text("You can now improve your skills in one area. Which one shall it be?");  



    		if (player.attack === player.maxAttack && player.defense < player.maxDefense){

    			$("#dialog-player-options").text("Your attack skill seems to be maxed out at the moment and cannot be improved.");         

				$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
	    		.dialog(
	      			{buttons: 
	         			{
	         			 '+1 Defense' :function(){
	            			$(this).dialog('close');
	            			player.addDefense(1);

	            		 
	               		},
	               		'Nothing' :function(){
	            			$(this).dialog('close');
	 
	               		},
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 620,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates the dialog

	   	} else if (player.defense === player.maxDefense && player.attack < player.maxAttack){

    			$("#dialog-player-options").text("Your defense skill seems to be maxed out at the moment and cannot be improved.");         

				$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
	    		.dialog(
	      			{buttons: 
	         			{
	         			 '+1 Attack' :function(){
	            			$(this).dialog('close');
	            			player.addAttack(1);
	 
	               		},
	               		'Nothing' :function(){
	            			$(this).dialog('close');
	 
	               		},
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 620,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates the dialog

	   	} else if (player.defense === player.maxDefense && player.attack === player.maxAttack){

 			$("#dialog-event-intro").text("Oh, you must be Vadim? How is testing going? Just to let you know you see this message because Attack and Defense skills appear to be at max, there is nothing to improve at the moment");  

			$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Yeah, I know I am cool' :function(){
	            			$(this).dialog('close');
	 
	               		},
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 620,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates the dialog
	   	
	   	} else {

				$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
	    		.dialog(
	      			{buttons: 
	         			{
	         			'+1 Attack' :function(){
	            			$(this).dialog('close');
	            			player.addAttack(1);
	         			},   			 
	         			 '+1 Defense' :function(){
	            			$(this).dialog('close');
	            			player.addDefense(1);	 
	               		},
	               		'Nothing' :function(){
	            			$(this).dialog('close');
	 
	               		},
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 400,
	       		height: 620,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates the dialog



	   	}

			





}



getBonusCollectedMessage = function(bonusType, amount){
        	$("#dialog-header").text("Wonderful discovery!"); //calling a function which will generate event title using the argument   
		  	$('#dialog-image').css("background-image", "url('img/messages/" + bonusType + "bonus.png')");  // update image based on mob generated
  			
		  	if (bonusType === 'gold'){
  				$("#goldBonus").get(0).play();
  				$("#dialog-event-intro").text("You are now " + amount + " gold coins richer. Spend them wisely!");  

		  	} else if (bonusType === 'experience'){
  				$("#addExperience").get(0).play();
  				$("#dialog-event-intro").text("You have found a pile of old books. Truly, knowledge is power - you gain " + amount + " experience!");  
		  	}


        	$('#eventIntro')//making a global div to be created dynamically instead of describing every dialogue in html
    //.attr('title','This is a title')
    //.text('test text') //places text in div
    		.dialog(
      			{buttons: 
         			{'Nice!' : function(){
           				$(this).dialog('close');
           				if (bonusType === 'experience'){
 							experience.increase(amount);
           				} else if (bonusType === 'gold'){
        					gold.increase(amount);
           				}				

               		}
       			},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 400,
       		height: 620,
       		closeOnEscape: false,
       		dialogClass: "no-close"
       		//position: ["right", "center"]
       		}
       	); //creates the dialog
}


eventIntro = function(eventResult, terrainType){ //event alert constructor

	

	var playerExperienceLoss = 40;
	var playerCanRetreat1 = "You can try and avoid the enemy. Your luck matters indeed, but irrespective of the outcome you will lose ";
	var playerCanRetreat2 = " experience.";
	var playerCannotRetreat = "You cannot retreat and have to face your destiny now...";
	var eventDescription= "A large dark shadow is hovering over you. Behold, it is a Great Red Dragon!";



	$("#experience-loss-span").html(playerExperienceLoss);
  	$("#dialog-header").text(createEventIntroHeader(eventResult)); //calling a function which will generate event title using the argument   
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
           				playerFights(terrainType);  // action when OK pressed. Must also delete the div from DOM as it is not needed in the future (to be dynamically generated) possibly via .remove() method
               			},
          			'Retreat...' :function(){
            			$(this).dialog('close'); 
            			playerRetreats();  // action when NOT OK pressed 
               			}
       				},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 400,
       		height: 620,
       		closeOnEscape: false,
       		dialogClass: "no-close"
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
           				playerFights(terrainType);  // action when OK pressed. Must also delete the div from DOM as it is not needed in the future (to be dynamically generated) possibly via .remove() method
               			}
       				},
	   		draggable: false,
       		resizable: false,
       		modal: true,
      		width: 400,
       		height: 620,
       		closeOnEscape: false,
       		dialogClass: "no-close"
       		//position: ["right", "center"]
       		}
       	); //creates the dialog
    } // closes else statement	
} //closes function 



createEventIntroHeader = function(eventResult){ //creates event title
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

createEventDescription = function(eventResult){ //auxilary function - creates event description

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






