var Shield = function(array){
    this.location = array;
    this.id = gameConfig.inventory.getItemID();
    this.name = 'shield'; //also divID for jQuery
    this.icon = 'img/items/shields/shield_1.png'; //image for the 
    this.backgroundColor = '#3366CC';
    
    this.type = "shield";
        
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




