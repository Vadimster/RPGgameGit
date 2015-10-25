
var characterProfile = {
	
	drawPage: function(){
		console.log('characterProfile.drawPage() run');

        $('.bagpack').empty();
        $('.arrows').empty();
        $('.active').empty();
        $('.helmetSlot').empty();
        $('.shieldSlot').empty();
        $('.breastplateSlot').empty();
        $('.meleeSlot').empty();
        $('.rangeSlot').empty();



       	$('#manaCounter').html(player.stats.mana.counter);
	    $('#luckCounter').html(player.stats.luck.counter);
	    $('#skillsArcheryCounter').html(player.skills.archery.counter);
	    $('#skillsMeleeCounter').html(player.skills.melee.counter);
	    $('#skillsMagicCounter').html(player.skills.magic.counter);
	    $('#skillsDefenceCounter').html(player.skills.defence.counter);
	    $('#skillsStealthCounter').html(player.skills.stealth.counter);

	    gameConfig.inventory.draw('bagpack');
	   	gameConfig.inventory.draw('arrows');
	   	gameConfig.inventory.draw('active');
	   	gameConfig.inventory.draw('helmetSlot');
	   	gameConfig.inventory.draw('shieldSlot');
	   	gameConfig.inventory.draw('breastplateSlot');
	   	gameConfig.inventory.draw('meleeSlot');
	   	gameConfig.inventory.draw('rangeSlot');

		$('#characterDetails')
	        .dialog(
	            {buttons: 
	                {'Close' : function(){
	                    $(this).dialog('close');
	                    }                 
	            }, //buttons added
	        draggable: false,
	        resizable: false,
	        modal: true,
	        width: 1000,
	        height: 675, 
	        closeOnEscape: true,
	        dialogClass: "no-close"
	        //position: ["right", "center"]
	        }
	    ); //creates the dialog
	            
	}
};