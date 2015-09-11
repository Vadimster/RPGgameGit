var gameConfig = {


	turn: {
		counter: 1,
		day: true,

		nextTurn: function(){		
			if (this.day) {
				this.day = false;
		        $('#statsTurnIcon').css({"background":"url(img/stats/night_icon.png)"});
			
			} else {
				this.day = true;
		        $('#statsTurnIcon').css({"background":"url(img/stats/day_icon.png)"});
			}

			this.counter++;
			$('#statsTurnCounter').html(this.counter);
			console.log('Next turn');
		}
	},



    map: {     
        yHeight: 9,
        hWidth: 20,
        
        terrainTypes: ['grass', 'forest', 'forest', 'swamp', 'hills', 'mountains'], //can adjust terrainType probability by blending the array with same terrainTypes
		bonusArray: [1,1,1,0,0,0,0,0,0,0,0,0,0,0], //to increase chances of bonus being applied to a tile replace 0 with 1 in the array.

        cities: 5,
        cityNames: ['Vadimgrad', 'Noobngrad', 'Dragonmoor', 'Stonehall', 'Zhbongrad', 'Summerston', 'Sageshore', 'Crystalcastle', 'Faymoor', 'Whitehedge']

    },



    save: {
    	checkBalance: function(value){
	        if (player.stats.save.counter >= value) {
	            return true;
	        } else {
	            return false;
	        }
    	},

    	increase: function(value){
    		console.log('gameConfig.save.increase() launched');
    		player.stats.save.counter += value;
			if (player.stats.save.counter > player.stats.health.max) {
				player.stats.health.counter = player.stats.health.max;
			} else {
				//do nothing
			}
    	},

    	decrease: function(value){
    		console.log('decrease saves by ' +value);
			player.stats.save.counter -= value;
		    $('#statsSaveCounter').html(player.stats.save.counter);
		}
		    
    },


    health: {
    	increase: function(target, value){
			console.log('gameConfig.health.increase() launched. Target is: ' +target.class.name+ ' Value is: ' +value);
			console.log('current target health is: ' + target.stats.health.counter);
			target.stats.health.counter += value;
			if (target.stats.health.counter > target.stats.health.max) {
				target.stats.health.counter = target.stats.health.max;

			} else {
				//do nothing
			}
			console.log('Health after adjustment is: ' +target.stats.health.counter);
    	},

    	decrease: function(target, value){
			console.log('gameConfig.health.increase() launched. Target is: ' +target.class.name+ ' Value is: ' +value);
			console.log('current target health is: ' + target.stats.health.counter);
			target.stats.health.counter -= value;
			if (target.stats.health.counter <= target.stats.health.min) {
				target.stats.health.counter = target.stats.health.min;
				console.log('Health is 0, ' +target.class.name+ ' is dead.');
			} else {
				//do nothing
			}
			console.log('Health after adjustment is: ' +target.stats.health.counter);
    	}
    },

    gold: {
	    checkBalance : function(item) {
	        if (player.stas.gold.counter >= item.buyPrice) {
	            return true;
	        } else {
	            return false;
	        }
	    },

	    increase: function(target, value){
	        target.stats.gold.counter = parseFloat(target.stats.gold.counter.toFixed(2));
		 	console.log("player gold before transaction: " + target.stats.gold.counter);
			target.stats.gold.counter += value;
			if (target.stats.gold.counter > target.stats.gold.max) {
				target.stats.gold.counter = target.stats.gold.max;

			} else {
				//do nothing
			}

			if (value > 1) {
				$("#coinsfound").get(0).play();
			
			} else {
				$("#onecoinfound").get(0).play();
			}
			
	        target.stats.gold.counter = parseFloat(target.stats.gold.counter.toFixed(2));
	        console.log("player gold after transaction: " + target.stats.gold.counter);


	    },
	    
	    decrease: function(target, value){
	        target.stats.gold.counter = parseFloat(target.stats.gold.counter.toFixed(2));
		 	console.log("player gold before transaction: " + target.stats.gold.counter);
			target.stats.gold.counter -= value;
			if (target.stats.gold.counter <= target.stats.gold.min) {
				target.stats.gold.counter = target.stats.gold.min;

			} else {
				//do nothing
			}

			if (value > 1) {
				$("#coinsfound").get(0).play();
			
			} else {
				$("#onecoinfound").get(0).play();
			}
			
	        target.stats.gold.counter = parseFloat(target.stats.gold.counter.toFixed(2));
	        console.log("player gold after transaction: " + target.stats.gold.counter);

	    },
    },


    targetTileEvent: function(targetTile){   	
		if(targetTile.terrainType === 'city'){
			console.log('Entered the city: ' +targetTile.cityName);
			player.move(targetTile);
		} else {
	    	if (targetTile.hasBonus) {
	    		console.log('Tile has bonus. Bonus is: ' + targetTile.bonusType + ' Will need to generate enemy');
				player.move(targetTile);
	    	} else {
	    		console.log('tile has no bonus. Need to determine event');
				player.move(targetTile);
	    	}
	    } 
	}
};


function saveGamePage(){

	if (localStorage) {

		if (gameConfig.save.checkBalance(1)) {
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
	$("#savegame").get(0).play();
	gameConfig.save.decrease(1);

	localStorage.removeItem('save');
	var save = {};
		save.player = player;
		save.map = map;
		save.gameConfig = gameConfig;
		save.spellBook = spellBook;
		//save mobs on map (dragon)
		//save player inventory
		//save city market
		//save day & turn

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
		player.stats.save.counter = save.player.stats.save.counter;
		player.stats.health.counter = save.player.stats.health.counter;
		player.stats.gold.counter = save.player.stats.gold.counter;
		player.map.positionX = save.player.map.positionX;
		player.map.positionY = save.player.map.positionY;
		gameConfig.turn.counter = save.gameConfig.turn.counter;
		gameConfig.turn.day = save.gameConfig.turn.day;
		spellBook.equipped = save.spellBook.equipped;

		// prepare map using saved data
        for(var i = 0; i < save.gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j = 0; j < save.gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(1, i, j, save.map.tileBox[i][j].divID, save.map.tileBox[i][j].terrainType, save.map.tileBox[i][j].terrain, save.map.tileBox[i][j].hasBonus, save.map.tileBox[i][j].bonusType, save.map.tileBox[i][j].cityName); //extracting information from save object and adding new tiles to map array.
            }        
        } 
		player.stats.render();	
       	map.render();


	 } else {
	 	alert('No saved game found!');

	 }


}



function test(){
	alert('it works!');

}