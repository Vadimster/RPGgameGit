
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

        //console.log(map.tileBox);
        player.map.render(player.map.positionY, player.map.positionX);
        //apply dragon on map based on coordinates


    },


    getDivIDfromTilesCoordinates: function(y,x){ //needed to changing/updating existing tiles in the array
        var divID = map.tileBox[y][x].divID;
        return divID;
    },


    checkIfMoveLegal: function(targetTile){
        if (targetTile.coordinateX - player.map.positionX === 1 && targetTile.coordinateY === player.map.positionY) {
            console.log('move legal. Move East');
            return true;

        } else if (player.map.positionX - targetTile.coordinateX === 1 && targetTile.coordinateY === player.map.positionY) {
            console.log('move legal. Move West');
            return true;

        } else if (player.map.positionY - targetTile.coordinateY === 1 && targetTile.coordinateX === player.map.positionX) {
            console.log('move legal. Move North');
            return true;

        } else if (targetTile.coordinateY - player.map.positionY === 1 && targetTile.coordinateX === player.map.positionX) {
            console.log('move legal. Move South');
            return true;

        } else {
            console.log('move not legal');
            return false;

        }
    }

};



var Tile = function(tileFromSave, i, j, divID, terrainType, terrain, hasBonus, bonusType){
    

    if (tileFromSave) {
        console.log('Tile is loaded from a previous save game through continueGame function');

        this.coordinateY = i;
        this.coordinateX = j;
        this.divID = divID;
        this.terrainType = terrainType;
        this.terrain = terrain;
        this.image = 'img/map/tiles/'+ this.terrain +'.png';
        this.hasBonus = hasBonus;
        this.bonusType = bonusType;





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


       this.tileHasBonus = function(){
             var tileHasBonus = gameConfig.map.bonusArray[Math.floor(Math.random()*gameConfig.map.bonusArray.length)];
             return tileHasBonus; //return 1 or 0
        }

        if(this.terrainType === 'grass'){ //!== 'grass' || 'city'
            this.hasBonus = false;
        } else {
            if(this.tileHasBonus()) {
                this.hasBonus = true;

                if (this.terrainType === "swamp") {
                    this.bonusType = "gold";
        
                } else if (this.terrainType === "hills") {
                    this.bonusType = "chest";
        
                } else if (this.terrainType === "mountains") {
                    this.bonusType = "artefact";
        
                } else if (this.terrainType === "forest"){
                    this.bonusType = "experience";
                }

            } else {
                this.hasBonus = false;

            }
        }
            
/*
        if(this.terrainType !== "grass" || "city"){ //grass/city tile cannot have a bonus on it
            
            if (this.tileHasBonus()){
                this.hasBonus = true;

                if (this.terrainType === "swamp") {
                this.bonusType = "gold";
        
                } else if (this.terrainType === "hills") {
                    this.bonusType = "chest";
        
                } else if (this.terrainType === "mountains") {
                    this.bonusType = "artefact";
        
                } else if (this.terrainType === "forest"){
                    this.bonusType = "experience";
                }
            }
        } 

        this.bonusImage = 'img/map/bonus/'+ this.bonusType +'.png';

*/



        


    }

    this.clicked = function(){
        if (map.checkIfMoveLegal(this)){
            console.log('Move is legal')
            gameConfig.targetTileEvent(this);
            player.move(this);
        } else {
            //do nothing
        }
        
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
        
        if(this.hasBonus){
            div.append('<img id="bonus'+this.divID+'" class="bonus" src="img/map/bonus/'+ this.bonusType +'.png" title = "'+this.bonusType+'" />');
        }

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







