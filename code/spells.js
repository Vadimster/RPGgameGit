
var spells = [

	 {
		type: "weapon",
		level: 0,
		name: "Ball-o-Fire",
		manaCost: 10,
		price: 5, //cost of experience points to learn a spell
		description: "Shoots a fireball at medium ranges",
		baseDamage: 2,
		range: 2,
		duration: null,

		learn: function(isFree){
			gameConfig.experience.learnSpell(this, isFree);

		}

	},

	{
		type: 'enchantment',
		level: 0,
		name: "Stoneskin",
		manaCost: 10,
		price: 5,
		description: "Suffer 10% less damage from enemies for 2 rounds",
		baseDamage: null,
		damageDiscount: 10, // % less damage taken
		range: null,
		duration: 2,

		learn: function(isFree){
			gameConfig.experience.learnSpell(this, isFree);
		}
	},

	{
		type: 'weapon',
		level: 2,
		name: "Ice Spear",
		manaCost: 10,
		price: 5,
		description: "Shoots a sharp icicle at short ranges",
		baseDamage: 3,
		range: 1,
		duration: null,
		learn: function(isFree){
			gameConfig.experience.learnSpell(this, isFree);
		}
	}

];


/* 



var lightningBall = {

	type: 'weapon',
	spelllevel: 3,
	name: "Lightning",
	manaCost: 10,
	price: 5,
	description: "Powerful lightning strikes target at long ranges",
	baseDamage: 2,
	range: 4,
	duration: null,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}

};


var enemySlowdown = {
	
	type: 'enchantment',
	spelllevel: 3,
	name: "Slow-down",
	manaCost: 10,
	price: 5,
	description: "Enemy can move only one tile per turn for 3 rounds",
	baseDamage: null,
	range: 5,
	duration: 3,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}
};


var enemyFreeze = {
	
	type: 'enchantment',
	spelllevel: 3,
	name: "Suspension",
	manaCost: 10,
	price: 5,
	description: "Enemy cannot move for three rounds",
	baseDamage: null,
	range: 5,
	duration: 3,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}
};




var ironSkin = {

	type: 'enchantment',
	spelllevel: 3,
	name: "Ironskin",
	manaCost: 10,
	price: 5,
	description: "Suffer 25% less damage from enemies for 2 rounds",
	baseDamage: null,
	damageDiscount: 10, // % less damage taken
	range: null,
	duration: 2,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}
};


var diamondSkin = {

	type: 'enchantment',
	spelllevel: 4,
	name: "Diamondskin",
	manaCost: 10,
	price: 5,
	description: "Suffer 5o% less damage from enemies for 2 rounds",
	baseDamage: null,
	damageDiscount: 10, // % less damage taken
	range: 1,
	duration: 2,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.openLearnSpellPage();

		} else {
			spellBook.drawLearnSpellPage();
		}
	
	}
};


var quickening = {

	type: 'enchantment',
	spelllevel: 2,
	name: "Quickening",
	manaCost: 10,
	price: 5,
	description: "Incrase movement speed by one tile for 2 rounds",
	baseDamage: 3,
	range: 1,
	duration: 2,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}

};


var madness = {

	type: 'enchantment',
	spelllevel: 3,
	name: "Madness",
	manaCost: 10,
	price: 5,
	description: "Makes enemy act randomly for 1 round",
	baseDamage: null,
	range: 6,
	duration: 1,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}

};


var weakness = {

	type: 'enchantment',
	spelllevel: 3,
	name: "Weakness",
	manaCost: 10,
	price: 5,
	description: "A close-range enchantment worsens enemy attack skills by 20% for 1 round",
	baseDamage: null,
	attackDiscount: 20, //  % for wich enemy attack stats are affected
	range: 2,
	duration: 1,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}

};


var blindness = {

	type: 'enchantment',
	spelllevel: 3,
	name: "Blindness",
	manaCost: 10,
	price: 5,
	description: "A long-range enchantement worsens enemy ranged attack skills by 50% for 2 rounds",
	baseDamage: null,
	attackDiscount: 50, //  % for wich enemy attack stats are affected
	range: 6,
	duration: 2,

	learn: function(){

		if (experience.checkBalance(this)){
			console.log('experience is enough to  learn the spell');
			
			experience.decrease(this.price);
			$("#spellLearnt").get(0).play();
			spellBook.spells.push(this);
			spellBook.drawLearnSpellPage();

		} else {
			insufficientExperienceMessage(this);
		}
	
	}

};

var lvl1Spells = [fireBall, stoneSkin];

var lvl2Spells = [iceBall, quickening];

var lvl3Spells = [lightningBall, enemySlowdown, enemyFreeze, ironSkin, madness, weakness, blindness];

var lvl4Spells = [diamondSkin];

var allSpells =  lvl1Spells.concat(lvl2Spells, lvl3Spells, lvl4Spells);


*/


