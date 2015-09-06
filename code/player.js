
var player = {

	alive: true,

	class: {
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
		player.class.name = character.name;
		player.class.image = 'img/stats/characters/'+ character.imgName +'.png'
	},


	move: function(targetTile) {
		$('#player').detach().appendTo($('#tile'+targetTile.divID));
		player.map.positionX = targetTile.coordinateX;
		player.map.positionY = targetTile.coordinateY;
		gameConfig.turn.nextTurn();
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

			counter: 0,
			min: 0,
			max: 100
		},

		gold: {

			counter: 0,
			min: 0,
			max: 99999
		},		


		render: function(){ //creates stats div on the page and populates values
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
		            	experienceCounter.appendTo('#experienceWrapper');
		            	var experienceSeparator = $('<div id="experienceSeparator">/</div>');
		            	experienceSeparator.appendTo('#experienceWrapper');
		            	var experienceNextLevel = $('<div id="experienceNextLevel"></div>');
		            	experienceNextLevel.appendTo('#experienceWrapper');

			    var statsSpellBook = $('<div id="statsSpellBook"></div>');
	            statsSpellBook.appendTo('#stats-container');
		        document.getElementById("statsSpellBook").addEventListener("click", test, false);
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
		            document.getElementById("statsCharacterIcon").addEventListener("click", test, false);

			    var statsCity = $('<div id="statsCity"></div>');
	            statsCity.appendTo('#stats-container');
		        document.getElementById("statsCity").addEventListener("click", test, false);
				    var statsCityIcon = $('<div id="statsCityIcon"></div>');
		            statsCityIcon.appendTo('#statsCity');

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