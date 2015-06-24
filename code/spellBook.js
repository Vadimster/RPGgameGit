

//document.getElementById('statsSpellBookIcon').onclick = testFunction();

var spellBook = {
	
    name: 'Book of Spells', //display in messages
    objectDivID: 'statsSpellBookIcon',
	img: 'img/statsIcons/spellbook.png',
	equipped: false,
	buyPrice: 5,
    emptyText: 'There are no spells known to you yet...', //text displayed when there are no spells in the book

    spells: [], //spells known to player

	
    equip: function(){

        $('#spellBookEquipIndicator').css('background', '0'); //clears the background image of a div
        this.equipped = true;
	},


	unequip: function(){
	},


    purchase: function(){

            if (gold.checkBalance(this)) {

                gold.decrease(this.buyPrice);
                spellBook.equip();

            } else {

                //alert('insufficient funds!');
                insufficientFundsMessage(this);
            } 
    },


    iconClicked: function(){

         $("#spellBookOpen").get(0).play();
         spellBook.open();


    },

    open: function(){ //opens book if equipped, attempts to buy if not equipped

       

        console.log('number of spells known to player: ' +spellBook.spells.length);


        if (this.equipped) {

            $("#pageTurn").get(0).play();


                $('#spellBookPage')
                    .dialog(
                        {buttons: 
                            {'Close Book' : function(){
                                $(this).dialog('close');
                                $("#spellBookClosed").get(0).play();



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
                    var message = $("<div class='spellbook-empty-message'></div>");
                    
                    container.appendTo('#spellbook-spell-all-spells-container'); 
                    message.appendTo(container);
                    message.html(spellBook.emptyText);

                }
        
        } else {

                $("#spellbook-buy-message").text('All the spells known to you are kept in the ' +spellBook.name+  '. You do not seem to have such item, would you like to buy it for ' +spellBook.buyPrice+' coins?'); //calling a function which will generate event title using the argument   


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
                    //position: ["right", "center"]
                    }
                ); //creates the dialog
            
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

    learnSpellPageClicked: function(){
            
            $("#spellBookOpen").get(0).play();
            spellBook.openLearnSpellPage();



    },


    openLearnSpellPage: function() {
 

        $('#spellPurchasePage')
                    .dialog(
                        {buttons: 
                            {'Close' : function(){
                                $(this).dialog('close');
                                spellBook.open(); 


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

                                container.appendTo('#spellbook-purchasespell-all-spells-container');
                                
                                spellname.appendTo(container);
                                spellname.html(allSpells[i].name);
                                spellname.get(0).obj = allSpells[i]; //link DOM elemtn to an object
                                spellname.click(function(){
                                    this.obj.learn();

                                }); 

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
