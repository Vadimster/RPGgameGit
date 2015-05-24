
var wizard = {

	img: 'URL to the image',

	defineOutcome: function(){

		var playerHasSpellBook = false;

		for (i = 0; i < player.inventory.length; i++){
			if (player.inventory[i] === spellBook) {
				var playerHasSpellBook = true;
			}
		}

		if (player.level <= 2) {
			console.log('Wizard says: I would give you a spell book, but you cannot read it. I hope that next time I meet you you will be more advanced to receive the word of magic.');

		} else { //player is level >2

			if (playerHasSpellBook !== true) {
				console.log('You get the spellbook from the wizard');

			} else { // player has the spell book

				if (player.level > 10) {
					console.log('You can choose a spell and an artefact from a wizard');
				
				} else if (player.level > 8){
					console.log('You can choose a spell and wizard gives you a random artefact');
				
				} else if (player.level > 6){
					console.log('You can choose a spell from the wizard');
				
				} else if (player.level > 4){
					console.log('Wizard gives you a random spell');
				
				}
			}
		}
	}

};


var merchant = {

	img: 'URL to the image',

	defineOutcome: function(){



	}


//merchant sells potions, spells book, mastercrafted armor and weapons
//merchant buys stuff from player at better price
//prices depend on player level. Things cost more but can sell for more too.




};




