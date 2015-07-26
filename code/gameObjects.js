
var player = {
    id: "player",
    image: "img/maptiles/player.png",
    

    update: function(character){ //updates player stats according to character selected at game start
        player.type = character.name;

        var characterIcon = 'img/statsIcons/characters/'+ player.type +'.png'
        $('#statsCharacterIcon').css({"background":"url('"+characterIcon+"')"});

        //will update character with starting bonuses, if any.

        character.addBonusGold();
        character.addBonusBook();
        character.addBonusItems();


        //set here bonuses for testing in the beginning of a game

        //gold.increase(0);
        experience.increase(0);
        inventory.active.push(new Manapotion);


        inventory.arrows.push(new Arrow);
        inventory.arrows.push(new Arrow);




        inventory.bagpack.push(new Helmet);


        inventory.shieldSlot.push(new Shield);
        inventory.helmetSlot.push(new Helmet);
        inventory.breastplateSlot.push(new Breastplate);
        inventory.meleeSlot.push(new Sword);
        inventory.rangeSlot.push(new Bow);
        //inventory.bagpack.push(new Arrow);
        city.market.push(new Stone);
        city.market.push(new Stick);
        city.market.push(new Stone);
        city.market.push(new Stone);
        city.market.push(new Sword);
        city.market.push(new Shield);
        city.market.push(new Helmet);
        city.market.push(new Breastplate);
        city.market.push(new Bow);
        city.market.push(new Arrow);
        city.market.push(new Manapotion);
        city.market.push(new Ring);

    },

    type: null, 

    alive: true,
    inCombat: false,
    canRetreat: true, //can retret before battle screen loads

    mana: 10,
        minMana: 0,
        maxMana: 100,
        

    gold: 0,
        minGold: 0,
        maxGold: null,
        
    health: 100,
        minHealth: 1,
        maxHealth: 100,
        

    attack: 0, //  DO NOT MODIFY THIS MANUALLY BUT RUN THE METHOD INSTEAD!!!  (displayed in game and used for calculations)
    attackLog: 0, //used to keep track of luck changes and account for value if over max limit
        minAttack: 0,
        maxAttack: 10,
        increaseAttack: function(amount){ //this works only if starting luck is 0!
                    
            player.attackLog += amount;
            console.log('player attackLog is ' + player.attackLog);

            if (player.attackLog > player.maxAttack) {
                player.attack = player.maxAttack;

            } else {
                 player.attack = player.attackLog;

            }
        },

        decreaseAttack: function(amount){ ////this works only if starting luck is 0!

            player.attackLog -= amount;
            console.log('player attackLog is ' + player.attackLog);
            
            if (player.attackLog > player.maxAttack) {
                player.attack = player.maxAttack;

            } else {
                 player.attack = player.attackLog;

            }       
        },


        
    defense: 0, //  DO NOT MODIFY THIS MANUALLY BUT RUN THE METHOD INSTEAD!!!  (displayed in game and used for calculations)
    defenseLog: 0, //used to keep track of luck changes and account for value if over max limit
        minDefense: 0,
        maxDefense: 10,
        increaseDefense: function(amount){ //this works only if starting luck is 0!
                    
            player.defenseLog += amount;
            console.log('player defenseLog is ' + player.defenseLog);

            if (player.defenseLog > player.maxDefense) {
                player.defense = player.maxDefense;

            } else {
                 player.defense = player.defenseLog;

            }
        },

        decreaseDefense: function(amount){ ////this works only if starting luck is 0!

            player.defenseLog -= amount;
            console.log('player defenseLog is ' + player.defenseLog);
            
            if (player.defenseLog > player.maxDefense) {
                player.defense = player.maxDefense;

            } else {
                 player.defense = player.defenseLog;

            }       
        },



    luck: 0, //  DO NOT MODIFY THIS MANUALLY BUT RUN THE METHOD INSTEAD!!!  (displayed in game and used for calculations)
    luckLog: 0, //used to keep track of luck changes and account for value if over max limit
        minLuck: 0,
        maxLuck: 5,
        increaseLuck: function(amount){ //this works only if starting luck is 0!
                    
            player.luckLog += amount;
            console.log('player luckLog is ' + player.luckLog);

            if (player.luckLog > player.maxLuck) {
                player.luck = player.maxLuck;

            } else {
                 player.luck = player.luckLog;

            }
        },

        decreaseLuck: function(amount){ ////this works only if starting luck is 0!

            player.luckLog -= amount;
            console.log('player luckLog is ' + player.luckLog);
            
            if (player.luckLog > player.maxLuck) {
                player.luck = player.maxLuck;

            } else {
                 player.luck = player.luckLog;

            }       
        },

    
    experience: 10,
        minExperience: 0,
        maxExperience: null,
        expMult: 0.05, //multiplicator to calculate experience requirement for next level-up threshold 

    level: 0,
        minLevel: 0,
        maxLevel: null,
        levelUp: function(){
            $('#addExperience').get(0).pause(); //this pauses but does not reset file to beginning!
            //$('#addExperience').get(0).reset();
            $("#levelup").get(0).play();
            player.level++;
            $('#experienceNextLevel').html(experience.lvlUpThreshold);

            if (player.level === 3) {
                alert('Player gets a book of spells!');
            }

            getLevelUpMessage();
            $('#levelCounter').html(player.level);
        },

    visitedTiles: [],
    position: 1, //player starts on the first tile
        y: 0,
        x: 0,



    move: function(tileID, visitCount, terrainType, tileHasBonus, bonusType, TileCoordinateHor, TileCoordinateVert, mapMaxWidth, cityName){
        alert('Move check: \n\nplayer position: ' + player.position + '\nplayer Y coordinate: ' +player.y + '\nplayer X coordinate: ' + player.x + ' \n\n Tile info: \n\n TileID: ' + tileID + '\n Tile X coordinate: ' + TileCoordinateHor + '\n Tile Y coordinate: ' + TileCoordinateVert + '\n Terrain: ' + terrainType + '\n Tile has bonus: ' + tileHasBonus + '\n Bonus type: ' + bonusType + '\n Times visited: ' + visitCount);

        if (player.position === tileID - 1 && player.y === TileCoordinateVert){
            
            turnManager.nextTurn();

            $('#player').detach().appendTo($('#'+tileID));
            player.position = tileID;
            player.y = TileCoordinateVert;
            var n = player.visitedTiles.indexOf(tileID); //if tileID has not yet been visisted it is not found in the array and produces -1. Of vivisted it produces its index in the array
            if (n < 0){
                player.visitedTiles.push(tileID);  //add tileID to array to state it was visited.
            } else {
                console.log("tile has already been visited");
                var tileVisited = true; 
            }
            console.log("tileIDs visited: " + player.visitedTiles);

            createEvent(tileID, terrainType, tileHasBonus, bonusType, cityName);


            /*


            var eventResult = defineEvent(terrainType); //calls function to determine which generic event happens to player based on terrain type and day/night
            console.log("event is: " + eventResult);
            resolveEvent(eventResult, terrainType); //calls function to determine what happens further with the event
            eventIntro(eventResult, terrainType);
            //start resolving the event();
            //update stats();
            


            //what is below has to stay

            var bonusHandlingResult = handleBonus(tileID, tileHasBonus, bonusType); //whether player collects bonus or not (after move, combat, etc.). Function returns response back to the tile in order to update bonus property.
            if (bonusHandlingResult) {
                return true
            } else {
                return false

            } 



             // if player alive 
            //endTurn();

            */

        } else if (player.position === tileID + 1 && player.y === TileCoordinateVert){
            
            turnManager.nextTurn();

            $('#player').detach().appendTo($('#'+tileID));
            player.position = tileID;
            player.y = TileCoordinateVert;
            var n = player.visitedTiles.indexOf(tileID);
            if (n < 0){
                player.visitedTiles.push(tileID); 
            } else {
                console.log("tile has already been visited");
            }
            console.log("tileIDs visited: " + player.visitedTiles);
            var eventResult = defineEvent(terrainType); //calls function to determine which event happens to player based on terrain type and day/night
            console.log("event is: " + eventResult);
            resolveEvent(eventResult, terrainType);

            /* if (eventResult !== "nothing"){
                eventIntro(eventResult, terrainType);
            }
            */

            var bonusHandlingResult = handleBonus(tileID, tileHasBonus, bonusType); 
            if (bonusHandlingResult) {
                return true
            } else {
                return false

            } 
         

        } else if (player.position === tileID - mapMaxWidth){
           
           turnManager.nextTurn();

            $('#player').detach().appendTo($('#'+tileID));
            player.position = tileID;
            player.y = TileCoordinateVert;
            var n = player.visitedTiles.indexOf(tileID);
            if (n < 0){
                player.visitedTiles.push(tileID); 
            } else {
                console.log("tile has already been visited");
            }
            console.log("tileIDs visited: " + player.visitedTiles);
            var eventResult = defineEvent(terrainType); //calls function to determine which event happens to player based on terrain type and day/night
            console.log("event is: " + eventResult);
            resolveEvent(eventResult, terrainType);

            var bonusHandlingResult = handleBonus(tileID, tileHasBonus, bonusType);
            if (bonusHandlingResult) {
                return true
            } else {
                return false

            } 



        } else if (player.position === tileID + mapMaxWidth){
            
            turnManager.nextTurn();

            $('#player').detach().appendTo($('#'+tileID));
            player.position = tileID;
            player.y = TileCoordinateVert;
            var n = player.visitedTiles.indexOf(tileID);
            if (n < 0){
                player.visitedTiles.push(tileID); 
            } else {
                console.log("tile has already been visited");
            }
            console.log("tileIDs visited: " + player.visitedTiles);
            var eventResult = defineEvent(terrainType); //calls function to determine which event happens to player based on terrain type and day/night
            console.log("event is: " + eventResult);
            resolveEvent(eventResult, terrainType);


           var bonusHandlingResult = handleBonus(tileID, tileHasBonus, bonusType);
            if (bonusHandlingResult) {
                return true
            } else {
                return false

            } 
        } 
    }

};


var handleBonus = function(tileID, tileHasBonus, bonusType){ //to be launched after the encounter is resolved
    if(tileHasBonus){
        $('#bonus'+tileID).remove();
        console.log(bonusType + " collected!");

        if(bonusType === 'gold'){
            var amount = 10 + (15 * player.level) + (5 * player.luck); //formula for terrain gold bonus
            getBonusCollectedMessage(bonusType, amount);

        } else if (bonusType === 'experience'){
            var amount =  10 + (6 * Math.pow(player.level, 2)); //formula for terrain experience bonus
            getBonusCollectedMessage(bonusType, amount);
            //if (getBonusCollectedMessage() === true){
            //   
            //}

        }

        return true // this returns true/false back to parent function player.move() That function in its turn will return true/false to Tile in order to update tile property - remove hasBonus attribute.
    } else {
        return false
    } 
};





var gold = {
		
    checkBalance : function(item) {

        if (player.gold >= item.buyPrice) {
            return true;
        } else {
            return false;
        }


    },

/*
    var tradeItem = function(item, action){ //whole object is passed into the function as well as instructions on what to do with this object.
        
        if (action === "buy") { 
            if (player.gold >= item.price) { 
                gold.decrease(item.price);
                return true; //returns true back so that code can proceed to next step, e.g. playerStatsUpdateItem. See spellBook.open() for example
                } else {
                    //alert("Insufficient funds"); //FIX: make a proper jquery-ui message
                    insufficientFundsMessage(item);
                    return false;
            }
        } 
        else if (action === "sell") {
            alert("player wants to sell, will sell now");
            gold.increase(item.sellPrice);
            return true;
        }
    };

*/


    increase: function (amount) {
	 	console.log("player gold before transaction: " + player.gold);
		player.gold += amount;
		console.log("player gold after transaction: " + player.gold);
			if (amount > 1) {
				$("#coinsfound").get(0).play();
				} else {
					$("#onecoinfound").get(0).play();
			}
		
        var goldCoins = parseFloat(player.gold.toFixed(2));
        $('#goldCoinCounter').html(goldCoins);

                    /*  CODE TO BREAK AMOUNT INTO GOLD,SILVER and COPPER COINS

                    var goldCoins = Math.round(parseInt((player.gold/1000)));
                    var a = player.gold % 1000;
                    var silverCoins = Math.round(parseInt((a/100)));
                    var copperCoins = a % 100 
             
                    */
	},

	decrease: function (amount){
		player.gold -= amount;
		$("#sell").get(0).play();

        var goldCoins = parseFloat(player.gold.toFixed(2));
        $('#goldCoinCounter').html(goldCoins);

	}
};



var experience = {
	id: "experience",
	counterID: "experienceCounter", //displays exp value in the game interface
	image: null, //path to .png
		
    getPlayerNextLevel: function(){
      var a = player.level+1;
        return a;
    },
    
    lvlUpThreshold: function(){ 
        var b = Math.pow((player.level+1),2)/player.expMult; //defines experience requirement for next level-up
        return b;
    },

	increase: function (amount) {
        console.log('Player starting level for this test: ' + player.level);
		console.log("for next level (" + experience.getPlayerNextLevel() + ") you need " + experience.lvlUpThreshold() + " experience.");

        console.log('  Step 1 - player experience before update: ' + player.experience);
        console.log('  Step 2 - amount of exp to add: ' + amount);
        player.experience += amount;
        console.log('  Step 3 - player experience after update: ' + player.experience);
        
        if (player.experience >= experience.lvlUpThreshold()){
            player.experience -= experience.lvlUpThreshold()
            console.log('level up!');
            console.log('  Step 4 - exp cost adjusted for level up and is now ' + player.experience);
            
            player.levelUp();

            $('#experienceNextLevel').html(experience.lvlUpThreshold); 
            console.log('Player level is now: ' + player.level);
          
            console.log("for next level (" + experience.getPlayerNextLevel() + ") you need " + experience.lvlUpThreshold() + " experience. You have " + player.experience + ' experience.');
             
          


            if (player.experience >= experience.lvlUpThreshold()){
                console.log('player experience after update is sufficient for next level up!');
                
                experience.increase(0);//recursion
            
            } else {
                console.log('player experience after update is NOT sufficient for next level up.');
                $('#experienceCounter').html(player.experience);
                return;
            }
        
        } else {
            console.log('player experience carried over: ' + player.experience);
            $('#experienceCounter').html(player.experience);
            return;
        }
           
        
    },

	decrease: function (amount){
        player.experience -= amount;
        $('#experienceCounter').html(player.experience);
	},


    checkBalance : function(item) {

        if (player.experience >= item.price) {
            return true;
        } else {
            return false;
        }
    },

};





    //------------------------ PLAYING AROUND WITH OBJECTS ---//







 var playerStatsUpdateItem = function(item, action){ // function handles items
    if (action === "buy"){
        if (item.attack > 0) {
            var tempBonusValue = player.attack + item.attack;
            if (tempBonusValue > player.maxAttack) {
                alert("This item will give you attack bonus of +" + item.attack + " while your max attack bonus can be" + player.maxAttack);
                } else {
                player.attack += tempBonusValue;
                item.equipped = true;
                alert("Player attack is now: " + player.attack);
                $('#attackCounter').html(player.attack);
                var tempBonusValue = 0;
                alert("tempBonusValue is now: " + tempBonusValue);
                $("#" + item.objectName + "Icon").attr("src", "img/inventory/" + item.objectName + "_equipped.png");
                alert("Weapon now equipped: " + item.equipped);
                }
        }
        else if (item.defense > 0){
            alert("item defence is > 0");
        }
    } else if (action === "sell") {
        alert("selling item...");
        if (item.attack > 0) {
            player.attack -= item.attack;
            $('#attackCounter').html(player.attack);
            item.equipped = false;
            $("#" + item.objectName + "Icon").attr("src", "img/inventory/" + item.objectName + ".png");
            alert("Weapon now equipped: " + item.equipped);
        }
    }
 };
