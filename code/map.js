
var map =  {

    tileBox: [],

    
    prepare: function(){
        
        var divID = 1; //ID of first div to be used later by jquery

        for(var i = 0; i < gameConfig.map.yHeight; i++){
            map.tileBox[i] = [];
            for(var j =0; j < gameConfig.map.hWidth; j++){
                map.tileBox[i][j] = new Tile(0, i, j, divID++);                
            }        
        } 
    },
    
    
    render: function(){
        $('map-container').empty();
        var mapContainer = $('<div id="map-container"></div>');     
        mapContainer.appendTo('#page-wrap');
        
        for(k = 0; k < map.tileBox.length; k++){
            for(l = 0; l < map.tileBox[k].length; l++){
                map.tileBox[k][l].draw();
            }
        }

        player.map.render(player.map.positionY, player.map.positionX);




        //apply dragon on map based on coordinates

    }
};



var Tile = function(tileFromSave, i, j, divID, terrainType, terrain){
    

    if (tileFromSave) {
        console.log('Tile is loaded from a previous save game through continueGame function');

        this.coordinateY = i;
        this.coordinateX = j;
        this.divID = divID;
        this.terrainType = terrainType;
        this.terrain = terrain;
        this.image = 'img/map/tiles/'+ this.terrain +'.png';




    } else {
        console.log('Tile is created for the first time');

        this.coordinateY = i;
        this.coordinateX = j;
        this.divID = divID;

        var grassTypes = ['grass1', 'grass2'];
        var forestTypes = ['forest1', 'forest2'];
        var swampTypes = ['swamp1', 'swamp2'];
        var hillTypes = ['hills1'];
        var mountainTypes = ['mountains1'];


        this.terrainType = gameConfig.map.terrainTypes[Math.floor(Math.random()*gameConfig.map.terrainTypes.length)];

        if (this.terrainType === 'grass') {
            this.terrain = grassTypes[Math.floor(Math.random()*grassTypes.length)];
        } else if (this.terrainType === 'forest'){
            this.terrain = forestTypes[Math.floor(Math.random()*forestTypes.length)];
        } else if (this.terrainType === 'swamp'){
            this.terrain = swampTypes[Math.floor(Math.random()*swampTypes.length)];
        } else if (this.terrainType === 'hills'){
            this.terrain = hillTypes[Math.floor(Math.random()*hillTypes.length)];
        } else if (this.terrainType === 'mountains'){
            this.terrain = mountainTypes[Math.floor(Math.random()*mountainTypes.length)];
        }


        this.image = 'img/map/tiles/'+ this.terrain +'.png';

    }

    this.clicked = function(){
        console.log('clicked! X coordinate: ' + this.coordinateX + '. Y coordinate: ' + this.coordinateY);
    }


    this.mouseOver = function(){
        console.log('Mouse over!');
    }    


    this.mouseOut = function(){
        console.log('Mouse out!');
    } 


    this.draw = function(){
        
        var div = $('<div class="tile"></div>');
        div.css({"background":"url('"+this.image+"')"});
        div.attr('id', 'tile' + divID);
        div.get(0).obj = this;
        div.click(function(){
            this.obj.clicked();
        });
        div.mouseover(function() {
            this.obj.mouseOver();
        });
        div.mouseout(function() {
            this.obj.mouseOut();
        });
        div.appendTo('#map-container');      
        
    }
    
    
    
};


var getDivIDfromTilesCoordinates = function(y,x){ //needed to changing/updating existing tiles in the array

    var tile = map.tileBox[y][x];

    var divID  = tile.divID;
    return divID;
};


