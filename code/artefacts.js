

var Ring = function(){

    this.name = 'ring'; //also divID for jQuery
    this.icon = 'img/items/artefacts/ring.png'; //image for the 
    
    this.type = 'artefact';
        
        this.melee = false;
        this.range = false;
        this.artefact = true;
        this.active = false; //determins if object needs to go into active items div
  
    this.consumable = false;
    this.equippable = true;
    this.equipped = false;
    
    this.inInactiveInventory = true;

    this.buyPrice = 50;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 0;
    this.defense = 0;

    this.remove = function(){

        //move this to another inventory first (e.g equipped)

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    };


    this.clicked = function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            
            if (this.inInactiveInventory === false){
                console.log('Item is either in active inventory or equipped');

            } else {


            console.log('not in city, will try to equip item');
            this.equip();
            }

        }
        //depending ont he class add to either active items array and change class with float left .css

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

        console.log(this.name + ' will be equipped now');
       
        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
      
        $('.itemInfoContainer').hide();
        inventory.active.push(this);
        this.inInactiveInventory = false;
        this.equipped = true;
        console.log(inventory.active);
        console.log(this.inInactiveInventory);

        characterDetailsPage.open();

        //change inInactive Inventory = false


    };


    this.unequip = function(item){



    };


    this.sell = function() {

        this.remove();
        gold.increase(this.sellPrice);



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