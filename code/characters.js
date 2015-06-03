
/* PLAYER CLASSES */

var shaman = {
  
  name: "Shaman",
  img: 'img/characterselectorpage/avatars/shaman.png',
  description: 'Highly spiritual, shamans speak to nature and communicate with ghosts. While not particularly strong in combat, they can summon supernatural forces to assist them.',
  bonus1: 'Starts a game with a Book of Spells and one random spell',
  bonus2: 'Can shoose a free spell every 5 levels',
  bonus3: 'Spells cost 20% less mana to cast'

};


var scribe = {

  name: "Scribe",
  img: 'img/characterselectorpage/avatars/scribe.png', 
  description: 'People of science and books, scribes belong more to a library than a battlefield. But do not be mislead, for knowledge is power and these lads will not hesitate in taking their advantage against less scholared enemies.'
};


var hunter = {

  name: "Hunter",
  img: 'img/characterselectorpage/avatars/hunter.jpg',
  description: 'Many years spent hunting in woods and meadows taught to be patient, attentive and lightning-quick. You will hardly find anyone who is better with a bow and arrows than this folk.'
};


var warrior = {

  name: "Warrior",
  img: 'img/characterselectorpage/avatars/warrior.png',
  description: 'Born and trained with only one purpose - to fight and be victorious - warriors spread terror on a battlefield. Crude in their manners but extremely efficient in melee they make an unstoppable force. '
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




        $('#character-selector-Page')
            .dialog(
                {buttons: 
                    {'Start!' : function(){
                        $(this).dialog('close');
                        Map.initiate();
                        alert(player.type);
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
     characters.indekz++;

      if (typeof(characters.choices[characters.indekz])=='undefined') {

          characters.indekz = 0;         
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);


          player.set(characters.choices[characters.indekz]);
      
      } else {
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);




          player.set(characters.choices[characters.indekz]);


     }

  },

  selectLeft: function(){
     characters.indekz--;
     console.log('index is now ' + characters.indekz );

      if (typeof(characters.choices[characters.indekz])=='undefined') { 
          characters.indekz = characters.choices.length - 1;  
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);



          player.set(characters.choices[characters.indekz]);


      } else {
          $('#character-selector-Page-avatar-name').html(characters.choices[characters.indekz].name);
          $('#character-selector-Page-avatar').css({"background":"url('"+characters.choices[characters.indekz].img+"')"});
          $('#character-selector-Page-avatar-description').html(characters.choices[characters.indekz].description);


          player.set(characters.choices[characters.indekz]);

     }

  }





};

