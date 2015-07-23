
var Sword = function(){

    this.name = 'sword'; //also divID for jQuery
    this.icon = 'img/items/weapons/melee/sword.png'; //image for the 
    
    this.type = "weapon";
        
        this.melee = true;
        this.range = false;
        this.active = false; //determins if object needs to go into active items div
  
    this.consumable = false;
    this.equippable = true;
    this.equipped = false;
    
    this.inInactiveInventory = true; 

    this.buyPrice = 50;
    
    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
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
            console.log('not in city, will try to equip item');
            this.equip();
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
        //need to hide  #itemInfoContainer


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



var Knife = function(){
    
    this.name = 'knife'; //also divID for jQuery
    this.icon = 'img/items/weapons/melee/knife.png'; //image for the 
    
    this.type = "weapon";
        this.melee = true;
        this.range = false;
        this.active = false; //determins if object needs to go into active items div
  
    this.consumable = false;
    this.equippable = true;
        this.equipped = false;
    
    this.inInactiveInventory = true;

    this.buyPrice = 20;

    this.sellPrice = this.buyPrice/2;

    this.attack = 1;
    this.defense = 0;

    this.remove = function(){

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
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    };


    this.getInfo = function(){
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



    this.equip = function(item){

        //need to hide  #itemInfoContainer


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
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};



var axe = {
    
    name: 'axe', //also divID for jQuery
    icon: 'img/items/weapons/melee/axe.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};

var dagger = {
    
    name: 'dagger', //also divID for jQuery
    icon: 'img/items/weapons/melee/dagger.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};


var doubleSidedAxe = {
    
    name: 'double sided axe', //also divID for jQuery
    icon: 'img/items/weapons/melee/doublesidedaxe.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};


var halberd = {
    
    name: 'halberd', //also divID for jQuery
    icon: 'img/items/weapons/melee/halberd.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};


var saber = {
    
    name: 'saber', //also divID for jQuery
    icon: 'img/items/weapons/melee/saber.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};


var battleAxe = {
    
    name: 'battle axe', //also divID for jQuery
    icon: 'img/items/weapons/melee/battleaxe.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};



var falx = {
    
    name: 'falx', //also divID for jQuery
    icon: 'img/items/weapons/melee/falx.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};


var bladeSpear = {
    
    name: 'blade spear', //also divID for jQuery
    icon: 'img/items/weapons/melee/bladespear.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};

var spear = {
    
    name: 'spear', //also divID for jQuery
    icon: 'img/items/weapons/melee/spear.png', //image for the 
    
    type: "weapon",
        melee: true,
        range: false,
        active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
        equipped: false,
    
    inInactiveInventory: false,

    buyPrice: 20,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 1,
    defense: 0,

    remove: function(){

        var a = inventory.inactive.indexOf(this); //get index of the item in question in inactive inventory
        inventory.inactive.splice(a,1);
        city.createPage();
        $('.itemInfoContainer').hide();

    },


    clicked: function(){

        if(city.visited) {

            if (this.inInactiveInventory) {
                this.sell();
            }
        } else {
            console.log('not in city, will try to equip item');
        }
        //depending ont he class add to either active items array and change class with float left .css

    },


    getInfo: function(){
        showWeaponDetailsMessage(this);


    },



    mouseLeft: function(){
        $('.itemInfoContainer').hide();

    },



    purchase: function(item){



    },



    addToInventory: function() {

        inventory.inactive.push(this);
        this.inInactiveInventory = true;


    },



    equip: function(item){

        //need to hide  #itemInfoContainer


    },


    unequip: function(item){



    },


    sell: function() {

    
    this.remove();
    gold.increase(this.sellPrice);



    },


    trade: function(){ 
        if (this.equipped) {
            if (confirm("You already have the " + this.objectName + ". Do you want to sell it for " + this.sellPrice + " gold?")){
                tradeItem(this, "sell");
            }
                } else { // INTRODUCE CHECK IF ALREaDY HAS A WEAPON OF THIS TYPE => CANNOT BUY 
                    alert("Not equipped, will attempt to buy now");
                    tradeItem(this, "buy");
                }
    }
        
    //may be develop a stats update method for this object instead of using the playerStatsUpdateItem function?

};
