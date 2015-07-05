
var Tile = function(TileCoordinateHor, TileCoordinateVert, tileNumericID){

    var self = this; //CRITICAL TO UNDERSTAND !!!
    var tileHeight = 60; //image dimensions
    var tileWidth = 60; //image dimensions
    var tileID = tileNumericID;
    var x = TileCoordinateHor;
    var y = TileCoordinateVert;
    var visitCount = 0;
    
    var terrainTypes = ["grass","forest","hills","swamp","forest", "mountains"];
    
    this.terrainType = terrainTypes[Math.floor(Math.random()*terrainTypes.length)];
    this.cityName  = null;
    //self.id = tileNumericID;
    //self.terrainType = terrainType;

    
    this.img = 'img/maptiles/'+ this.terrainType +'.png';


/* Taking care of bonuses on each tile - start */
    var bonusArray = [1,1,1,0,0,0,0,0,0,0,0,0,0,0]; //to increase chances of bonus being applied to a tile replace 0 with 1 and the other way round 
    
    var tileHasBonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];

    if(this.terrainType !== "grass" || "city"){ //grass/city tile cannot have a bonus on it
        if (tileHasBonus > 0){
            if (this.terrainType === "swamp" && tileID !== 1) {
                var bonusType = "gold";
        
            } else if (this.terrainType === "hills" && tileID !== 1) {
                var bonusType = "chest";
        
            } else if (this.terrainType === "mountains" && tileID !== 1) {
                var bonusType = "artefact";
        
            } else if (this.terrainType === "forest" && tileID !== 1){
                var bonusType = "experience";
            }
        }
    } 


    var bonusImage = 'img/maptiles/bonuses/'+ bonusType +'.png';

/* Bonus config end*/




    this.draw = function(){ 

        var div = $("<div class='tile'></div>");

        div.attr('id',tileID).data('type',this.terrainType).data('x',x).data('y',y);
        div.get(0).Tile = self;// CRITICAL TO UNDERSTAND!!!!
        div.css({top:tileHeight*y, left:tileWidth*x});
        div.css({"background":"url('"+this.img+"')"});
        div.appendTo('#map-content');
            if (this.terrainType === "swamp" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Gold" />');
           
            } else if (this.terrainType === "hills" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Chest" />');
           
            } else if (this.terrainType === "mountains" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Artefact"/>');
           
            } else if (this.terrainType === "forest" && tileHasBonus > 0 && tileID !== 1) {
                div.append('<img id="bonus'+tileID+'" class="bonus" src="'+bonusImage+'" title = "Experience"/>');
            }

        if (this.terrainType === 'city') {
            div.prop('title', this.cityName);
        } else {
            div.prop('title', this.terrainType);


        }


    };

      

    this.initiateEvent = function(mapMaxWidth){  //TILE IS CLICKED
       bonusCollected = player.move(tileID, visitCount, this.terrainType, tileHasBonus, bonusType, x, y, mapMaxWidth, this.cityName); //Since I do not know how to return back to this Tile, I pass important info as arguments to an external function.
       
       if (bonusCollected){ // result of bonus handling procedure. If bonus was collected, it is removed. 
            tileHasBonus = false;

       }

       visitCount++; // this will update the counted whether the move is possible or not => on EVERY click. Can I add moving logic here and possible save player coordinates by addressing player. object properties directly?

    };
};

var Map = new function(){

    var tileBox = [];
    var mapMaxHeight = 9;
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
        


        setCities();

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
        $('#map-content').children().first().append('<img id="player" src="'+player.image+'" />'); //adds player to the first tile in the map
    }; 


    var setCities = function(){

        var cityNames = ['Vadimgrad', 'Noobngrad', 'Dragonmoor', 'Stonehall', 'Zhbongrad', 'Summerston', 'Sageshore', 'Crystalcastle', 'Faymoor', 'Whitehedge'];
        var cityLimit = 10; //make a global config variable for diffculty level?

        for (i = 0; i < cityLimit; i++) {
            
            var arrayX = Math.floor(Math.random()*(mapMaxHeight));
            var arrayY = Math.floor(Math.random()*(mapMaxWidth));

            var tile = tileBox[arrayX][arrayY];

            console.log('TileID: ' + tile.id + '. Terrain: ' + tile.terrainType);

            tile.terrainType = 'city';
            tile.img = 'img/maptiles/'+ tile.terrainType +'.png';

            var nameFromArray = cityNames[Math.floor(Math.random()*cityNames.length)];
            tile.cityName = nameFromArray;
            
            //will identify the used name and then remove it from the array.
            var a  = cityNames.indexOf(nameFromArray);
            cityNames.splice(a,1); 
        }
    };

};





$( document ).ready(function() {
    //$("#backgroundMusic").get(0).play();

    //gold.increase(100); //FOR TESTING PURPOSES - gives gold straight away
    //experience.increase(300); //FOR TESTING PURPOSES - gives experience straight away


    
    characters.page();

    $('#healthCounter').html(player.health);
    $('#goldCounter').html(player.gold);
    $('#experienceCounter').html(player.experience);
    $('#experienceNextLevel').html(experience.lvlUpThreshold);                                             
    $('#levelCounter').html(player.level);

    //NEED TO HAVE AN INIT FUNCTION, WHICH CREATES MAP AND PUTS STARTING VALUES IN THE INTERFACE. THIS WILL BE USED FOR GAMEOVER TOO
});



   



