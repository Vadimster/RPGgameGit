
//-----------MELEE-----------------------------------

var Sword = function(array){ //argument denotes which array the item will be placed into
    this.id = gameConfig.inventory.getItemID();
    this.location = array;
    this.name = 'sword'; 
    this.icon = 'img/items/weapons/melee/sword.png';
    this.backgroundColor = '#9F000F';
    this.activeLocation = 'meleeSlot' //name of the array where item is to be placed to in order to become usable/affect stats.
    
    this.type = "melee";
        this.melee = true;
        this.range = false;
        this.active = false; //determines if object needs to go into active items div
  
    this.consumable = false;

    this.buyPrice = 50;   
    this.sellPrice = this.buyPrice/2;

    this.bonuses = {
        attack: 2,
    };



    this.clicked = function(){
        console.log('clicked');
        gameConfig.inventory.handleItem(this);
    };


   this.getInfo = function(){ //will display item stats in div .itemInfoContainer
        console.log('display item info');
        //showWeaponDetailsMessage(this);


    };



    this.mouseLeft = function(){
        console.log('mouse left');
        //$('.itemInfoContainer').hide();

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

var Stick = function(array){
    this.id = gameConfig.inventory.getItemID();
    this.location = array;
    this.name = 'pointy stick'; //also divID for jQuery
    this.icon = 'img/items/weapons/melee/stick.png'; //image for the 
    this.backgroundColor = '#9F000F';
    this.activeLocation = 'meleeSlot' //name of the array where item is to be placed to in order to become usable/affect stats.

    this.type = "melee";
        
        this.melee = true;
        this.range = false;
        this.active = false; //determins if object needs to go into active items div
  
    this.consumable = false;

    this.buyPrice = 0;   
    this.sellPrice = this.buyPrice/2;

    this.bonuses = {
        attack: 1,
    };

    this.clicked = function(){
        gameConfig.inventory.handleItem(this);

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


//-----------RANGE-----------------------------------

var Bow = function(array){
    this.location = array;
    this.id = gameConfig.inventory.getItemID();
    this.name = 'wooden bow'; //also divID for jQuery
    this.icon = 'img/items/weapons/range/woodenbow.png'; //image for the 
    this.backgroundColor = '#F87431';
    this.activeLocation = 'rangeSlot' //name of the array where item is to be placed to in order to become usable/affect stats.
    this.type = "range";
        
        this.melee = false; //used for item div background color and placing into weapon slot
        this.range = true; //used for item div background color and placing into weapon slot
        this.artefact = false; //used for item div background color
        this.active = false; //determins if object needs to go into active items div
  
    this.consumable = false;
    
    this.buyPrice = 50;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
    this.defense = 0;

    this.clicked = function(){
        gameConfig.inventory.handleItem(this);

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


//-----------ARROWS-----------------------------------

var Arrow = function(array){
    this.id = gameConfig.inventory.getItemID();
    this.name = 'metal arrow'; //also divID for jQuery
    this.icon = 'img/items/weapons/range/arrows/arrow_2.png'; //image for the 
    this.backgroundColor = '#F87431';
    this.location = array;
    this.activeLocation = 'arrows' //name of the array where item is to be placed to in order to become usable/affect stats.

    this.type='arrow'
    this.consumable = false;
    
    this.buyPrice = 5;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
    this.defense = 0;

    this.clicked = function(){
        gameConfig.inventory.handleItem(this);

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

var Stone = function(array){
    this.id = gameConfig.inventory.getItemID();
    this.location = array;
    this.name = 'stone'; //also divID for jQuery
    this.icon = 'img/items/weapons/range/arrows/stone.png'; //image for the 
    this.backgroundColor = '#F87431';
    this.activeLocation = 'arrows' //name of the array where item is to be placed to in order to become usable/affect stats.
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
        gameConfig.inventory.handleItem(this);

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
















