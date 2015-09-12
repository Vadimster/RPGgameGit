

var spellBook = {
	
    name: 'Book of Spells', //display in messages
    objectDivID: 'statsSpellBookIcon',
	img: 'img/statsIcons/spellbook.png',
	equipped: false,
	buyPrice: 5,
    emptyText: 'There are no spells known to you yet...', //text displayed when there are no spells in the book

    spells: [

    ], //spells known to player

	
    equip: function(){
        $('#spellBookEquipIndicator').css('background', '0'); //clears the background image of a div
        this.equipped = true;
	},

	unequip: function(){
	},

    purchase: function(){
        if (gameConfig.gold.checkBalance(this)) {
            gameConfig.gold.decrease(player, this.buyPrice);
            spellBook.equip();
        } else {
            gameConfig.messages.insufficientFunds(this);
        } 
    },

    iconClicked: function(){
         $("#spellBookOpen").get(0).play();
         spellBook.drawPage();
    },

    drawPage: function(){ //opens book if equipped, attempts to buy if not equipped
        console.log('number of spells known to player: ' +spellBook.spells.length);

        if (this.equipped) {

            $('#spellBookPage')
                .dialog(
                    {buttons: 
                        {'Close Book' : function(){
                            $(this).dialog('close');
                            $("#bookClosed").get(0).play();



                            },
                    
                         'Learn a spell' : function(){
                            $(this).dialog('close');
                            spellBook.learnSpellPageClicked();


                            }
                    }, //buttons added

                draggable: false,
                resizable: false,
                modal: true,
                width: 1000,
                height: 630, 
                closeOnEscape: true,
                dialogClass: "no-close"
                //position: ["right", "center"]
                }
            ); //creates the dialog
            
                if (spellBook.spells.length > 0) {
                    console.log('player knows some spells will loop through them now');
                    $('#spellbook-spell-all-spells-container').empty(); // originally emptied spellbook-dialog-background
                    for (i = 0; i < spellBook.spells.length; i++) {
                        var container = $("<div class='spellbook-spell-container'></div>");
                        var spellname = $("<div class='spellbook-spell-name'></div>");
                        var spelldescription = $("<div class='spellbook-spell-description'></div>");
                        var spellManaCost = $("<div class='spellbook-spell-manaCost'></div>");
                        var spellRange = $("<div class='spellbook-spell-range'></div>");
                        var spellDamage = $("<div class='spellbook-spell-damage'></div>");
                        var spellDuration = $("<div class='spellbook-spell-duration'></div>");
                        // div.css({"background":"url('"+spellBook.img+"')"});

                        container.appendTo('#spellbook-spell-all-spells-container');
                        
                        spellname.appendTo(container);
                        spellname.html(spellBook.spells[i].name);

                        spellManaCost.appendTo(container);
                        spellManaCost.html(spellBook.spells[i].manaCost);


                        spellRange.appendTo(container);
                        spellRange.html(spellBook.spells[i].range);

                        spellDamage.appendTo(container);
                        spellDamage.html(spellBook.spells[i].baseDamage);


                        spellDuration.appendTo(container);
                        spellDuration.html(spellBook.spells[i].duration);


                        spelldescription.appendTo(container);
                        spelldescription.html(spellBook.spells[i].description);
                    }
                } else { //if player does not have any spells known to him
                    $('#spellbook-spell-all-spells-container').empty();
                    var container = $("<div class='spellbook-spell-container'></div>");
                        container.appendTo('#spellbook-spell-all-spells-container'); 
                    var message = $("<div class='spellbook-empty-message'></div>");
                        message.appendTo(container);
                        message.html(spellBook.emptyText);
                }
        
        } else { //spellbook not equipped
            $("#spellbook-buy-message").text('All the spells known to you are kept in the ' +spellBook.name+  '. You do not seem to have this book, would you like to buy it for ' +spellBook.buyPrice+' gold coins?'); //calling a function which will generate event title using the argument   
            $('#spellBookBuyPage')
                .dialog(
                    {buttons: 
                        {'Purchase' : function(){
                            spellBook.purchase(); 
                            $(this).dialog('close');
                            },
                         'Not now' : function(){
                            $(this).dialog('close');
                            }
                    }, //buttons added
                draggable: false,
                resizable: false,
                modal: true,
                width: 400,
                height: 400, 
                closeOnEscape: false,
                dialogClass: "no-close"
                }
            ); //creates the dialog
        }
    },


    giveRandomSpell: function(){
        var availableSpells = [];
        
        for (i=0; i<spells.length; i++){
            if (spells[i].level <= player.stats.level.counter){ //check for qualifying spells
                availableSpells.push(spells[i]);
            }       
        }
        console.log(availableSpells);
        
        if (availableSpells.length > 0){ //there is at least one qualifying spell found
            var randomSpell = availableSpells[Math.floor(Math.random()*availableSpells.length)];
            console.log(randomSpell.name);

            var n = 0;
            for (j=0; j<spellBook.spells.length; j++){

                if (spellBook.spells[j].name === randomSpell.name){
                    n++;
                } else {
                    //do nothing
                }
            }

            if (n > 0) {
                console.log('player knows ' +randomSpell.name);                
            } else {
                console.log('player does not know ' +randomSpell.name);
                spellBook.spells.push(randomSpell);
                console.log('Random spell is: ' + randomSpell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
            }
        }  else {
            console.log('Player does not qualify for any spells');
        }   
    },

    learnSpellPageClicked: function(){
            $("#spellBookOpen").get(0).play();
            spellBook.drawLearnSpellPage();
    },


    drawLearnSpellPage: function() {
        $('#spellPurchasePage')
                    .dialog(
                        {buttons: 
                            {'Close' : function(){
                                $(this).dialog('close');
                                spellBook.drawPage(); 


                                }
                        }, //buttons added

                    draggable: false,
                    resizable: false,
                    modal: true,
                    width: 1100,
                    height: 630, 
                    closeOnEscape: false,
                    dialogClass: "no-close"
                    //position: ["right", "center"]
                    }
                ); //creates the dialog

        $('#spellbook-purchasespell-all-spells-container').empty(); // originally emptied spellbook-dialog-background


                    for (i = 0; i < allSpells.length; i++) {

                        var n = spellBook.spells.indexOf(allSpells[i]); //checks if a spell is already known to player in order to not to display it in all spells list on purchase page

                            if (n < 0) { //if spell is not known
                             
                                var container = $("<div class='purchasespell-spell-container'></div>");
                                var spellname = $("<div class='purchasespell-spell-name'></div>");
                                var spellprice = $("<div class='purchasespell-spell-price'></div>");
                                var spelldescription = $("<div class='purchasespell-spell-description'></div>");
                                var spellManaCost = $("<div class='purchasespell-spell-manaCost'></div>");
                                var spellRange = $("<div class='purchasespell-spell-range'></div>");
                                var spellDamage = $("<div class='purchasespell-spell-damage'></div>");
                                var spellDuration = $("<div class='purchasespell-spell-duration'></div>");

                                
                                container.prop('title', 'Click on this spell to learn it');
                                container.appendTo('#spellbook-purchasespell-all-spells-container');
                                container.get(0).obj = allSpells[i]; //link DOM element to an object
                                container.click(function(){
                                    this.obj.learn();

                                }); 

                                spellname.appendTo(container);
                                spellname.html(allSpells[i].name);                                                         

                                spellprice.appendTo(container);
                                spellprice.html(allSpells[i].price);

                                spellManaCost.appendTo(container);
                                spellManaCost.html(allSpells[i].manaCost);

                                spellRange.appendTo(container);
                                spellRange.html(allSpells[i].range);

                                spellDamage.appendTo(container);
                                spellDamage.html(allSpells[i].baseDamage);

                                spellDuration.appendTo(container);
                                spellDuration.html(allSpells[i].duration);

                                spelldescription.appendTo(container);
                                spelldescription.html(allSpells[i].description);


                            } else {

                                console.log(allSpells[i].name + ' is already known to player');

                            }

                    }

    }

};
