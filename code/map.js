



var Tile = function(TileCoordinateHor, TileCoordinateVert, tileNumericID){

    var self = this; //CRITICAL TO UNDERSTAND !!!
    var tileHeight = 60; //image dimensions
    var tileWidth = 60; //image dimensions
    var tileID = tileNumericID;
    var x = TileCoordinateHor;
    var y = TileCoordinateVert;
    var visitCount = 0;
    
    var terrainTypes = ["grass","forest","hills","swamp","forest", "mountains"];
    var terrainType = terrainTypes[Math.floor(Math.random()*terrainTypes.length)];

    var img = 'img/maptiles/'+ terrainType +'.png';


/* Taking care of bonuses on each tile - start */
    var bonusArray = [1,1,1,0,0,0,0,0,0,0,0,0,0,0];
    
    if(terrainType !== "grass"){ //grass tile cannot have a bonus on it
        var tileHasBonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
        if (tileHasBonus > 0){
            if (terrainType === "swamp" && tileID !== 1) {
                var bonusType = "gold";
        
            } else if (terrainType === "hills" && tileID !== 1) {
                var bonusType = "chest";
        
            } else if (terrainType === "mountains" && tileID !== 1) {
                var bonusType = "artefact";
        
            } else if (terrainType === "forest" && tileID !== 1){
                var bonusType = "experience";
            }
        }
    }
    
    var bonusImage = 'img/maptiles/bonuses/'+ bonusType +'.png';
/* Bonus config end*/

    this.draw = function(){ 

        var div = $("<div class='tile'></div>");

        div.attr('id',tileID).data('type',terrainType).data('x',x).data('y',y);
        div.get(0).Tile = self;// CRITICAL TO UNDERSTAND!!!!
        div.css({top:tileHeight*y, left:tileWidth*x});
        div.css({"background":"url('"+img+"')"});
        div.appendTo('#map-content');
            if (terrainType === "swamp" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Gold" />');
           
            } else if (terrainType === "hills" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Chest" />');
           
            } else if (terrainType === "mountains" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Artefact"/>');
           
            } else if (terrainType === "forest" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Experience"/>');
            }
    };

      

    this.initiateEvent = function(mapMaxWidth){  //TILE IS CLICKED
       player.move(tileID, visitCount, terrainType, tileHasBonus, bonusType, x, y, mapMaxWidth); //Since I do not know how to return back to this Tile, I pass important info as arguments to an external function.
       visitCount++; // this will update the counted whether the move is possible or not => on EVERY click. Can I add moving logic here and possible save player coordinates by addressing player. object properties directly?

    };
};

var Map = new function(){

    var tileBox = [];
    var mapMaxHeight = 8;
    var mapMaxWidth = 20;
    var firstTileID = 1; //ID of first tile on map, tileID to be used for div ID later on.

    this.initiate = function() { // create 2D array ...
        $('#map-content div').remove(); //clears map field (it might have existed from previous game)
        for(var i = 0; i < mapMaxHeight; i++){
            tileBox[i] = [];
            for(var j = 0; j < mapMaxWidth; j++) {
                tileBox[i][j] = new Tile(j, i, firstTileID++); // ... and create and place instances of object Tile into the array
            }
        }
        
        renderMap();

        $('#map-content').on('click','div.tile', function(e){ //click handler
            this.Tile.initiateEvent(mapMaxWidth);
        });
};
    
    var renderMap = function() { //loop through array and call .draw method on each instance of Tile in the array. This will place elements on the page (DOM)
            $.each(tileBox, function(index,value){
                $.each(value, function(index,value){
                    value.draw();
                });
            });
        $('#map-content').children().last().append('<img id="dragon" src="img/maptiles/dragon.png" />'); //adds dragon to the last tile in the map
        $('#map-content').children().first().append('<img id="player" src="img/maptiles/player.png" />'); //adds player to the first tile in the map
    };       
};


$( document ).ready(function() {
    //$("#backgroundMusic").get(0).play();
    Map.initiate();
    $('#healthCounter').html(player.health);
    $('#goldCounter').html(player.gold);
    $('#experienceCounter').html(player.experience);
    $('#attackCounter').html(player.attack);
    $('#defenseCounter').html(player.defense);
    $('#luckCounter').html(player.luck);
    $('#levelCounter').html(player.level);

    //NEED TO HAVE AN INIT FUNCTION, WHICH CREATES MAP AND PUTS STARTING VALUES IN THE INTERFACE. THIS WILL BE USED FOR GAMEOVER TOO
});




