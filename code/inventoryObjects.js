

//document.getElementById('statsSpellBookIcon').onclick = testFunction();

var spellBook = {
	
    objectDivID: 'statsSpellBookIcon',
	img: 'img/statsIcons/spellbook.png',
	equipped: false,
	price: 1000,
    emptyText: 'There are no spells known to you yet...', //text displayed when there are no spells in the book

	equip: function(){


        $('<div id=statsSpellBookIcon/>').appendTo($('#statsSpellBook'));
        statsSpellBookIcon.addEventListener('click', spellBook.open , false);
		this.equipped = true;
	},

	unequip: function(){
	},


    open: function(){


        $('#spellBookPage')
            .dialog(
                {buttons: 
                    {'Close Book' : function(){
                        $(this).dialog('close'); 


                        },
                
                     'Learn a spell' : function(){
                        console.log('Player chose to learn a spell');
                        $(this).dialog('close'); 
                        }
                }, //buttons added

            draggable: false,
            resizable: false,
            modal: true,
            width: 600,
            height: 630, 
            closeOnEscape: false,
            dialogClass: "no-close"
            //position: ["right", "center"]
            }
        ); //creates the dialog
    

        if (spellBook.spells.length > 0) {

            $('#spellbook-dialog-background').empty();


            for (i = 0; i < spellBook.spells.length; i++) {

                        var container = $("<div class='spellbook-spell-container'></div>");
                        var spellname = $("<div class='spellbook-spell-name'></div>");
                        var spelldescription = $("<div class='spellbook-spell-description'></div>");
                        var spellManaCost = $("<div class='spellbook-spell-manaCost'></div>");
                        var spellRange = $("<div class='spellbook-spell-range'></div>");
                        var spellDuration = $("<div class='spellbook-spell-duration'></div>");
                        // div.css({"background":"url('"+spellBook.img+"')"});

                        container.appendTo('#spellbook-dialog-background');
                        
                        spellname.appendTo(container);
                        spellname.html(spellBook.spells[i].name);

                        spellManaCost.appendTo(container);
                        spellManaCost.html(spellBook.spells[i].manaCost);


                        spellRange.appendTo(container);
                        spellRange.html(spellBook.spells[i].range);

                        spellDuration.appendTo(container);
                        spellDuration.html(spellBook.spells[i].duration);


                        spelldescription.appendTo(container);
                        spelldescription.html(spellBook.spells[i].description);
            }
        } else {

            $('#spellbook-dialog-background').empty();

            var container = $("<div class='spellbook-spell-container'></div>");
            var message = $("<div class='spellbook-empty-message'></div>");
            
            container.appendTo('#spellbook-dialog-background');
            message.appendTo(container);
            message.html(spellBook.emptyText);

        }

    },


    giveRandomSpell: function(){

        if (player.level > 10) {

            var spell = lvl4Spells[Math.floor(Math.random()*lvl4Spells.length)];

                var n = spellBook.spells.indexOf(spell); //code below checks if spell is already known to player
                    if (n < 0){
                        spellBook.spells.push(spell);
                        console.log('Random spell is: ' + spell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
                    } else {
                        console.log('Player already has this spell: ' + spell.name);
                    }
                
        } else if (player.level > 7) {

            var spell = lvl3Spells[Math.floor(Math.random()*lvl3Spells.length)];
                
                var n = spellBook.spells.indexOf(spell); //code below checks if spell is already known to player
                    if (n < 0){
                        spellBook.spells.push(spell);
                        console.log('Random spell is: ' + spell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
                    } else {
                        console.log('Player already has this spell: ' + spell.name);
                    }


        } else if (player.level > 3) {

            var spell = lvl2Spells[Math.floor(Math.random()*lvl2Spells.length)];

                var n = spellBook.spells.indexOf(spell); //code below checks if spell is already known to player
                    if (n < 0){
                        spellBook.spells.push(spell);
                        console.log('Random spell is: ' + spell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
                    } else {
                        console.log('Player already has this spell: ' + spell.name);
                    }

        } else if (player.level >= 0) {

            var spell = lvl1Spells[Math.floor(Math.random()*lvl1Spells.length)];

                var n = spellBook.spells.indexOf(spell); //code below checks if spell is already known to player
                    if (n < 0){
                        spellBook.spells.push(spell);
                        console.log('Random spell is: ' + spell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
                    } else {
                        console.log('Player already has this spell: ' + spell.name);
                    }

        }


    },



	spells: [] //player's spells in SpellBook

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
