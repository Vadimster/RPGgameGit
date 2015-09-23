
var characterProfile = {
	
	drawPage: function(){
		console.log('characterProfile.drawPage() run');

        $('.bagpack').empty();
       	$('#manaCounter').html(player.stats.mana.counter);
	    $('#luckCounter').html(player.stats.luck.counter);
	    $('#skillsArcheryCounter').html(player.skills.archery.counter);
	    $('#skillsMeleeCounter').html(player.skills.melee.counter);
	    $('#skillsMagicCounter').html(player.skills.magic.counter);
	    $('#skillsDefenceCounter').html(player.skills.defence.counter);
	    $('#skillsStealthCounter').html(player.skills.stealth.counter);

	    gameConfig.inventory.draw('bagpack');

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
	            


/*
	    inventory.filterAndDraw('bagpack', 'all');

	    //draw active inventory
	    $('#characterDetails-activeItems-container').empty();
	    for(i=0; i<inventory.active.length; i++) {
	    	var item = inventory.active[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});       
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});

		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});

		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#characterDetails-activeItems-container');
	    }
	
		//draw inventory.arrows		
	    $('#characterDetails-arrows-container').empty();
	    for(i=0; i<inventory.arrows.length; i++) {
	    	var item = inventory.arrows[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#characterDetails-arrows-container');
	    }

		//draw inventory.helmetSlot 
	    $('#weapon-slot-helmet').empty();
	    for(i=0; i<inventory.helmetSlot.length; i++) {
	    	var item = inventory.helmetSlot[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#weapon-slot-helmet');
	    }	

		//draw inventory.shieldSlot	
	    $('#weapon-slot-shield').empty();
	    for(i=0; i<inventory.shieldSlot.length; i++) {
	    	var item = inventory.shieldSlot[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#weapon-slot-shield');
	    }	

		//draw inventory.armorSlot	
	    $('#weapon-slot-breastplate').empty();
	    for(i=0; i<inventory.breastplateSlot.length; i++) {
	    	var item = inventory.breastplateSlot[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#weapon-slot-breastplate');
	    }	

		//draw inventory.meleeSlot	
	    $('#weapon-slot-melee').empty();
	    for(i=0; i<inventory.meleeSlot.length; i++) {
	    	var item = inventory.meleeSlot[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#weapon-slot-melee');
	    }	

		//draw inventory.rangeSlot	#weapon-slot-range
	    $('#weapon-slot-range').empty();
	    for(i=0; i<inventory.rangeSlot.length; i++) {
	    	var item = inventory.rangeSlot[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");
            item.div.css({"background-color": item.backgroundColor});          
			item.div.css({"background-image":"url('"+item.icon+"')"});
	    	item.div.get(0).obj = item; //link DOM elemtn to an object
		    	item.div.click(function(){
		    		this.obj.clicked();
		    	});
		    	item.div.mouseover(function() {
		    		this.obj.getInfo();
		    	});
		    	item.div.mouseout(function() {
		    		this.obj.mouseLeft();
		    	});
	    	item.div.appendTo('#weapon-slot-range');
	    }	
	*/

	}
};