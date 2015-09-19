
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

		if (player.isOnCityTile()){
			city.drawPage();	
		} else {
			console.log('Player is NOT on city tile');
		}
	},


	drawPage: function(){

       $('#backgroundmusic').get(0).pause();  //alternatively var audio = $('#backgroundmusic')[0];  audio.pause();
	   $('#city-backgroundmusic').get(0).play();

        //$('.bagpack').empty();
        //$('#cityPage-market-container').empty();

	    //city.pageOpened = true;

	   	//inventory.filterAndDraw('bagpack', 'all'); //draws bagpack
	   	//inventory.filterAndDraw('market', 'all'); //draws market


			$('#cityPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Leave city' :function(){
	            			//city.pageOpened  = false;
	            			$('#city-backgroundmusic').get(0).pause();
	            			$('#backgroundmusic').get(0).play();
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 1000,
	       		height:670,
	       		closeOnEscape: true,
	       		dialogClass: "no-close"
	       		//position: ["right", "center"]
	       		}
	       	); //creates dialog
	}




};