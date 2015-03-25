
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