
/* PLAYER CLASSES */

var shaman = {
  
  name: "Shaman",
  id: 'shaman',
  imgName: "shaman",
  img: 'img/characterselectorpage/avatars/shaman.png',
  description: 'Highly spiritual, shamans speak to nature and communicate with ghosts. While not particularly strong in combat, they can summon supernatural forces to assist them.',
  bonus: ['* Start the game with a Book of Spells and a random spell',
          '* Start the game with an extra ink point',
          '* Choose a free spell every 3 levels',
          '* Spells cost 20% less mana to cast'
          ],

  bonusGold: 0,
    addBonusGold: function(){
      if (shaman.bonusGold) {
        gameConfig.gold.increase(player, this.bonusGold)      
      
      } else {
        console.log('character class does not have bonus gold at start');
      }
    },

  bonusSave: 1,
    addBonusSave: function(){
      if (shaman.bonusSave) {
        gameConfig.save.increase(this.bonusSave)      
      
      } else {
        console.log('character class does not have bonus save at start');
      }
    },


  bonusBook: true,
    addBonusBook: function(){
      if (shaman.bonusBook) {
        spellBook.equip();
        spellBook.giveRandomSpell();
        console.log('Player gets a free spellbook and a random spell');
      } else {
        console.log('Player does not get a free spellbook');
      }
    },
  getsBonusBookOnLevel: 0,
  getFreeSpellEveryNLevel: 3,
  getFreeRndSpellEveryNLevel: 0,

  bonusItems: false,
      addBonusItems: function(){
        if (shaman.bonusItems) {
          console.log('Player gets some bonus item - TBD');
        } else {
          console.log('Player does not get bonus item');
        }

      }
};


var scribe = {

  name: "Scribe",
  id: 'scribe',
  imgName: "scribe",
  img: 'img/characterselectorpage/avatars/scribe.png', 
  description: 'People of science and books, scribes belong more to a library than a battlefield. But do not be mislead, for knowledge is power and these lads will not hesitate in taking their advantage against less scholared enemies.',
  bonus: ['* Start the game with a Book of Spells',
          '* Start the game with an extra ink point',
          '* Get a random free spell every 3 levels',
          '* Spells cost 20% less experience to learn',
          '* Start game with 2 gold coins'
          ],
  
  bonusGold: 2,
    addBonusGold: function(){
      if (scribe.bonusGold) {
        gameConfig.gold.increase(player, this.bonusGold)      
      } else {
        console.log('character class does not have bonus gold at start');
      }
    },

  
  bonusSave: 1,
    addBonusSave: function(){
      if (scribe.bonusSave) {
        gameConfig.save.increase(this.bonusSave)      
      
      } else {
        console.log('character class does not have bonus save at start');
      }
    },


  bonusBook: true,
    addBonusBook: function(){
      if (scribe.bonusBook) {
        spellBook.equip();

        console.log('Player gets a free spellbook');
      } else {
        console.log('Player does not get a free spellbook');
      }
    },
  getsBonusBookOnLevel: 0,
  getFreeSpellEveryNLevel: 0,
  getFreeRndSpellEveryNLevel: 3,

  bonusItems: false,
      addBonusItems: function(){
        if (scribe.bonusItems) {
          console.log('Player gets some bonus item - TBD');
        } else {
          console.log('Player does not get bonus item');
        }

      }
};


var hunter = {

  name: "Hunter",
  id: 'hunter',
  imgName: "hunter",
  img: 'img/characterselectorpage/avatars/hunter.jpg',
  description: 'Many years spent hunting in woods and meadows taught to be patient, attentive and lightning-quick. You will hardly find anyone who is better with a bow and arrows than this folk.',
  bonus: ['* Get the Book of Spells on level 3',
          '* Bonus to camouflage',
          '* Accuracy bonus for ranged weapons'
          ],
  
  bonusGold: 5,
    addBonusGold: function(){
      if (hunter.bonusGold) {
        gameConfig.gold.increase(player, this.bonusGold)      
      } else {
        console.log('character class does not have bonus gold at start');
      }
    },


  bonusSave: 0,
    addBonusSave: function(){
      if (hunter.bonusSave) {
        gameConfig.save.increase(this.bonusSave)      
      
      } else {
        console.log('character class does not have bonus save at start');
      }
    },


  bonusBook: false,
    addBonusBook: function(){
      if (hunter.bonusBook) {
        console.log('Player gets a free spellbook');
      } else {
        console.log('Player does not get a free spellbook');
      }
    },
  getsBonusBookOnLevel: 3,
  getFreeSpellEveryNLevel: 0,
  getFreeRndSpellEveryNLevel: 0,

  bonusItems: false,
      addBonusItems: function(){
        if (hunter.bonusItems) {
          console.log('Player gets some bonus item - TBD');
        } else {
          console.log('Player does not get bonus item');
        }

      }
};


var warrior = {

  name: "Warrior",
  id: 'warrior',
  imgName: "warrior",
  img: 'img/characterselectorpage/avatars/warrior.png',
  description: 'Born and trained with only one purpose - to fight and be victorious - warriors spread terror on a battlefield. Crude in their manners but extremely efficient in melee they make an unstoppable force.',
  bonus: ['* Get the Book of Spells on level 5',
          '* Start the game with a sword in inventory',
          '* Start the game with one ink point less'
          ],

  bonusGold: 0,
    addBonusGold: function(){
      if (warrior.bonusGold) {
        gameConfig.gold.increase(player, this.bonusGold)      
      } else {
        console.log('character class does not have bonus gold at start');
      }
    },


  bonusSave: -1,
    addBonusSave: function(){
      if (warrior.bonusSave) {
        gameConfig.save.increase(this.bonusSave)      
      
      } else {
        console.log('character class does not have bonus save at start');
      }
    },


  bonusBook: false,
    addBonusBook: function(){
      if (warrior.bonusBook) {
        console.log('Player gets a free spellbook');
      } else {
        console.log('Player does not get a free spellbook');
      }
    },
  getsBonusBookOnLevel: 5,
  getFreeSpellEveryNLevel: 0,
  getFreeRndSpellEveryNLevel: 0,

  bonusItems: true,
    addBonusItems: function(){
      if (warrior.bonusItems) {       
        //inventory.inactive.push(new Sword);

      } else {
        console.log('Player does not get bonus item');
      }

    }
};


var characters = {

  choices: [shaman, scribe, hunter, warrior],
  indekz: 0,

  newCharacterSelectorDialog: function(){

    this.selectRight = function(){
      $("#pageTurn").get(0).play();
      characters.indekz++;
      if (typeof(characters.choices[characters.indekz])=='undefined') {
          characters.indekz = 0;         
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);

          $('#character-selector-Page-bonus-container').empty();
           
          for (i = 0; i < characters.choices[characters.indekz].bonus.length; i++) {

            var div =  $("<div class='character-selector-Page-bonus-description'></div>");
            div.appendTo('#character-selector-Page-bonus-container');
            div.html(characters.choices[characters.indekz].bonus[i]);
          }

      } else {
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);
          $('#character-selector-Page-bonus-container').empty();
          for (i = 0; i < characters.choices[characters.indekz].bonus.length; i++) {
            var div =  $("<div class='character-selector-Page-bonus-description'></div>");
            div.appendTo('#character-selector-Page-bonus-container');
            div.html(characters.choices[characters.indekz].bonus[i]);
          }
      }
    } 

    this.selectLeft = function(){
      $("#pageTurn").get(0).play();
      characters.indekz--;
      if (typeof(characters.choices[characters.indekz])=='undefined') { 
          characters.indekz = characters.choices.length - 1;  
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);
          $('#character-selector-Page-bonus-container').empty();
          for (i = 0; i < characters.choices[characters.indekz].bonus.length; i++) {
            var div =  $("<div class='character-selector-Page-bonus-description'></div>");
            div.appendTo('#character-selector-Page-bonus-container');
            div.html(characters.choices[characters.indekz].bonus[i]);
          }

      } else {
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);
          $('#character-selector-Page-bonus-container').empty();
          for (i = 0; i < characters.choices[characters.indekz].bonus.length; i++) {
            var div =  $("<div class='character-selector-Page-bonus-description'></div>");
            div.appendTo('#character-selector-Page-bonus-container');
            div.html(characters.choices[characters.indekz].bonus[i]);
          }
      }
    }

    document.getElementById("character-selector-Page-left-arrow").addEventListener("click", characters.selectLeft, false);
    document.getElementById("character-selector-Page-right-arrow").addEventListener("click", characters.selectRight, false);

    $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
    $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
    $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);

    for (i = 0; i < characters.choices[characters.indekz].bonus.length; i++) {
      var div =  $("<div class='character-selector-Page-bonus-description'></div>");
      div.appendTo('#character-selector-Page-bonus-container');
      div.html(characters.choices[characters.indekz].bonus[i]);
    }
     
    $('#character-selector-Page')
          .dialog(
              {buttons: 
                  {'Start!' : function(){
                      $(this).dialog('close');
                        $("#bookClosed").get(0).play();
                        map.prepare();
                        player.update(characters.choices[characters.indekz]);
                        player.stats.render();
                        map.render();
                        //gameConfig.createMap();                       
                      }
                  },
          draggable: false,
          resizable: false,
          modal: true,
          width: 800,
          height: 650, 
          closeOnEscape: false,
          dialogClass: "no-close"
          //position: ["right", "center"]
          }
    ); //creates the dialog page
    return true;
  },

};

