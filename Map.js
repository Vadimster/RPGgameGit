


function Tile(rnd, px, py, nid) {
    var self = this;
    var _types = ["grass","forest","hills","swamp","forest", "mountains"];
   
    var height = 60;
    var width = 60;
    var tileID = nid // new numeric tile id

    var id = "tile_"+px+py+rnd; // old tile ID
    var x = px;
    var y = py;
    
    var type = _types[rnd];
    var img = 'img/maptiles/'+type+'.png';

    this.Draw = function() {
        var div = $("<div class='tile'></div>");
        div.attr('id',tileID).data('type',type).data('x',x).data('y',y).attr('hasBonus', false);
        div.get(0).tile = self;
        div.css({top:height*y, left:width*x});
        div.css({"background":"url('"+img+"')"});
        div.appendTo('#map-content');
    };

    this.Bonus = function() {
        var bonusArray = [1,1,0,0,0,0,0,0,0,0,0,0,0];
        if (type === "swamp") {
            var bonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                if (bonus > 0 && tileID != 1) {
                $('#' + tileID).append('<img id="goldBonus" src="img/maptiles/goldcoins.png" title = "Gold" />');
                $('#' + tileID).attr('hasBonus', true).attr('bonus', "gold");

                }
        }
        else if (type === "hills") {
            var bonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                if (bonus > 0 && tileID != 1) {
                $('#' + tileID).append('<img id="bonusChest" src="img/maptiles/chest.png" title = "Chest" />');
                $('#' + tileID).attr('hasBonus', true).attr('bonus', "chest");
                }
        }
        else if (type === "mountains") {
            var bonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                if (bonus > 0 && tileID != 1) {
                $('#' + tileID).append('<img id="bonusChest" src="img/maptiles/artefact.png" title = "Artefact"/>');
                $('#' + tileID).attr('hasBonus', true).attr('bonus', "artefact");
                }
        }
         else if (type === "forest") {
            var bonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                if (bonus > 0 && tileID != 1) {
                $('#' + tileID).append('<img id="bonusChest" src="img/maptiles/books.png" title = "Experience"/>');
                $('#' + tileID).attr('hasBonus', true).attr('bonus', "experience");
                }
        }       
    };



    this.Alert = function() {
        alert("Tile type: "+type+". Tile ID: "+tileID+" ");
    };

    
    this.TerrainType = function() { //sets type of clicked tile as a global variable for further check in RandomEvent(). Terrain type has impact on encounter.
    terrainType = type;
    };
    
    this.TerrainBonus = function() { //sets bonus of clicked tile as a global variabe for further check in RandomEvent().
    terrainHasBonus = $('#' + tileID).attr('hasBonus');
    terrainBonus = $('#' + tileID).attr('bonus');
    };

    
    this.setTerrain = function(hasBonus, bonus) {
        terrainType = type;
        terrainHasBonus = hasBonus;
        terrainBonus = bonus;
    }

    this.Move = function(){ // moves player to clicked tile, if possible 
        var playerX = $('#'+tileID).data('y');
        if (playerPosition === tileID - 1 && playerY === $('#'+tileID).data('y')) { //checks if player is on horizontally adjacent tile and is not changing row (vertically)
            $('#player').detach().appendTo($('#'+tileID)); // takes player icon from current div and moves the icon to the clicked tile
            playerPosition = tileID; // tileID needed to calculate
            playerX = x; //player recieved new X coordinate
            playerY = y; //player recieved new Y coordinate
            randomEvent();
        }
        else if (playerPosition === tileID + 1 && playerY === $('#'+tileID).data('y')) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;
            //alert("you are entering " + type + ". This tile bonus is: " + $('#' + tileID).attr('bonus'));
            randomEvent();

        }
        else if (playerPosition === tileID + maxHorz) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;
            //alert("you are entering " + type + ". This tile bonus is: " + $('#' + tileID).attr('bonus'));
            randomEvent();


        }
        else if (playerPosition === tileID - maxHorz) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;
            //alert("you are entering " + type + ". This tile bonus is: " + $('#' + tileID).attr('bonus'));
            randomEvent();
        }

    };
}

var Map = new function() {  //WHY IS "NEW" USED HERE??
    maxHorz = 20;
    maxVert = 10;

    
    var tiles = [];
    this.init = function() {
        var tileID = 1; // sets the very first tile as #1.
        $('#map-content div').remove(); //clears map field (it might have existed from previous game) - required when a new game started (see GameOver();)

        for(var i=0; i<maxVert; i++) { //turns tiles[] into a 2D array. Stats with 1st row (maxVert)... 
            tiles[i] = []; //creates a sub array in the first row
            for(var j=0; j<maxHorz; j++) { // adds columns afterwards (maxHor)
                tiles[i][j] = new Tile(Math.random()*6|0, j, i, tileID++); //[i] & [j] are 2D coordinates in array. For the relevant position a new Tile element is produced and placed
            }
        }  

        Render(); //draws every tile from the array  and drawn bonus on the tile (through tiles' own methods)
        Setup(); //setups other elements on the page (could be possibly done through Player ansd Dragon own methods??)
    };

    this.GetMap = function() {
        return tiles;
    };

    var Render = function() {
        $.each(tiles, function(k,v){
            $.each(v, function(k,t){
                t.Draw();
                t.Bonus(); 
            });
        });
    };

    var Setup = function(){
        playerPosition = 1; //setting player starting tile number
        playerX = 0;
        playerY = 0;
        $('#map-content').children().last().append('<img id="dragon" src="img/maptiles/dragon.png" />'); //adds dragon to the last tile in the map
        $('#map-content').children().first().append('<img id="player" src="img/maptiles/player.png" />'); //adds player to the first tile in the map
        $('#map-content').on('click','div.tile', function(e){
             //var tile = tiles[$(this).data('y')][$(this).data('x')];
             this.tile.setTerrain($(this).data('hasBonus'),$(this).data('bonus'));
             this.tile.TerrainType();
             this.tile.TerrainBonus();
             this.tile.Move();
             //to remove bonus I probably need to write the clicked tileID as a global var to use the ID in the jquery for detaching the element "bonus".


        });


    }

    this.Redraw = function(x,y) {

    };




};

Map.init();



