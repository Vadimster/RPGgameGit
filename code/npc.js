
var wizard = {

	img: 'URL to the image',

	defineOutcome: function(){ //will decide what happens furter when a wizard is met.
	
		if (player.level <= 2 && spellBook.equipped === false) {
			console.log('Wizard says: I would give you a Book of Spells, but you cannot read. I hope that next time I meet you you will be more advanced to receive the word of magic.');
			//DIALOG  - use image in the dialog

		} else if (player.level <= 2 && spellBook.equipped === true) {
			
			console.log('Wizard says: I see you already have a bok of spells, there is nothing I can help you with at the moment');
			//DIALOG - use image in the dialog

		} else { // = player is level >2

			if (spellBook.equipped !== true) {
				console.log('You get the Book of Spells from the wizard');
				spellBook.equip(); 

			} else { //  = player has the spell book

				if (player.level > 10) {
					console.log('You can choose a spell and an artefact from the wizard');
					//DIALOG + FUNCTION
				
				} else if (player.level > 8){
					console.log('You can choose a spell and the wizard gives you a random artefact');
					//DIALOG + FUNCTION
				
				} else if (player.level > 6){
					console.log('You can choose a spell from the wizard');
					//DIALOG + FUNCTION
				
				} else if (player.level > 2){ 
					spellBook.giveRandomSpell();

				}
			}
		}
	}

};


var merchant = {

//merchant sells potions, mastercrafted armor and weapons
//merchant buys stuff from player at better price
//prices depend on player level. Things cost more but can sell for more too.


	img: 'URL to the image',

	defineOutcome: function(){
		//LOAD MERCHANT PAGE


	}







};




