

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
        if (gameConfig.gold.checkBalance(this.buyPrice)) {
            gameConfig.gold.decrease(player, this.buyPrice);
            spellBook.equip();
        } else {
            gameConfig.messages.insufficientFunds(this);
        } 
    },

    chooseBonusSpell: function(){ //choose a free spell
        $("#chant1").get(0).play();

        $('#getBonusItemPage-image').css("background-image", "url(img/dialogs/spellbook.png)"); 
        $("#getBonusItemPage-header").text('Time to learn a spell!'); 
        $("#getBonusItemPage-message").text('You have reached level ' + player.stats.level.counter + ' . You now can choose any spell available to you for free.'); 

        $('#getBonusItemPage')
            .dialog(
                {buttons: 
                    {
                     'Choose a spell' :function(){
                        $(this).dialog('close');
                        spellBook.drawLearnSpellPage(1);
                    },
                    'Skip bonus' : function(){
                        $(this).dialog('close');
                        gameConfig.level.startLevelSkillDialog();
                    }
                },
            draggable: false,
            resizable: false,
            modal: true,
            width: 550,
            height: 530,
            closeOnEscape: false,
            dialogClass: "no-close"
            //position: ["right", "center"]
            }
        ); //creates the dialog

    },



    getBonusSpell: function(){ //get a random spell
        $("#chant1").get(0).play();

        var spellToGive = spellBook.giveRandomSpell();
        var name = spellToGive.name;
        var known = spellToGive.known;
        console.log(name);
        console.log(known);

        if (known) {
            $("#getBonusItemPage-message").text('It looks like you already know the ' +name+ ' spell, you have not learnt anything new this time.'); 

        } else if (known != true) {
            $("#getBonusItemPage-message").text('A new spell - ' +name+ ' - was added to your Spell Book.'); 
        
        } else {
            $("#getBonusItemPage-message").text('There are no spells available for learning for you this time.'); 
        
        }
        $("#getBonusItemPage-header").text('Time to learn a spell!'); 
        $('#getBonusItemPage-image').css("background-image", "url(img/dialogs/spellbook.png)"); 

        $('#getBonusItemPage')
            .dialog(
                {buttons: 
                    {
                     'Right' :function(){
                        $(this).dialog('close');
                        gameConfig.level.startLevelSkillDialog();
                    },
                },
            draggable: false,
            resizable: false,
            modal: true,
            width: 550,
            height: 530,
            closeOnEscape: false,
            dialogClass: "no-close"
            //position: ["right", "center"]
            }
        ); //creates the dialog


    },


    getAsBonus: function(){
        console.log('spellbook.receiveAsBonus() launched');
        spellBook.equip();
        $("#chant1").get(0).play();
        $("#getBonusItemPage-header").text('You get ' +spellBook.name+  '!'); 
        $('#getBonusItemPage-image').css("background-image", "url(img/dialogs/spellbook.png)");  
        $("#getBonusItemPage-message").text('You have reached level ' + player.stats.level.counter + ' and receive it as a bonus.'); //calling a function which will generate event title using the argument   

        $('#getBonusItemPage')
            .dialog(
                {buttons: 
                    {
                     'Great!' :function(){
                        $(this).dialog('close');
                        gameConfig.level.startLevelSkillDialog();
                    },
                },
            draggable: false,
            resizable: false,
            modal: true,
            width: 550,
            height: 530,
            closeOnEscape: false,
            dialogClass: "no-close"
            //position: ["right", "center"]
            }
        ); //creates the dialog
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
            if (spells[i].level <= gameConfig.bonus.spellLevel){ //check for qualifying spells
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

            if (n > 0) { //chosen spell is already known to player
                console.log('player knows ' +randomSpell.name);
                var name = randomSpell.name;
                var known = 1;
                
                return {
                    name: name,
                    known: known
                };


            } else { //chosen spell is not known to player
                console.log('player does not know ' +randomSpell.name);
                spellBook.spells.push(randomSpell);
                console.log('Random spell is: ' + randomSpell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');
                spellBook.randomSpellName = randomSpell.name;
                var name = randomSpell.name;
                var known = 0;

                return {
                    name: name,
                    known: known
                };
            }
        }  else {
            console.log('Player currently does not qualify for any spells'); 
            return false;
        }   
    },

    learnSpellPageClicked: function(){
            $("#spellBookOpen").get(0).play();
            spellBook.drawLearnSpellPage(0);
    },


    drawLearnSpellPage: function(spellsAreFree) {

        $('#spellPurchasePage')
            .dialog(
                {buttons: 
                    {'Close' : function(){
                        $(this).dialog('close');
                        $("#pageTurn").get(0).play();
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


        this.myIndexOf = function(object){ //checks if spell is known to player already. My custom indexOf function because I am comparing object liters directly, and not references to them.
            for (i=0; i < spellBook.spells.length; i++){
                if (spellBook.spells[i].name === object.name){
                    return i;
                } 
            }
            return -1;
        }

        for (j=0; j<spells.length; j++){ //looping through all spealls to see if they are known to player
        
            var n = this.myIndexOf(spells[j]);

            if (n < 0 && spells[j].level <= gameConfig.bonus.spellLevel) { // spell is not known and player;s level sufficient to learn it 
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
                container.get(0).obj = spells[j]; //link DOM element to an object
                
                if(spellsAreFree){
                    container.click(function(){
                        this.obj.learn(1);
                    });                 
                } else {
                    container.click(function(){
                        this.obj.learn(0);
                    });                 
                }




                spellname.appendTo(container);
                spellname.html(spells[j].name);                                                         

                spellprice.appendTo(container);
                spellprice.html(spells[j].price);

                spellManaCost.appendTo(container);
                spellManaCost.html(spells[j].manaCost);

                spellRange.appendTo(container);
                spellRange.html(spells[j].range);

                spellDamage.appendTo(container);
                spellDamage.html(spells[j].baseDamage);

                spellDuration.appendTo(container);
                spellDuration.html(spells[j].duration);

                spelldescription.appendTo(container);
                spelldescription.html(spells[j].description);

            } else {
                console.log(spells[j].name + ' is either already known to player or not available yet due to its high level');

            }            


        }

    }

};
