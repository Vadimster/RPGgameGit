
var tileID = 1;

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
        div.attr('id',tileID).data('type',type).data('x',x).data('y',y);
        div.get(0).tile = self;
        div.css({top:height*y, left:width*x});
        div.css({"background":"url('"+img+"')"});
        div.appendTo('#map-content');
    };


    this.Alert = function() {
        alert("Tile type: "+type+". Tile ID: "+tileID+" ");
    };

    this.Move = function(){ // moves player to clicked tile, if possible 
        var playerXN = $('#'+tileID).data('y');
        if (playerPosition === tileID - 1 && playerY === $('#'+tileID).data('y')) { //checks is player is on horizontally adjacent tile and is not changing row (vertically)
            $('#player').detach().appendTo($('#'+tileID)); // movel player icon to the clicked tile
            playerPosition = tileID; // tileID needed to calculate
            playerX = x; //player recieved new X coordinate
            playerY = y; //player recieved new Y coordinate
        }
        else if (playerPosition === tileID + 1 && playerY === $('#'+tileID).data('y')) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;
        }
        else if (playerPosition === tileID + maxHorz) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;

        }
        else if (playerPosition === tileID - maxHorz) {
            $('#player').detach().appendTo($('#'+tileID));
            playerPosition = tileID;
            playerX = x;
            playerY = y;            
        }
    };
}

var Map = new function() {
    maxHorz = 20;
    maxVert = 8;
    
    var tiles = [];
    this.init = function() {
        for(var i=0; i<maxVert; i++) {
            tiles[i] = [];
            for(var j=0; j<maxHorz; j++) {
                tiles[i][j] = new Tile(Math.random()*6|0, j, i, tileID++);
            }
        }  

        Render();
        Setup();
    };

    this.GetMap = function() {
        return tiles;
    };

    var Render = function() {
        $.each(tiles, function(k,v){
            $.each(v, function(k,t){
                t.Draw(); 
            });
        });
    };

    var Setup = function(){
        $('#map-content').on('click','div.tile', function(e){
             //var tile = tiles[$(this).data('y')][$(this).data('x')];
             this.tile.Move();
        });
    }

    this.Redraw = function(x,y) {

    };

}

Map.init();



$('#1').append('<img id="player" src="img/maptiles/player.png" />'); //setting player on the first tile
var playerPosition = 1; //writing starting player tile number on the map
var playerX = 0;
var playerY = 0;

$('#map-content').children().last().append('<img id="player" src="img/maptiles/dragon.png" />'); //adds dragon to the last tile in the map



