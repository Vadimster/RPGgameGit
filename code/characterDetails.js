
var characterDetailsPage = {


	open: function(){
		console.log('characterDetailsPage opened!');

		//$('#characterDetails-background').empty();

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
	            

	    $('#attackCounter').html(player.attack);
	    $('#manaCounter').html(player.mana);
	    $('#defenseCounter').html(player.defense);
	    $('#luckCounter').html(player.luck);



	    //populate inactive inventory
	    $('#characterDetails-inventory-container').empty();
	    for(i=0; i<inventory.inactive.length; i++) {

	    	var item = inventory.inactive[i];
	    	item.div = $("<div/>");
			item.div.addClass("inventoryItem");

	    	if (item.melee) {
	    		item.div.css({"background-color": "#9F000F"}); //red
	    	} else if (item.range) {
	    		item.div.css({"background-color": "#F87431"}); //orange

	    	}


			//use different background depending on item class melee, ranged, potions or artefacts


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

	    	item.div.appendTo('#characterDetails-inventory-container');
	    }

		
	    //populate active inventory


	}
};