



var sword = {
    
    name: 'sword', //also divID for jQuery
    icon: 'img/inventory/sword.png', //image for the 
    
    type: "weapon",
    	melee: true,
    	range: false,
    	active: false, //determins if object needs to go into active items div
  
    consumable: false,
    equippable: true,
    	equipped: false,
    


    buyPrice: 50,
    get sellPrice(){
        return this.buyPrice/2
    },


    attack: 2,
    defense: 0,

    clicked: function(){

    	console.log(this.name + ' was clicked.');
    	//depending ont he class add to either active items array and change class with float left .css

    },



    purchase: function(item){



    },



    addToInventory: function() {

    	inventory.inactive.push(this);

    },



    equip: function(item){




    },


    unequip: function(item){



    },


    sell: function(item){




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
sword.sellPrice = sword.price/2;
