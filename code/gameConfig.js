var gameConfig = {


	turn: {

		counter: 1,
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

	},



    map: {     
            yHeight: 9,
            hWidth: 20,
            
            terrainTypes: ['grass', 'forest', 'forest', 'swamp','hills','mountains'], //can adjust terrainType probability by blending the array with same terrainTypes

            cities: 5
         },


    createMap: function() {
		map.prepare();
		map.render();   	
    }


};






function startGame() {

	$("#buttonClick").get(0).play();
	$('#page-wrap').empty();
	characters.newCharacterSelectorDialog() //choose character dialog. Choosing character will call 
}



function saveGame() {

	if (localStorage) {

		if (player.stats.save.counter > player.stats.save.min) {
			alert('Game saved. Previous progress overwritten');
			
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

		} else {
			alert('cannot save - insufficient credit');

		}

	} else {
		alert('Local storage not supported');
	}

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
		gameConfig.turn.counter = save.gameConfig.turn.counter;
		gameConfig.turn.day = save.gameConfig.turn.day;
		//add spelbook.equipped value
		player.stats.render();	
       
       	// rebuild map using saved data
        for(var i = 0; i < save.gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j = 0; j < save.gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(1, i, j, save.map.tileBox[i][j].divID, save.map.tileBox[i][j].terrainType, save.map.tileBox[i][j].terrain); //extracting information from save object and adding new tiles to map array.
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