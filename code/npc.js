
var wizard = {

	img: 'URL to the image',
	chanceToMeet: parseFloat((0.5 - player.level/5).toFixed(2)),

	spells: [fireBall, iceBall, ironSkin, enemyFreeze],


	defineOutcome: function(){

	
		if (player.level <= 2) {
			console.log('Wizard says: I would give you a Book of Spells, but you cannot read it. I hope that next time I meet you you will be more advanced to receive the word of magic.');

		} else { //player is level >2

			if (spellBook.equipped !== true) {
				console.log('You get the Book of Spells from the wizard');
				spellBook.equip(); 

			} else { // player has the spell book

				if (player.level > 10) {
					console.log('You can choose a spell and an artefact from the wizard');
				
				} else if (player.level > 8){
					console.log('You can choose a spell and wizard gives you a random artefact');
				
				} else if (player.level > 6){
					console.log('You can choose a spell from the wizard');
				
				} else if (player.level > 2){
					var randomSpell = wizard.spells[Math.floor(Math.random()*wizard.spells.length)];
					var n = spellBook.spells.indexOf(randomSpell); //code below checks if spell is already known to player
					if (n < 0){
						spellBook.spells.push(randomSpell);
						console.log('Wizard teaches you a random spell: ' + randomSpell.name + '! Player now has ' + spellBook.spells.length + ' spell(s) in the book');

		            } else {
		                console.log('It looks like you already know this spell: ' + randomSpell.name);
		            }	
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




