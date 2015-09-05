var gameConfig = {


	turn: {

		counter: 1,
		day: true,

		nextTurn: function(){
			
			console.log('Next turn');

			/* 

			if(this.day){
				this.day = false;
				$("#dayOrNightIcon").attr("src", "img/statusicons/night.png");
				$("#dayOrNightCounter").html("night");

			} else {
				this.day = true;
				$("#dayOrNightIcon").attr("src", "img/statusicons/day.png");
				$("#dayOrNightCounter").html("day");
			}
			
			this.turn++;
		    $('#turnCounter').html(this.turn);
			*/


		}

	},



    map: {     
            yHeight: 9,
            hWidth: 20,
            
            terrainTypes: ['grass', 'forest', 'forest', 'swamp','hills','mountains'], //can adjust terrainType probability by blending the array with same terrainTypes
			bonusArray: [1,1,1,0,0,0,0,0,0,0,0,0,0,0], //to increase chances of bonus being applied to a tile replace 0 with 1 in the array.

            cities: 5
         },


    createMap: function() {
		map.prepare();
		map.render();   	
    },


    targetTileEvent: function(targetTile){   	
    	if (targetTile.hasBonus) {
    		console.log('Tile has bonus. Will generate mob');

    	} else {
    		console.log('tile has no bonus. Need to determine event');

    	}


    	//determine event
    		//if targetTile has bonus, then it will be ab enemy
    	//handle event


    } 




};


function saveGamePage(){

	if (localStorage) {

		if (player.stats.save.counter > player.stats.save.min) {
			$("#saveGamePage-message").text('Saving the game will consume one ink point and will overwrite your last save. This action cannot be undone.');  

			$('#saveGamePage')//making a global div to be created dynamically instead of describing every dialogue in html
			.dialog(
	  			{buttons: 
	     			{
	     			 'Save' :function(){
	        			$(this).dialog('close');
	        			saveGame();

	        		 
	           		},
	           		'Cancel' :function(){
	        			$(this).dialog('close');

	           		},
	   			},
	   		draggable: false,
	   		resizable: false,
	   		modal: true,
	  		width: 360,
	   		height: 420,
	   		closeOnEscape: true,
	   		dialogClass: "no-close"
	   		}
	   	); //creates the dialog

		} else {

			$("#insufficientSomethingPage-message").empty();
			$("#insufficientSomethingPage-message").text('Looks like you have run out of ink... You need 1 ink point to save, but you currently have ' + player.stats.save.counter + ' to spare. Get more ink by exploring Vadimaria.');  

			$('#insufficientSomethingPage')//making a global div to be created dynamically instead of describing every dialogue in html
			.dialog(
	  			{buttons: 
	     			{
	     			 'Oh...' :function(){
	        			$(this).dialog('close');

	        		 
	           		},
	   			},
	   		draggable: false,
	   		resizable: false,
	   		modal: true,
	  		width: 360,
	   		height: 420,
	   		closeOnEscape: true,
	   		dialogClass: "no-close"
	   		}
	   	); //creates the dialog

		}

	} else {

		alert('Your browser does not support localStorage, please upgrade to latest version.');
	}

}


function startGame() {
	$("#buttonClick").get(0).play();
	$('#page-wrap').empty();
	characters.newCharacterSelectorDialog() //choose character dialog. Choosing character will call 
}



function saveGame() {
	player.stats.save.counter--;
    $('#statsSaveCounter').html(player.stats.save.counter);

	localStorage.removeItem('save');
	var save = {};
	save.player = player;
	save.map = map;
	save.gameConfig = gameConfig;
	//save mobs on map (dragon)
	//save player inventory
	//save city market
	//save day & turn
	//save spellBook equipped and spells

	localStorage.setItem('save', JSON.stringify(save));



	$("#successSomethingPage-message").empty();
	$("#successSomethingPage-message").text('Game saved. You have ' + player.stats.save.counter + ' ink points left.');  

	$('#successSomethingPage')//making a global div to be created dynamically instead of describing every dialogue in html
	.dialog(
			{buttons: 
 			{
 			 'OK' :function(){
    			$(this).dialog('close');

    		 
       		},
			},
		draggable: false,
		resizable: false,
		modal: true,
		width: 360,
		height: 420,
		closeOnEscape: true,
		dialogClass: "no-close"
		}
	); //creates the dialog


	//launch a function to build dialog game saved OK
}


function continueGame() {
     $("#bookClosed").get(0).play();
	 $('#page-wrap').empty();


	 var load = localStorage.getItem('save');
	 if (load !== null) {
		var save = JSON.parse(load);

		//updated player object with saved data
		player.class.name = save.player.class.name;
		player.class.image = save.player.class.image;
		player.stats.save.counter = save.player.stats.save.counter
		player.map.positionX = save.player.map.positionX;
		player.map.positionY = save.player.map.positionY;
		gameConfig.turn.counter = save.gameConfig.turn.counter;
		gameConfig.turn.day = save.gameConfig.turn.day;
		//add spelbook.equipped value
		player.stats.render();	
       
       	// rebuild map using saved data
        for(var i = 0; i < save.gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j = 0; j < save.gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(1, i, j, save.map.tileBox[i][j].divID, save.map.tileBox[i][j].terrainType, save.map.tileBox[i][j].terrain, save.map.tileBox[i][j].hasBonus); //extracting information from save object and adding new tiles to map array.
            }        
        } 
       	map.render();

	 } else {
	 	alert('No saved game found!');

	 }


}



function test(){
	alert('it works!');

}