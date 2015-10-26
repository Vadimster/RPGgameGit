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


	music: {
		playBGroundMusic: function(){
			console.log('music to start: gameConfig.music.playBGroundMusic()');
			//$("#backgroundmusic").get(0).play();		
		}
	},



    map: {     
        yHeight: 9,
        hWidth: 20,
        
        terrainTypes: ['grass', 'forest', 'forest', 'swamp', 'hills', 'mountains'], //can adjust terrainType probability by blending the array with same terrainTypes
		bonusArray: [1,1,1,0,0,0,0,0,0,0,0,0,0,0], //to increase chances of bonus being applied to a tile replace 0 with 1 in the array.

        cities: 5,
        cityNames: ['Vadimgrad', 'Glassrock', 'Dragonmoor', 'Stonehall', 'Greyfort', 'Summerston', 'Sageshore', 'Crystalcastle', 'Faymoor', 'Whitehedge'],
        cityBanners: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    },


    bonus: {
    	spellLevel: player.stats.level.counter + Math.floor(player.skills.magic.counter/2), //determines which spells are available for learning. Player magic skill is rounded down!
    	maxCardRank: 10, //In card games Luck level will kick inly if card drawn is below this value (i.e. less than 10)
    	cardRankIncrease: player.stats.luck.counter - 1 // value with which card rank will be adjusted in card gammes if Luck kicks in

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
	    checkBalance : function(amount) {
	        if (player.stats.gold.counter >= amount) {
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
			
			} else if (value > 0) {
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
    				$("#spellLearnt").get(0).play();
			    	player.skills.archery.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('archery');
			    }
    		}

    		this.getBonusMelee  = function(){
			    if(player.skills.melee.counter < player.skills.melee.max){
    				$("#spellLearnt").get(0).play();
			    	player.skills.melee.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('melee');
			    }
    		}
    		
    		this.getBonusMagic  = function(){
			    if(player.skills.magic.counter < player.skills.magic.max){
    				$("#spellLearnt").get(0).play();
			    	player.skills.magic.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('magic');
			    }
    		}

    		this.getBonusDefence  = function(){
			    if(player.skills.defence.counter < player.skills.defence.max){
    				$("#spellLearnt").get(0).play();
			    	player.skills.defence.counter++;
			    	$(this).closest('.ui-dialog-content').dialog('close');
	            	gameConfig.experience.increase(0);	 

			    } else {
			    	player.skills.cannotLevelUp('defence');
			    }
    		}

    		this.getBonusStealth  = function(){
			    if(player.skills.stealth.counter < player.skills.stealth.max){
    				$("#spellLearnt").get(0).play();
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
			city.drawPage();
		
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
	
	},

	inventory: {

		market: {
			array: []
		},

		bagpack: {
			array: []
		},

		active: {
			array: [],
			limit: 5,
		},

		arrows: {
			array: [],
			limit: 5
		},

		helmetSlot: {
			array: [],
			limit: 1
		},

		shieldSlot: {
			array: [],
			limit: 1
		},

		breastplateSlot: {
			array: [],
			limit: 1
		},

		meleeSlot: {
			array: [],
			limit: 1
		},

		rangeSlot:{
			array: [],
			limit: 1			
		},

		itemID: 1, //global valriable in an object used a unique ID for every new item created. All further actions with this item are based on this ID.

		getItemID: function(){
			var itemID = gameConfig.inventory.itemID++
			return itemID;
			 //var count = 1;
			//return function(){
				//return count++;
			//}
		},


		handleItem: function(item){
			console.log('gameConfig.inventory.handleItem() launched');
			function getIndexByAttribute(array, attr, value) { //return idex of an object with specific proprty value in a specified array
			    for(var i = 0; i < array.length; i++) {
			        if(array[i][attr] === value) {
			            return i;
			        }
			    }
			}
			var itemIndex = getIndexByAttribute(gameConfig.inventory[item.location].array, 'id', item.id); //1. get index of item in relevant array (item.location)

			if(market.visited){
				if(item.location === 'bagpack'){
					console.log('will now sell on the market');
					gameConfig.gold.increase(player, item.sellPrice);
					gameConfig.inventory.bagpack.array.splice(itemIndex, 1);
					gameConfig.inventory.draw('bagpack');

				} else { //item is located in the market
					console.log('will now purchase on the market');
					if(gameConfig.gold.checkBalance(item.buyPrice)){
						console.log('sufficient funds');
						gameConfig.gold.decrease(player, item.buyPrice);
						gameConfig.inventory.bagpack.array.push(item);
						gameConfig.inventory.market.array.splice(itemIndex, 1);
						item.location = 'bagpack';
						console.log('I am now in array: ' + item.location + 'My ID is: ' + item.id + ' My index in new array is: ' +getIndexByAttribute(gameConfig.inventory[item.location].array, 'id', item.id))
						gameConfig.inventory.draw('bagpack');
						gameConfig.inventory.draw('market');

					} else {
            			gameConfig.messages.insufficientFunds(item);
					}
				}
			} else { //no windows are opened (means that player is in character mode) - item to be equippeed
				console.log('Item clicked, player is in character mode');
				console.log('ItemID is ' + item.id);

					if(item.location === 'bagpack'){ //will equip item
						var activeLocationLength = gameConfig.inventory[item.activeLocation].array.length;
						console.log('Active location for this item is ' +item.activeLocation+ '. Its length is ' +activeLocationLength);
						console.log('ItemID is ' + item.id);
						if(activeLocationLength < gameConfig.inventory[item.activeLocation].limit){ //target array where the item to be placed into can take more objects
							console.log('target array is not full');
							gameConfig.inventory[item.activeLocation].array.push(item);
							item.location = item.activeLocation;
							console.log('Item new location is now ' + item.location);
							gameConfig.inventory.bagpack.array.splice(itemIndex, 1);
							gameConfig.inventory.updateStats(item, 'equip'); //adjust stats - item equipped

						} else {  //If target array is full, will swap selected item with last item in the array.
							console.log('target array is full');
							console.log('ItemID is ' + item.id);
							//preparation- get details about last active item in the target array (destination from backpack)
							var lastActiveItem = gameConfig.inventory[item.activeLocation].array[gameConfig.inventory[item.activeLocation].array.length - 1]; 
							console.log('Last element is: ' + lastActiveItem.name);
							var lastActiveItemIndex = gameConfig.inventory[item.activeLocation].array.length - 1;
							console.log('Last element index: ' + lastActiveItemIndex);
							
							//manipulating last active item in the target array
							gameConfig.inventory.updateStats(gameConfig.inventory[item.activeLocation].array[lastActiveItemIndex],'unequip'); //adjust stats - item unequipped
							gameConfig.inventory.bagpack.array.push(gameConfig.inventory[item.activeLocation].array[lastActiveItemIndex]); //copy currently active item from activeArray to bagpack
							gameConfig.inventory[item.activeLocation].array[lastActiveItemIndex].location = 'bagpack'; //update location of the item which will be moved to bagpack
							gameConfig.inventory[item.activeLocation].array.splice(lastActiveItemIndex, 1); //remove currently active item from activeArray

							
							//manipulate item which was clicked in bagpack
							gameConfig.inventory.updateStats(item, 'equip'); //adjust stats - item equipped
							gameConfig.inventory.bagpack.array.splice(itemIndex, 1);
							gameConfig.inventory[item.activeLocation].array.push(item);
							item.location = item.activeLocation;

						}
					
					characterProfile.drawPage();
					
					} else { //item is not in bagback and is thus curently equipped

						var itemIndex = getIndexByAttribute(gameConfig.inventory[item.activeLocation].array, 'id', item.id); //1. get index of item in relevant array (item.location)
						console.log('my index is ' + itemIndex);

						gameConfig.inventory.bagpack.array.push(gameConfig.inventory[item.activeLocation].array[itemIndex]);
						gameConfig.inventory.updateStats(gameConfig.inventory[item.activeLocation].array[itemIndex],'unequip');  //adjust stats - item unequipped
						gameConfig.inventory[item.activeLocation].array.splice(itemIndex, 1);
						item.location = 'bagpack';
						characterProfile.drawPage();
					}



			}  //add else if on battle page and swap blocks of code...


		},


		updateStats: function(item, action){ //this will loop throuhg item's "bonuses" property and update relevant counters in player.stats. Arguments: item = object in inventory; action = 'equip'/'unequip'
		    //console.log(item);
		    console.log('item name is: ' +item.name);
		    for(var key in item.bonuses){	//loop through properties of the "bonus" object within an item. Each property value will be added to or removed from player stats. It is important that bonuses and player stats have same name (e.g. attack = attack)    	
		        //console.log(key + ': ' + item.bonuses[key]);
	            if(action === 'equip'){ //item will be equipped
	                console.log(item.name +' will be equipped');
	                player.stats[key].tracker += item.bonuses[key];
	                console.log('1: ' +key+ ' bonus of the '+item.name+' is added to tracker. tracker is now: ' + player.stats[key].tracker);

	                if (player.stats[key].tracker > player.stats[key].max){
	                    console.log('Player max '+key+' value exceeded');
	                    player.stats[key].counter = player.stats[key].max;
	                    console.log('Player '+key+' is now at its max: ' + player.stats[key].counter);
	                    console.log('Running counter is: ' + player.stats[key].tracker);

	                } else {
	                    player.stats[key].counter += item.bonuses[key];
	                    console.log('Player max '+key+' value not exceeded');
	                    console.log('Player '+key+' counter is: ' + player.stats[key].counter);
	                    console.log('Running counter is: ' + player.stats[key].tracker);

	                }
	   
	            } else if (action === 'unequip') { //item will be unequiped
	                console.log(item.name +' will be unequipped');
	                player.stats[key].tracker -= item.bonuses[key];
	                console.log('1: ' +key+ ' bonus of the '+item.name+' is removed from tracker. tracker is now: ' + player.stats[key].tracker);
	     
	                if(player.stats[key].tracker > player.stats[key].max){
	                    console.log('Player '+key+' is stil at its max: ' + player.stats[key].counter);
	                    player.stats[key].counter = player.stats[key].max;
	                    console.log('Running counter is: ' + player.stats[key].tracker);
	                } else {
	                    console.log('Running counter falls below max and is now: ' + player.stats[key].tracker);
	                    player.stats[key].counter = player.stats[key].tracker;
	                    console.log(key +' counter is now: ' +player.stats[key].counter);        
	                }
	            }
		    }
		},

	
		draw: function(inventoryArray, itemType){ //from where to draw and what to draw
			$('.'+inventoryArray).empty();
            
            gameConfig.inventory[inventoryArray].array.sort(function(a, b){ //sort array alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    

			if (itemType === undefined){ //array items will not be filtered
	            for(i=0; i<gameConfig.inventory[inventoryArray].array.length; i++) {
	              var item = gameConfig.inventory[inventoryArray].array[i];
	              item.div = $("<div/>");
	              item.div.addClass("inventoryItem");
	              item.div.css({"background-color": item.backgroundColor});          
	              item.div.css({"background-image":"url('"+item.icon+"')"});
	              
	              item.div.data('obj', item);
	              item.div.click(function(){
	              	$(this).data('obj').clicked();
	              });
	              item.div.mouseover(function() {
	              	$(this).data('obj').getInfo();
	              });
	              item.div.mouseout(function() {
	              	$(this).data('obj').mouseLeft();
	              });

	              item.div.appendTo('.'+inventoryArray);
	            }
	        } else if (itemType === 'budget') { //filtering happens in the market
				for(i=0; i<gameConfig.inventory.market.array.length; i++) {
					if (gameConfig.inventory.market.array[i].buyPrice <= player.stats.gold.counter){
		              var item = gameConfig.inventory.market.array[i];
		              item.div = $("<div/>");
		              item.div.addClass("inventoryItem");
		              item.div.css({"background-color": item.backgroundColor});          
		              item.div.css({"background-image":"url('"+item.icon+"')"});
		              
		              item.div.data('obj', item);
		              item.div.click(function(){
		              	$(this).data('obj').clicked();
		              });
		              item.div.mouseover(function() {
		              	$(this).data('obj').getInfo();
		              });
		              item.div.mouseout(function() {
		              	$(this).data('obj').mouseLeft();
		              });

		              item.div.appendTo('.market');

					} else {
						//do  nothing
					}
				}

			} else { //array items will be filtered
	            for(i=0; i<gameConfig.inventory[inventoryArray].array.length; i++) {
	            	
	            	if (gameConfig.inventory[inventoryArray].array[i].type === itemType) {
		              var item = gameConfig.inventory[inventoryArray].array[i];
		              item.div = $("<div/>");
		              item.div.addClass("inventoryItem");
		              item.div.css({"background-color": item.backgroundColor});          
		              item.div.css({"background-image":"url('"+item.icon+"')"});
		              
		              item.div.data('obj', item);
		              item.div.click(function(){
		              	$(this).data('obj').clicked();
		              });
		              item.div.mouseover(function() {
		              	$(this).data('obj').getInfo();
		              });
		              item.div.mouseout(function() {
		              	$(this).data('obj').mouseLeft();
		              });

		              item.div.appendTo('.'+inventoryArray);
		            }
		        }			
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
		
		gameConfig.inventory.itemID = save.gameConfig.inventory.itemID; //if not saved will be reset back to 1.
		gameConfig.inventory.bagpack.array = save.gameConfig.inventory.bagpack.array;
		//re-attach lost methods to every item in the bagpack
			for(i= 0; i < gameConfig.inventory.bagpack.array.length; i++){
				gameConfig.inventory.bagpack.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}
		gameConfig.inventory.market.array = save.gameConfig.inventory.market.array;
			for(i= 0; i < gameConfig.inventory.market.array.length; i++){
				gameConfig.inventory.market.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}		
		
		gameConfig.inventory.meleeSlot.array = save.gameConfig.inventory.meleeSlot.array;
			for(i= 0; i < gameConfig.inventory.meleeSlot.array.length; i++){
				gameConfig.inventory.meleeSlot.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}			

		gameConfig.inventory.active.array = save.gameConfig.inventory.active.array;
			for(i= 0; i < gameConfig.inventory.active.array.length; i++){
				gameConfig.inventory.active.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}		

		gameConfig.inventory.arrows.array = save.gameConfig.inventory.arrows.array;
			for(i= 0; i < gameConfig.inventory.arrows.array.length; i++){
				gameConfig.inventory.arrows.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}	


		gameConfig.inventory.helmetSlot.array = save.gameConfig.inventory.helmetSlot.array;
			for(i= 0; i < gameConfig.inventory.helmetSlot.array.length; i++){
				gameConfig.inventory.helmetSlot.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}	

		gameConfig.inventory.shieldSlot.array = save.gameConfig.inventory.shieldSlot.array;
			for(i= 0; i < gameConfig.inventory.shieldSlot.array.length; i++){
				gameConfig.inventory.shieldSlot.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}	

		gameConfig.inventory.breastplateSlot.array = save.gameConfig.inventory.breastplateSlot.array;
			for(i= 0; i < gameConfig.inventory.breastplateSlot.array.length; i++){
				gameConfig.inventory.breastplateSlot.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}	

		gameConfig.inventory.rangeSlot.array = save.gameConfig.inventory.rangeSlot.array;
			for(i= 0; i < gameConfig.inventory.rangeSlot.array.length; i++){
				gameConfig.inventory.rangeSlot.array[i].clicked = function(){
													        console.log('clicked');
													        gameConfig.inventory.handleItem(this);
													    	};
			}	




		spellBook.equipped = save.spellBook.equipped;
		spellBook.spells = save.spellBook.spells;


	// prepare map using saved data
        for(var i = 0; i < save.gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j = 0; j < save.gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(1, i, j, save.map.tileBox[i][j].divID, save.map.tileBox[i][j].terrainType, save.map.tileBox[i][j].terrain, save.map.tileBox[i][j].hasBonus, save.map.tileBox[i][j].bonusType, save.map.tileBox[i][j].cityName, save.map.tileBox[i][j].cityBanner ); //extracting information from save object and adding new tiles to map array.
            }        
        } 
		player.stats.render();	
       	map.render();
       	gameConfig.music.playBGroundMusic();

       	console.log('Game loaded successfully');

	 } else {
	 	alert('No saved game found!');

	 }


}



function test(element){
	alert('It works!');

}