
/* PLAYER CLASSES */

var shaman = {
  
  name: "Shaman",
  img: 'img/characterselectorpage/avatars/shaman.png',
  description: 'Highly spiritual, shamans speak to nature and communicate with ghosts. While not particularly strong in combat, they can summon supernatural forces to assist them.',
  bonus: ['* Start the game with a Book of Spells and a random spell',
          '* Choose a free spell every 3 levels',
          '* Spells cost 20% less mana to cast'
          ],

  bonusGold: 0,
    addBonusGold: function(){
      if (shaman.bonusGold) {
        gold.increase(shaman.bonusGold);
      } else {
        console.log('character class does not have bonus gold at start');
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
  img: 'img/characterselectorpage/avatars/scribe.png', 
  description: 'People of science and books, scribes belong more to a library than a battlefield. But do not be mislead, for knowledge is power and these lads will not hesitate in taking their advantage against less scholared enemies.',
  bonus: ['* Start the game with a Book of Spells',
          '* Get a random free spell every 3 levels',
          '* Spells cost 20% less experience to learn',
          '* Start game with 2 gold coins'
          ],
  
  bonusGold: 2,
    addBonusGold: function(){
      if (scribe.bonusGold) {
        gold.increase(scribe.bonusGold);
      } else {
        console.log('character class does not have bonus gold at start');
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
  img: 'img/characterselectorpage/avatars/hunter.jpg',
  description: 'Many years spent hunting in woods and meadows taught to be patient, attentive and lightning-quick. You will hardly find anyone who is better with a bow and arrows than this folk.',
  bonus: ['* Get the Book of Spells on level 3',
          '* Bonus to camouflage',
          '* Accuracy bonus for ranged weapons'
          ],
  
  bonusGold: 10,
    addBonusGold: function(){
      if (hunter.bonusGold) {
        gold.increase(hunter.bonusGold);
      } else {
        console.log('character class does not have bonus gold at start');
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
  img: 'img/characterselectorpage/avatars/warrior.png',
  description: 'Born and trained with only one purpose - to fight and be victorious - warriors spread terror on a battlefield. Crude in their manners but extremely efficient in melee they make an unstoppable force.',
  bonus: ['* Get the Book of Spells on level 5',
          '* Start game with a sword in inventory'
          ],

  bonusGold: 0,
    addBonusGold: function(){
      if (warrior.bonusGold) {
        gold.increase(warrior.bonusGold);
      } else {
        console.log('character class does not have bonus gold at start');
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

    bonusItems: true,
      addBonusItems: function(){
        if (warrior.bonusItems) {
          sword.addToInventory();
        } else {
          console.log('Player does not get bonus item');
        }

      }


};



var characters = {

  choices: [shaman, scribe, hunter, warrior],
  indekz: 0,

  page: function(){

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
                        Map.initiate();
                        player.update(characters.choices[characters.indekz]); //adjusts player in accordance with selected class
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
  },

  selectRight: function(){
     
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
  },

  selectLeft: function(){
    
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

};

