
var city = {


	visited: false, //indicates if player is currently on a city tile
	pageOpened: false, //city page is opened

	market: [], //contains all items available for purchase by player

	
	playerArrivedonTile : function(cityName){ //player arrives on city tile
		
		$('#cityPage-cityName').empty();
		$('#cityPage-cityName').html(cityName);
		
		city.visited = true;
		this.createPage();
	},


	onClick: function(){ //city icon clicked

		if (city.visited) {
			this.createPage();
		} else {
			cityEntranceErrorPage();
		}
	},


	createPage: function(){

        $('.bagpack').empty();
        $('#cityPage-market-container').empty();

	    city.pageOpened = true;

	   	inventory.filterAndDraw('bagpack', 'all'); //draws bagpack
	   	inventory.filterAndDraw('market', 'all'); //draws market


			$('#cityPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Leave city' :function(){
	            			city.pageOpened  = false;
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 1000,
	       		height:650,
	       		closeOnEscape: true,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates dialog
	}




};