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
	        if (player.stats.gold.counter >= item.buyPrice) {
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
		    player.stats.render();


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
		    player.stats.render();

	    },
    },


    level: { // increase -> check if may qualify for magic bonus -> start magic Bonus at LVlUp Dialog ->

    	increase: function(value){
	    		console.log('gameConfig.level.increase() launched');
    		
    		if (player.stats.level.counter < player.stats.level.max){
	    		player.stats.level.counter += value;
	    		$('#statsLevelCounter').html(player.stats.level.counter);
	    		$('#experienceNextLevel').html(gameConfig.experience.getNextLevelThreshold());

	    		if (player.stats.level.counter === player.character.getsBonusBookOnLevel) {
	    			spellBook.getAsBonus();

	    		} else if (player.stats.level.counter % player.character.getFreeRndSpellEveryNLevel === 0){
	    			console.log('start dialog - player gets a random unknown spell for free'); 
					spellBook.getBonusSpell();

	    		} else if (player.stats.level.counter % player.character.getFreeSpellEveryNLevel === 0) {
	    			console.log('start dialog - player gets to choose a free spell'); //launch purchase spel page with attribute 0 (fee). Modify existing function!. launch gameConfig.startLevelSkillDialog(); when dialog closed
					spellBook.chooseBonusSpell();

	    		} else {
	    			console.log('player does not qualify for any magic bonuses just yet');
	    			gameConfig.level.startLevelSkillDialog();
	    		}		

    		} else {
    			//do nothing - max player level reached.
    		}
    	},


    	startLevelSkillDialog: function(){
    		$("#levelup").get(0).play();

    		this.getBonusArchery  = function(){			    
			    if(player.skills.archery.counter < player.skills.archery.max){
			    	player.skills.archery.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('archery');
			    }
    		}

    		this.getBonusMelee  = function(){
			    if(player.skills.melee.counter < player.skills.melee.max){
			    	player.skills.melee.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('melee');
			    }
    		}
    		
    		this.getBonusMagic  = function(){
			    if(player.skills.magic.counter < player.skills.magic.max){
			    	player.skills.magic.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('magic');
			    }
    		}

    		this.getBonusDefence  = function(){
			    if(player.skills.defence.counter < player.skills.defence.max){
			    	player.skills.defence.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('defence');
			    }
    		}

    		this.getBonusStealth  = function(){
			    if(player.skills.stealth.counter < player.skills.stealth.max){
			    	player.skills.stealth.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('stealth');
			    } 
    		}

        	console.log('startLevelUpDialog() launched');
        	
        	$("#levelUpDialog-header").text('Welcome to level ' + player.stats.level.counter); 
        	$("#levelUpDialog-intro").text('You can now improve one of your skills. Which one shall it be?'); 
        	$('#levelUpDialog-bonusoptions').empty();

      	
        	var archeryWrapper = $('<div id="levelUpDialog-archeryWrapper"></div>');
            	archeryWrapper.appendTo('#levelUpDialog-bonusoptions');
	        	var archeryBonus = $('<div id="levelUpDialog-archeryBonus"></div>');
				    archeryBonus.attr("title","Improve your handling of range weapons: qualify for better weapons, hit more precisely and at longer distances as well as inflict more critical hits!");
	            	archeryBonus.appendTo('#levelUpDialog-archeryWrapper');
					document.getElementById("levelUpDialog-archeryBonus").addEventListener("click", this.getBonusArchery, false);
						var archerySkill = $('<div id="levelUpDialog-archerySkill"></div>');
							archerySkill.appendTo('#levelUpDialog-archeryWrapper');
        					$("#levelUpDialog-archerySkill").text(player.skills.archery.counter+ ' / ' + player.skills.archery.max); 

        	var meleeWrapper = $('<div id="levelUpDialog-meleeWrapper"></div>');
            	meleeWrapper.appendTo('#levelUpDialog-bonusoptions');
	        	var meleeBonus = $('<div id="levelUpDialog-meleeBonus"></div>');
				    meleeBonus.attr("title","Improve your handling of melee weapons: qualify for better weapons, hit more often and inflict more critical hits!");
	            	meleeBonus.appendTo('#levelUpDialog-meleeWrapper');
					document.getElementById("levelUpDialog-meleeBonus").addEventListener("click", this.getBonusMelee, false);
						var meleeSkill = $('<div id="levelUpDialog-meleeSkill"></div>');
							meleeSkill.appendTo('#levelUpDialog-meleeWrapper');
        					$("#levelUpDialog-meleeSkill").text(player.skills.melee.counter+ ' / ' + player.skills.melee.max); 


        	var magicWrapper = $('<div id="levelUpDialog-magicWrapper"></div>');
            	magicWrapper.appendTo('#levelUpDialog-bonusoptions');
	        	var magicBonus = $('<div id="levelUpDialog-magicBonus"></div>');
				    magicBonus.attr("title","Improve in magic: qualify for more powerful spells, your spells will become stronger and consume less mana!");
	            	magicBonus.appendTo('#levelUpDialog-magicWrapper');
					document.getElementById("levelUpDialog-magicBonus").addEventListener("click", this.getBonusMagic, false);
						var magicSkill = $('<div id="levelUpDialog-magicSkill"></div>');
							magicSkill.appendTo('#levelUpDialog-magicWrapper');
        					$("#levelUpDialog-magicSkill").text(player.skills.magic.counter+ ' / ' + player.skills.magic.max); 

        	var defenceWrapper = $('<div id="levelUpDialog-defenceWrapper"></div>');
            	defenceWrapper.appendTo('#levelUpDialog-bonusoptions');
	        	var defenceBonus = $('<div id="levelUpDialog-defenceBonus"></div>');
				    defenceBonus.attr("title","Learn how to handle your shield better (if you have it equipped) - enemies will have lower chances to hit you in melee");
	            	defenceBonus.appendTo('#levelUpDialog-defenceWrapper');
					document.getElementById("levelUpDialog-defenceBonus").addEventListener("click", this.getBonusDefence, false);
						var defenceSkill = $('<div id="levelUpDialog-defenceSkill"></div>');
							defenceSkill.appendTo('#levelUpDialog-defenceWrapper');
        					$("#levelUpDialog-defenceSkill").text(player.skills.defence.counter+ ' / ' + player.skills.defence.max); 


        	var stealthWrapper = $('<div id="levelUpDialog-stealthWrapper"></div>');
            	stealthWrapper.appendTo('#levelUpDialog-bonusoptions');
	        	var stealthBonus = $('<div id="levelUpDialog-stealthBonus"></div>');
				    stealthBonus.attr("title","Improving stealth will help you to detect enemies and avoid them or act first in combat");
	            	stealthBonus.appendTo('#levelUpDialog-stealthWrapper');
					document.getElementById("levelUpDialog-stealthBonus").addEventListener("click", this.getBonusStealth, false);
						var stealthSkill = $('<div id="levelUpDialog-stealthSkill"></div>');
							stealthSkill.appendTo('#levelUpDialog-stealthWrapper');
        					$("#levelUpDialog-stealthSkill").text(player.skills.stealth.counter+ ' / ' + player.skills.stealth.max); 

        	$('#levelUpDialog')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'No, thanks' :function(){
	            			$(this).dialog('close');
	            			gameConfig.experience.increase(0);	 
	               		},
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 610,
	       		height: 550,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates the dialog
    	}
    },


    experience: {

    	multiplicator: 0.05, //multiplicator to calculate experience threshold for next level-up 

    	getPlayerNextLevel: function(){
    		var playerNextlevel = player.stats.level.counter+1;
    		return playerNextlevel;
    	},

    	getNextLevelThreshold: function(){
    		var nextLevelThreshold = Math.pow((gameConfig.experience.getPlayerNextLevel()),2)/gameConfig.experience.multiplicator; //defines experience requirement for next level-up
    		return nextLevelThreshold;
    	},

    	increase: function(value){


    		console.log('starting player level for this test: ' + player.stats.level.counter);
			console.log("for next player level (" + gameConfig.experience.getPlayerNextLevel() + ") you need " + gameConfig.experience.getNextLevelThreshold() + " experience.");

        	console.log('  Step 1 - player exp before update: ' + player.stats.experience.counter);
    		console.log('  Step 2 - amount of exp to add: ' + value);
			player.stats.experience.counter += value;
        	console.log('  Step 1 - player exp after update: ' + player.stats.experience.counter);

        	if (player.stats.experience.counter >= gameConfig.experience.getNextLevelThreshold()){
        		
        		player.stats.experience.counter -= gameConfig.experience.getNextLevelThreshold();
        		console.log('Level up!');
            	console.log('  Step 4 - reminder carried forward after adjustment is now ' + player.stats.experience.counter);
        		gameConfig.level.increase(1);       	

        	} else {
        		console.log('threshold not reached');
        	}


			$('#experienceCounter').html(player.stats.experience.counter);


    	},

    	checkBalance: function(value){
	        if (player.stats.experience.counter >= value) {
	            return true;
	        } else {
	            return false;
	        }



    	},

    	decrease: function(value){
    		console.log('balance decrease launched');
    		player.stats.experience.counter -= value;
    		player.stats.render();


    	},

    	learnSpell: function(spell, isFree){
    		if (isFree) {
				console.log('spell is free');
				spellBook.spells.push(spell);
				$("#spellLearnt").get(0).play();
				$("#spellPurchasePage").dialog('close');

				$("#successSomethingPage-message").empty();
				$("#successSomethingPage-message").text('The ' + spell.name + ' spell was added to your Book of Spells for free.');  
				$('#successSomethingPage')
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

    		} else {
				console.log('spelbook is not free to learn');
				if (gameConfig.experience.checkBalance(spell.price)){
					console.log('sufficient experience');
					gameConfig.experience.decrease(spell.price);
					spellBook.spells.push(spell);
					$("#spellLearnt").get(0).play();
					spellBook.drawLearnSpellPage(0);				
				} else {
					gameConfig.messages.insufficientExp(spell);				
				}		
    		}
		}		
    
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
	},

	messages: {

		insufficientFunds: function(item){
			$("#insufficientSomethingPage-message").empty();

			if (player.stats.gold.counter < 1){
				$("#insufficientSomethingPage-message").text('Looks like you are a real bomzh. You do not have enough gold to purchase ' +item.name+ '. It costs ' +item.buyPrice+ ' gold coins, but you are absolutely broke!');  
			} else {
				$("#insufficientSomethingPage-message").text('You do not have enough gold to purchase ' +item.name+ '. It costs ' +item.buyPrice+ ' gold coins, but you have only ' +player.stats.gold.counter+ ' in your purse. Vadimaria is full of treasures, claim them if you dare!');  
			}

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
		},


		insufficientExp: function(item){
			$("#insufficientSomethingPage-message").empty();
			$("#insufficientSomethingPage-message").text('You do not have enough experience to learn the ' +item.name+ ' spell. You need to have ' +item.price+ ' experience points to master it.');  
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
}


function continueGame() {
     $("#bookClosed").get(0).play();
	 $('#page-wrap').empty();


	 var load = localStorage.getItem('save');
	 if (load !== null) {
		var save = JSON.parse(load);

	//update player object with saved data
		player.class.name = save.player.class.name;
		player.class.image = save.player.class.image;
		player.class.id = save.player.class.id;

		player.character.getsBonusBookOnLevel = save.player.character.getsBonusBookOnLevel;
		player.character.getFreeSpellEveryNLevel = save.player.character.getFreeSpellEveryNLevel;
		player.character.getFreeRndSpellEveryNLevel = save.player.character.getFreeRndSpellEveryNLevel;

		player.stats.save.counter = save.player.stats.save.counter;
		player.stats.health.counter = save.player.stats.health.counter;
		player.stats.gold.counter = save.player.stats.gold.counter;
		player.stats.experience.counter = save.player.stats.experience.counter; 
		player.stats.level.counter = save.player.stats.level.counter;
		
		player.skills.archery.counter = save.player.skills.archery.counter;
		player.skills.melee.counter = save.player.skills.melee.counter;
		player.skills.magic.counter = save.player.skills.magic.counter;
		player.skills.defence.counter = save.player.skills.defence.counter;
		player.skills.stealth.counter = save.player.skills.stealth.counter;

		player.map.positionX = save.player.map.positionX;
		player.map.positionY = save.player.map.positionY;
		
		gameConfig.turn.counter = save.gameConfig.turn.counter;
		gameConfig.turn.day = save.gameConfig.turn.day;
		
		spellBook.equipped = save.spellBook.equipped;
		spellBook.spells = save.spellBook.spells;


	// prepare map using saved data
        for(var i = 0; i < save.gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j = 0; j < save.gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(1, i, j, save.map.tileBox[i][j].divID, save.map.tileBox[i][j].terrainType, save.map.tileBox[i][j].terrain, save.map.tileBox[i][j].hasBonus, save.map.tileBox[i][j].bonusType, save.map.tileBox[i][j].cityName); //extracting information from save object and adding new tiles to map array.
            }        
        } 
		player.stats.render();	
       	map.render();

       	console.log('Game loaded successfully');

	 } else {
	 	alert('No saved game found!');

	 }


}



function test(element){
	alert('It works!');

}