
var city = {


	//for MARKET see GameConfig.inventory
	visited: false, //indicates if city page is opened to ensure proper handling of items in inventory


	onClick: function(){ //city icon clicked
		if (player.isOnCityTile()){
			city.drawPage();	
		
		} else {
			$('#insufficientSomethingPage-message').text('Your character has to be on a city tile in order to enter a city. You can trade items in cities.')
			$('#insufficientSomethingPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'I see...' :function(){
	            			$(this).dialog('close');           		 
	               		}
	           		},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 360,
	       		height:420,
	       		closeOnEscape: true,
	       		dialogClass: "no-close"
	       		}
	       	); //creates dialog			
		}
	},


	drawPage: function(){

       city.visited = true;

       $('#backgroundmusic').get(0).pause();  //alternatively var audio = $('#backgroundmusic')[0];  audio.pause();
	   $('#city-backgroundmusic').get(0).play();
	   $('#cityPage-cityName').text(map.tileBox[player.map.positionY][player.map.positionX].cityName);
	   $('#cityPage-cityBanner').css("background-image", "url(img/dialogs/city/banners/" +map.tileBox[player.map.positionY][player.map.positionX].cityBanner+ ".png)");

	   gameConfig.inventory.draw('bagpack');


        //$('#cityPage-market-container').empty();


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
	            			city.visited = false;
	            			$(this).dialog('close');
            		 
	               		}
	               		
	       			},
		   		draggable: false,
	       		resizable: false,
	       		modal: true,
	      		width: 1000,
	       		height:670,
	       		closeOnEscape: false,
	       		dialogClass: "no-close"
	       		}
	       	); //creates dialog
	}


};