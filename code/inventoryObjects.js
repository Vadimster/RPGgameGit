

var spellBook = {
	
    objectDivID: 'statsSpellBookIcon',
	img: 'img/statsIcons/spellbook.png',
	equipped: false,
	price: 1000,

	equip: function(){
		$('#' + this.objectDivID).css({"background-image":"url('"+this.img+"')"});
		this.equipped = true;
	},

	unequip: function(){
	},

	spells: []

};




var sword = {
    objectName: "sword", //also divID for jQuery
    type: "weapon",
    equipped: false,
    price: 50,
    attack: 2,
    defense: 0,
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
