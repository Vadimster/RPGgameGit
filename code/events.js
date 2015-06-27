
var mod = { //Modificators for various formulae

    terrain: { //base event values for calculaiton of favorable/nonfavorable outcome
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
    
    terrainNothing: { //base event for calculation of "nothing" outcome for non-favorable event. More dangerous tiles are likely to produce less chance of "nothing happens"
        grass: 1.3,
        forest: 1.2,
        swamp: 1,
        hills: 0.7,
        mountains: 0.5

    }

};




var turnManager = {

	turn: 1,
	day: true,

	nextTurn: function(){
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
	}
};



var createEvent = function(tileID, terrainType, tileHasBonus, bonusType){

	if (terrainType === 'city') {

		alert('You have entered the city!'); //Possibly higher chances to meet robbers at night??

	}



	if(turnManager.day){
		var timeOfDay = 'day'; 
	
	} else {
		var timeOfDay = 'night'; 
	}

	if (tileHasBonus) {
	    console.log('Tile has bonus. Will now create ' +timeOfDay+ ' enemy');
	} else {
	    console.log('Tile does not have bonus. Will now create ' +timeOfDay+' event');

	    console.log('Detemining threshold for favorable event');

			var favorableEventThreshold = parseFloat(
				(mod.terrain[terrainType] + mod.time[timeOfDay] + player.luck/2 - player.level/10)//formula goes in these brackets
				.toFixed(2));

		    console.log('Threshold is: ' + favorableEventThreshold);
		    console.log('Player rolls dice to see if threshld test is passed. If passed - favorable event happens');
	    	var roll = parseFloat((Math.random()*10).toFixed(2)); //player base roll will generate a number between 0 and 10 with 2 decimal points
    		console.log('player roll is: ' + roll);
    		if (roll < favorableEventThreshold){
    			console.log('event is favorable');
    			//code below 1. checks if wizard is met, if not then checks if merchant is met if not then event is chest.

	    		var roll = parseFloat((Math.random()*10).toFixed(2)); //player base roll will generate a number between 0 and 10 with 2 decimal points
	    		console.log('Threshold to meet the wizard is: ' + wizard.chanceToMeet + '. Player rolled: ' + roll);

	    		if (roll >= wizard.chanceToMeet) {
	    			console.log('It is a wizard! Will now run resolveWizard() to determine what player gets based on his stats'); 
	    			wizard.defineOutcome();
	    		} else {
	    			console.log('It is NOT wizard. Will now check if player has sufficient money to take merchant test.');

	    			if (player.gold >= 500) { //5 silver coins
		    			
		    			var thresholdMerchant = 9; 
	    				var roll = parseFloat((Math.random()*10).toFixed(2)); //player base roll will generate a number between 0 and 10 with 2 decimal points

	    				console.log('Threshold to meet merchant is ' + thresholdMerchant + '. Player rolled ' + roll);

	    				if ( roll >= thresholdMerchant){
	    					console.log('It is a merchant!');
							//resolveMerchant();  opens the shop
	    				} else {
	    					console.log('Player failed the merchant test. Event is a chest!');
	    					//exploreChest();
	    				}

	    			} else {
	    				console.log('Player gold not sufficient to take merchant test. Event is a chest!');
	    					//exploreChest();
	    			}

	    		}
			    		
    		} else {
    			console.log('event is not favorable. Will now determine if encounter is a mob or nothing');
    			
				var nothingEventThreshold = parseFloat(
					(mod.terrainNothing[terrainType] + mod.time[timeOfDay] - player.level/8)//formula goes in these brackets
					.toFixed(2));
		    	console.log('Threshold for "nothing" is: ' + nothingEventThreshold);
	    		var roll = parseFloat((Math.random()*10).toFixed(2)); //player base roll will generate a number between 0 and 10 with 2 decimal points
    			console.log('player roll for "nothing" is: ' + roll);
	    		if (roll < nothingEventThreshold) {
	    			console.log('nothing happens!');
	    			experience.increase(1);

	    		} else {
	    			console.log('Will now generate mob'); //FINISH THIS

	    		}
	   		}
	}
};







































/*

//DEFINE MOBS!
function resolveEvent(eventResult, terrainType){ //prepares events based on what player encountered at defineEvent();

	if (eventResult === "monster" && terrainType === "swamp") {

		if (turnManager.day) {
			var swamp = [swampMonster, giantTode, swampBugs, mossMan, swampDemon, swampThing, swampSpirit]; //define who lives in biome at day - populate with objects
			var enemy = swamp[Math.floor(Math.random()*swamp.length)];
			console.log("Constructing day swamp mob... The mob is " + enemy.name); //get a mob randomly, rewrite Enemy object with new stats (both predefined and dynamically generated)

		} else {
			var swamp = [swampMonster, zombie, swampBugs, mossMan, swampDemon, swampThing, swampSpirit]; //define who lives in biome at night
			var enemy = swamp[Math.floor(Math.random()*swamp.length)];
			console.log("Constructing night swamp mob... The mob is " + enemy.name);
			}

	} else if (eventResult === "monster" && terrainType === "hills") {

		if (turnManager.day) {
			var hills = [dwarf, masterDwarf, goblin, ogre, dwarfConjuror, sceletons, giantSpider]; //define who lives in biome at day
			var enemy = hills[Math.floor(Math.random()*hills.length)];
			console.log("Constructing day hills mob... The mob is " + enemy.name);
		} else {
			var hills = [dwarf, masterDwarf, goblin, ogre, dwarfConjuror, sceletons, giantSpider]; //define who lives in biome at night
			var enemy = hills[Math.floor(Math.random()*hills.length)];
			console.log("Constructing night hills mob... The mob is " + enemy.name);
			}

	} else if (eventResult === "monster" && terrainType === "mountains") {

		if (turnManager.day) {
			var mountains = [unicorn, fireLizard, iceDemon, battleMage, orks]; //define who lives in biome at day
			var enemy = mountains[Math.floor(Math.random()*mountains.length)];
			console.log("Constructing day mountains mob... The mob is " + enemy.name);
		} else {
			var mountains = [undeadWarriors, orks, necromancer, chimera, fireLizard]; //define who lives in biome at night
			var enemy = mountains[Math.floor(Math.random()*mountains.length)];
			console.log("Constructing night mountains mob... The mob is " + enemy.name);
			}
	
	} else if (eventResult === "peasants") {
		console.log("Constructing peasants...");
		//contruct/update the enemy straight away and call combat screen passing the terraintype

	} else if (eventResult === "robbers") {
			console.log("Constructing robbers...");
		//contruct/update the enemy straight away and call combat screen passing the terraintype

	} else if (eventResult === "animals") {
		if (turnManager.day) {
			var forest = [wolves, bear, crazySquirrels, snakes, wildBoar, treeFairy];
			var enemy = forest[Math.floor(Math.random()*forest.length)];
			console.log("Constructing day animlas... The mob is " + enemy.name);
		} else {
			var forest = [snakes, wolves, bear, wildBoar, giantSpider]; //define who lives in biome at nigh
			var enemy = forest[Math.floor(Math.random()*forest.length)];
			console.log("Constructing night animals... The mob is " + enemy.name);
		}
		
	} else if (eventResult === "chest") {
			console.log("Constructing chest...");
		//constructs a "Do you want to opena chest message - redirect to messages.js"

	} else if (eventResult === "trap") { 		// check luck etc. to check if trap is avoided. Display a message that you have noticed a trap.
			if (terrainType === "swamp") {
				console.log("Constructing swamp trap...");
			} else if (terrainType === "mountains") {
				console.log("Constructing mountains trap...");
			}

		// if unlucky call function which resolves the trap using the terrainType argument and provides a message about the trap (if player is alive)

	} else if (eventResult === "merchant") {
		console.log("Constructing merchant...");

	} else if (eventResult === "wizard") {
		console.log("Constructing wizard...");
	}
}



*/
