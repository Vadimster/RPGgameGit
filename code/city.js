
var city = {


	visited: false, //indicates if player is currently on a city tile

	
	playerArrivedonTile : function(cityName){
		
		$('#cityPage-cityName').empty();
		$('#cityPage-cityName').html(cityName);
		
		city.visited = true;
		this.createPage();
	},


	onClick: function(){

		if (city.visited) {
			this.createPage();
		} else {
			cityEntranceErrorPage();
		}
	},


	createPage: function(){

	    $('#cityPage-inventory-container').empty();
	    for(i=0; i<inventory.inactive.length; i++) {

	    	var item = inventory.inactive[i];
	    	item.div = $("<div/>");
			item.div.addClass("testClass");

			item.div.css({"background-image":"url('"+item.icon+"')"});


	    	item.div.get(0).obj = item; //link DOM elemtn to an object
	    	item.div.click(function(){
	    		this.obj.clicked();

	    	});
	    	item.div.appendTo('#cityPage-inventory-container');
	    }



			$('#cityPage')
	    		.dialog(
	      			{buttons: 
	         			{
	         			 'Leave city' :function(){
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