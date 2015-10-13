
var player = {

	character: { //attributes of a selected character saved here

	},


	alive: true,

	class: {
		id: null,
		name: null,
		image: null, //avatar image in stats 

	},

	map: {
		positionX: 0,
		positionY: 0,
		image: "img/map/units/player.png",
		
		render: function(y, x){ //draws player on map using the X and Y cordinates when map created/loads
			$('#tile'+map.getDivIDfromTilesCoordinates(y, x)+'').append('<img id="player" src="'+player.map.image+'" />');
		}
	},


	update: function(character) { //updates player stats/bonuses according to character selected at game start
		
		player.character = character;
		player.class.id = character.id;
		player.class.name = character.name;
		player.class.image = 'img/stats/characters/'+ character.imgName +'.png'

        //will update character with starting bonuses, if any.
        character.addBonusGold();
        character.addBonusSave();
        character.addBonusBook();
        character.addBonusItems();

        //set here bonuses for testing here

		//gameConfig.experience.increase(10);
		//gameConfig.health.increase(player, 10);
		//gameConfig.health.decrease(player, 70);
		//gameConfig.gold.increase(player, 10000);
		//gameConfig.gold.decrease(player, 1000000);
		//gameConfig.save.increase(1);

		gameConfig.inventory.bagpack.push(new Sword('bagpack'));
		gameConfig.inventory.bagpack.push(new Stick('bagpack'));
		gameConfig.inventory.bagpack.push(new Sword('bagpack'));
		gameConfig.inventory.bagpack.push(new Bow('bagpack'));
		gameConfig.inventory.bagpack.push(new Arrow('bagpack'));
		gameConfig.inventory.bagpack.push(new Stone('bagpack'));
		gameConfig.inventory.bagpack.push(new Breastplate('bagpack'));
		gameConfig.inventory.bagpack.push(new Ring('bagpack'));
		gameConfig.inventory.bagpack.push(new Manapotion('bagpack'));
		gameConfig.inventory.bagpack.push(new Shield('bagpack'));
		gameConfig.inventory.bagpack.push(new Helmet('bagpack'));

		gameConfig.inventory.market.push(new Stick('market'));
		gameConfig.inventory.market.push(new Sword('market'));


	},


	isOnCityTile: function(){	
		if (map.tileBox[player.map.positionY][player.map.positionX].terrain === 'city'){
			return true;
		} else {
			return false;
		}
	},



	move: function(targetTile) {
		$('#player').detach().appendTo($('#tile'+targetTile.divID));
		player.map.positionX = targetTile.coordinateX;
		player.map.positionY = targetTile.coordinateY;
		console.log('player moved');
		if (player.isOnCityTile()){
        	$('#cityEntranceIndicator').css('background', '0');
		} else {
        	$('#cityEntranceIndicator').css({"background":"url(img/stats/redcross.png)"});
		}

		//gameConfig.experience.increase(0);
		gameConfig.turn.nextTurn();
	},


	skills: {
		archery: {
			counter: 0,
			min: 0,
			max: 10
		},

		melee: {
			counter: 9,
			min: 0,
			max: 10
		},

		magic: {
			counter: 0,
			min: 0,
			max: 10
		},

		defence: {
			counter: 0,
			min: 0,
			max: 10
		},

		stealth: {
			counter: 0,
			min: 0,
			max: 10
		},


		cannotLevelUp: function(skill){
	    	$("#insufficientSomethingPage-message").empty();
			$("#insufficientSomethingPage-message").text('You have reached your maximum proficiency in ' + skill +' which is ' + player.skills[skill].max + '. You need to either allocate bonus points to another skill or skip this upgrade entirely.');  
			$('#insufficientSomethingPage')//making a global div to be created dynamically instead of describing every dialogue in html
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

	},



	stats: {
		save: {
			counter: 5,
			min: 0,
			max: 999
		},

		level: {
			counter: 0,
			min: 0,
			max: 99

		},

		health: {
			counter: 100,
			min: 0,
			max: 100
		},

		gold: {
			counter: 0,
			min: 0,
			max: 9999
		},

		experience: {
			counter: 0
		},

		luck: {
			counter: 0,
			min: 0,
			max: 5
		},

		mana: {
			counter: 0,
			min: 0,
			max: 10
		},

		render: function(){ //creates stats div on the page and populates values
            $('#stats-container').empty();

            var statsContainer = $('<div id="stats-container"></div>');
            	statsContainer.appendTo('#page-wrap');
	            
	            var statsSave = $('<div id="statsSave"></div>');
		            statsSave.appendTo('#stats-container');
			            var statsSaveIcon = $('<div id="statsSaveIcon"></div>');
			            	statsSaveIcon.appendTo('#statsSave');
			            	document.getElementById("statsSaveIcon").addEventListener("click", saveGamePage, false);
			            	statsSaveIcon.attr("title","Save current progress. It will overwrite your previous save.");
			            		var statsSaveCounter = $('<div id="statsSaveCounter"></div>');
		            				statsSaveCounter.appendTo('#statsSaveIcon');
		            				statsSaveCounter.html(player.stats.save.counter);

	            var statsLevel = $('<div id="statsLevel"></div>');
		            statsLevel.appendTo('#stats-container');
		            	var statsLevelIcon = $('<div id="statsLevelIcon"></div>');
		            		statsLevelIcon.appendTo('#statsLevel');
		            	var statsLevelCounter = $('<div id="statsLevelCounter"></div>');
		            		statsLevelCounter.appendTo('#statsLevel');
		            		statsLevelCounter.html(player.stats.level.counter);

	            var statsHealth = $('<div id="statsHealth"></div>');
		            statsHealth.appendTo('#stats-container');
		            	var statsHealthIcon = $('<div id="statsHealthIcon"></div>');
		            		statsHealthIcon.appendTo('#statsHealth');
		            	var statsHealthCounter = $('<div id="statsHealthCounter"></div>');
		            		statsHealthCounter.appendTo('#statsHealth');
		            		statsHealthCounter.html(player.stats.health.counter);



	            var statsGold = $('<div id="statsGold"></div>');
		            statsGold.appendTo('#stats-container');
		            	var statsGoldIcon = $('<div id="statsGoldIcon"></div>');
		            		statsGoldIcon.appendTo('#statsGold');
		            	var statsGoldCounter = $('<div id="statsGoldCounter"></div>');
		            		statsGoldCounter.appendTo('#statsGold');
		            		statsGoldCounter.html(player.stats.gold.counter);


			    var statsExperience = $('<div id="statsExperience"></div>');
	            	statsExperience.appendTo('#stats-container');
		            	var statsExperienceIcon = $('<div id="statsExperienceIcon"></div>');
		            		statsExperienceIcon.appendTo('#statsExperience');
		            	var experienceWrapper = $('<div id="experienceWrapper"></div>');
		            		experienceWrapper.appendTo('#statsExperience');
				            	var experienceCounter = $('<div id="experienceCounter"></div>');
				            		experienceCounter.html(player.stats.experience.counter);
			            			experienceCounter.attr("title","Experience you have accumulated so far");
				            		experienceCounter.appendTo('#experienceWrapper');
				            	var experienceSeparator = $('<div id="experienceSeparator">/</div>');
				            		experienceSeparator.appendTo('#experienceWrapper');
				            	var experienceNextLevel = $('<div id="experienceNextLevel"></div>');
				            		experienceNextLevel.appendTo('#experienceWrapper');
			            			experienceNextLevel.attr("title","Experience required for next level");
		            				experienceNextLevel.html(gameConfig.experience.getNextLevelThreshold());

			    var statsSpellBook = $('<div id="statsSpellBook"></div>');
		            statsSpellBook.appendTo('#stats-container');
			        document.getElementById("statsSpellBook").addEventListener("click", spellBook.iconClicked, false);
					    var statsSpellBookIcon = $('<div id="statsSpellBookIcon"></div>');
			            	statsSpellBookIcon.appendTo('#statsSpellBook');
						    	var spellBookEquipIndicator = $('<div id="spellBookEquipIndicator"></div>');
				            		spellBookEquipIndicator.appendTo('#statsSpellBookIcon'); 
								    if (spellBook.equipped) {
			        					$('#spellBookEquipIndicator').css('background', '0');
								    } else {
								    	//do nothing
								    }         

	            var statsCharacter = $('<div id="statsCharacter"></div>');
		            statsCharacter.appendTo('#stats-container');
			            var statsCharacterIcon = $('<div id="statsCharacterIcon"></div>');
	        				statsCharacterIcon.css({"background":"url('"+player.class.image+"')"});
			            	statsCharacterIcon.appendTo('#statsCharacter');
			            	document.getElementById("statsCharacterIcon").addEventListener("click", characterProfile.drawPage, false);

			    var statsCity = $('<div id="statsCity"></div>');
		            statsCity.appendTo('#stats-container');
			        document.getElementById("statsCity").addEventListener("click", city.onClick, false);
					    var statsCityIcon = $('<div id="statsCityIcon"></div>');
			            	statsCityIcon.appendTo('#statsCity');
						   		var cityEntranceIndicator = $('<div id="cityEntranceIndicator"></div>');
						            cityEntranceIndicator.appendTo('#statsCityIcon');            
									if (player.isOnCityTile()){
							        	$('#cityEntranceIndicator').css('background', '0');
									} else {
							        	$('#cityEntranceIndicator').css({"background":"url(img/stats/redcross.png)"});
									}
					


			    var statsTurn = $('<div id="statsTurn"></div>');
	            statsTurn.appendTo('#stats-container');
				    var statsTurnIcon = $('<div id="statsTurnIcon"></div>');
		            statsTurnIcon.appendTo('#statsTurn');
		            if (gameConfig.turn.day){
		            	$('#statsTurnIcon').css({"background":"url(img/stats/day_icon.png)"});

		            } else {
		            	$('#statsTurnIcon').css({"background":"url(img/stats/night_icon.png)"});
		            }

					var statsTurnCounter = $('<div id="statsTurnCounter"></div>');
			        statsTurnCounter.appendTo('#statsTurn');
			      	statsTurnCounter.html(gameConfig.turn.counter);
		},
	}








};