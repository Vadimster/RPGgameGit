var Arrow = function(){

    this.name = 'metal arrow'; //also divID for jQuery
    this.icon = 'img/items/weapons/range/arrows/arrow_2.png'; //image for the 
    this.backgroundColor = '#F87431';
    this.type = "arrow";

    this.melee = false; //used for item div background color and placing into weapon slot
    this.range = false; //used for item div background color and placing into weapon slot
    this.artefact = false; //used for item div background color
    this.active = false; //determins if object needs to go into active items div
    this.arrow  = true; //determins if object needs to go into arrows div
  
    this.consumable = false;
    
    this.buyPrice = 5;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
    this.defense = 0;

    this.clicked = function(){
        inventory.handleItem(this);

    };


   this.getInfo = function(){ //will display item stats in div .itemInfoContainer
        showWeaponDetailsMessage(this);


    };



    this.mouseLeft = function(){
        $('.itemInfoContainer').hide();

    };



    this.purchase = function(item){



    };



    this.addToInventory = function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    };



    this.equip = function(){


    };


    this.unequip = function(item){



    };

    this.trade = function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    };
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?



};





var Stone = function(){

    this.name = 'stone'; //also divID for jQuery
    this.icon = 'img/items/weapons/range/arrows/stone.png'; //image for the 
    this.backgroundColor = '#F87431';
    this.type = "arrow";

    this.melee = false; //used for item div background color and placing into weapon slot
    this.range = false; //used for item div background color and placing into weapon slot
    this.artefact = false; //used for item div background color
    this.active = false; //determins if object needs to go into active items div
    this.arrow  = true; //determins if object needs to go into arrows div
  
    this.consumable = false;
    
    this.buyPrice = 0;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
    this.defense = 0;

    this.clicked = function(){
        inventory.handleItem(this);

    };


   this.getInfo = function(){ //will display item stats in div .itemInfoContainer
        showWeaponDetailsMessage(this);


    };



    this.mouseLeft = function(){
        $('.itemInfoContainer').hide();

    };



    this.purchase = function(item){



    };



    this.addToInventory = function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    };



    this.equip = function(){


    };


    this.unequip = function(item){



    };

    this.trade = function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    };
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?



};














