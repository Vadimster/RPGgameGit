
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


function defineEvent(terrainType){ // decides what player encounters on the target tile
	var array = [1,2,3,4,5,6,7,8,9,10];
	var random = array[Math.floor(Math.random()*array.length)];
	
	if (terrainType === "grass"){
		
		if (turnManager.day) {
			if (random < 5) { // 40%
				var result = "peasants";
				return result;
			
			} else if (random === 5){ // 10%
				var result = "merchant";
				return result;

			} else if (random > 8){ // 20%
				var result = "nothing";
				return result;

			} else if (random === 6 || 7 || 8){ //30%
				var result = "chest";
				return result;
			}
		} else { // if night
			if (random < 6) { // 50%
				var result = "robbers";
				return result;
			
			} else if (random === 6){ // 10%
				var result = "peasants";
				return result;

			} else if (random === 7){ // 10%
				var result = "chest";
				return result;

			} else if (random > 7){ //30%
				var result = "nothing";
				return result;
			}
		}
	
	} else if (terrainType === 'forest'){

		if (turnManager.day) {
			if (random < 4) { // 30%
				var result = "animals"; //
				return result;
			
			} else if (random === 4){ // 10%
				var result = "robbers";
				return result;

			} else if (random === 5 || 6 || 7){ // 30%
				var result = "nothing";
				return result;

			} else if (random > 7){ //30%
				var result = "chest";
				return result;
			}
		
		} else { // if night
			if (random < 7) { // 60%
				var result = "animals";
				return result;
			
			} else if (random === 7){ // 10%
				var result = "robbers";
				return result;

			} else if (random === 8){ // 10%
				var result = "chest";
				return result;

			} else if (random > 8){ //20%
				var result = "nothing";
				return result;
			}
		}

	} else if (terrainType === 'swamp'){

		if (turnManager.day) {
			if (random < 5) { // 40%
				var result = "monster";
				return result;
			
			} else if (random === 5 || 6){ // 20%
				var result = "chest";
				return result;

			} else if (random === 7){ // 10%
				var result = "trap";
				return result;

			} else if (random > 7){ //30%
				var result = "nothing";
				return result;
			}
		
		} else { // if night
			if (random < 7) { // 60%
				var result = "monster";
				return result;
			
			} else if (random === 7){ // 10%
				var result = "nothing";
				return result;

			} else if (random === 8){ // 10%
				var result = "chest";
				return result;

			} else if (random > 8){ //20%
				var result = "trap";
				return result;
			}
		}


	} else if (terrainType === 'hills'){

		if (turnManager.day) {
			if (random < 6) { // 50%
				var result = "monster";
				return result;
			
			} else if (random === 6){ // 10%
				var result = "wizard";
				return result;

			} else if (random === 7){ // 10%
				var result = "nothing";
				return result;

			} else if (random > 7){ //30%
				var result = "chest";
				return result;
			}
		
		} else { // if night
			if (random < 8) { // 70%
				var result = "monster";
				return result;
			
			} else if (random === 8){ // 10%
				var result = "nothing";
				return result;

			} else if (random === 9){ // 10%
				var result = "chest";
				return result;

			} else if (random > 10){ //20%
				var result = "wizard";
				return result;
			}
		}


	} else if (terrainType === 'mountains'){

		if (turnManager.day) {
			if (random < 7) { // 60%
				var result = "monster";
				return result;
			
			} else if (random === 7){ // 10%
				var result = "wizard";
				return result;

			} else if (random === 8){ // 10%
				var result = "nothing";
				return result;

			} else if (random > 8){ //20%
				var result = "chest";
				return result;
			}
		
		} else { // if night
			if (random < 9) { // 80%
				var result = "monster";
				return result;
			
			} else if (random === 9){ // 10%
				var result = "trap";
				return result;

			} else if (random === 10){ // 10%
				var result = "chest";
				return result;
			}
		}	

	}

}


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
			//define who lives in biome at day
			var forest = [wolves, bear, crazySquirrels, snakes, wildBoar, treeFairy];
			var enemy = forest[Math.floor(Math.random()*forest.length)];
			console.log("Constructing day animlas...");
		} else {
			var forest = [snakes, wolves, bear, wildBoar, giantSpider]; //define who lives in biome at nigh
			var enemy = forest[Math.floor(Math.random()*forest.length)];
			console.log("Constructing night animals...");
		}
		
	} else if (eventResult === "chest") {
			console.log("Constructing chest...");
		//constructs a "Do you want to opena chest message - redirect to messages.js"

	} else if (eventResult === "trap") {
			console.log("Constructing trap...");
		// check luck etc. to check if trap is avoided
		// if unlucky call function which resolves the trap and provides a message about the trap (if player is alive)

	} else if (eventResult === "merchant") {
		console.log("Constructing merchant...");

	} else if (eventResult === "wizard") {
		console.log("Constructing wizard...");
	}
}