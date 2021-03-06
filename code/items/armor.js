var Breastplate = function(array){
    this.location = array;
    this.id = gameConfig.inventory.getItemID();
    this.name = 'breastplate'; //also divID for jQuery
    this.icon = 'img/items/armor/breastplates/breastplate_1.png'; //image for the 
    this.backgroundColor = '#009933';
    this.activeLocation = 'breastplateSlot' //name of the array where item is to be placed to in order to become usable/affect stats.

    this.type = "armor";
        
        this.melee = false;
        this.range = false;
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




var Helmet = function(array){
    this.id = gameConfig.inventory.getItemID();
    this.location = array;
    this.name = 'helmet'; //also divID for jQuery
    this.icon = 'img/items/armor/helmets/helmet_1.png'; //image for the 
    this.backgroundColor = '#009933';
    this.activeLocation = 'helmetSlot' //name of the array where item is to be placed to in order to become usable/affect stats.

    this.type = "armor";
        
        this.melee = false;
        this.range = false;
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