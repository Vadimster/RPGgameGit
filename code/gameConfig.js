
var gameConfig = {


	map: {

		cityLimit: 5 //number of cities on map. Max 10

	},

	mod: { //various modifiers

	    terrain: { //base values for deciding if encounter is favorable/nonfavorable. The higher the more chances that event is favorable (player needs to roll < threshdold)
	        grass: 2.5,
	        forest: 2.5,
	        swamp: 1.5,
	        hills: 2,
	        mountains: 2
	    },

	    time: { 
	    
	        day: 1,
	        night: 0
	    },
	    
	    terrainNothing: { // base values for calculation of "nothing" outcome for non-favorable event. More dangerous tiles are likely to produce less chance of "nothing happens"
	        grass: 1.3,
	        forest: 1.2,
	        swamp: 1,
	        hills: 0.7,
	        mountains: 0.5
	    },


	    favorableEvent: { //the higher the value the better (more chances that event is favorable)
	    	chanceToHappen: function(terrainType, timeOfDay){
	    		var chanceValue = parseFloat(
					(gameConfig.mod.terrain[terrainType] + gameConfig.mod.time[timeOfDay] + player.luck/2 - player.level/10)//formula goes in these brackets
					.toFixed(2));
	    		return chanceValue;
	    	}
	    },



	    unfavorableEvent: {
	    	nothingHappensChance: function(terrainType, timeOfDay){ //chance that player is not attacked by mob. The larger the value is the better.
	    		var chanceValue = parseFloat(
					(gameConfig.mod.terrainNothing[terrainType] + gameConfig.mod.time[timeOfDay] - player.level/8)//formula goes in these brackets
					.toFixed(2));
				return chanceValue;
	    	}
	    },


	    wizard: {
	    	chanceToMeet: function(){
	    		var chanceValue = parseFloat((1 - player.level/5).toFixed(2)); //the lower the value the higher chance to meet the wizard. Player;s chances increase with higher level.
	    		return chanceValue;
	    	}
	    },

	    merchant: {
	    	
	    	minGoldToMeet: 10, //player balance needs to be sufficient first

	    	chanceToMeet: function(){
	    		var chanceValue = parseFloat((0.5 - player.level/5).toFixed(2)); //the lower the value the higher chance to meet the wizard
	    		return chanceValue;
	    	}
	    }


	}

};