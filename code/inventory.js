var inventory = {

	 bagpack: [],

	 active: [],
	 arrows: [],

	 helmetSlot: [],
	 shieldSlot: [],
	 breastplateSlot: [],
	 meleeSlot: [],
	 rangeSlot: [],


   filterAndDraw: function(array, itemType, location){ //draws only filtered items for specific array on a pecific page (location) 

    if (city.pageOpened) { //player is viewing city page
  
      if (array === 'bagpack') {  //DRAWING BAGPACK IN CITY
  
          if (itemType === 'all') {
              
            $('#cityPage-bagpack-container').empty();
        
            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    

            for(i=0; i<inventory.bagpack.length; i++) {
              var item = inventory.bagpack[i];
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

              item.div.appendTo('#cityPage-bagpack-container'); // originally #characterDetails-inventory-container
            }

          } else if (itemType === 'melee') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'range') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'arrow') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'artefact') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'armor') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'shield') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
        
        } else if (itemType === 'potion') {

            $('#cityPage-bagpack-container').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('#cityPage-bagpack-container');
              }
          }
      }

      } else if (array === 'market') { //DRAWING MARKET IN CITY

          if (itemType === 'all') {
              
            $('#cityPage-market-container').empty();
        
            city.market.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    

            for(i=0; i<city.market.length; i++) {
              var item = city.market[i];
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

              item.div.appendTo('#cityPage-market-container'); // originally #characterDetails-inventory-container
            }

          } else if (itemType === 'budget') {

            $('#cityPage-market-container').empty();

            city.market.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    

            for(i=0; i<city.market.length; i++) {
              if (city.market[i].buyPrice <= player.gold){
                var item = city.market[i];
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
                item.div.appendTo('#cityPage-market-container'); 
              }
            }

          } else if (itemType === 'melee') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
      
        
        } else if (itemType === 'range') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container');
              }
          }
        
        } else if (itemType === 'arrow') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
        
        } else if (itemType === 'artefact') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
        
        } else if (itemType === 'armor') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
        
        } else if (itemType === 'shield') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
        
        } else if (itemType === 'potion') {

          $('#cityPage-market-container').empty();

          city.market.sort(function(a, b){ //sort bagpack alphabetically
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
                if (nameA > nameB)
                    return 1
                    return 0 //default return value (no sorting)
           });    

          for (i=0; i < city.market.length; i++) {
              if (city.market[i].type === itemType) {
                var item = city.market[i];
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
            item.div.appendTo('#cityPage-market-container'); 
              }
          }
        
        }
      } //here goes elseif for other array types when in city

    } else { //city page is not opened
  
        if (array === 'bagpack') { //DARWING BAGPACK IN CHARACTERS PAGE
  
          if (itemType === 'all') {

            $('.bagpack').empty();
        
            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    

            for(i=0; i<inventory.bagpack.length; i++) {
              var item = inventory.bagpack[i];
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

              item.div.appendTo('.bagpack'); // originally #characterDetails-inventory-container

            }

          } else if (itemType === 'melee') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'range') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'arrow') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'artefact') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'armor') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'shield') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }
        
        } else if (itemType === 'potion') {

            $('.bagpack').empty();

            inventory.bagpack.sort(function(a, b){ //sort bagpack alphabetically
              var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
                  if (nameA > nameB)
                      return 1
                      return 0 //default return value (no sorting)
             });    


          for (i=0; i < inventory.bagpack.length; i++) {

              if (inventory.bagpack[i].type === itemType) {
                var item = inventory.bagpack[i];
                item.div = $("<div/>");
                item.div.addClass("inventoryItem");
                item.div.css({"background-color": item.backgroundColor});          
                item.div.css({"background-image":"url('"+item.icon+"')"});
                item.div.get(0).obj = item; //link DOM elemtn to an object
                
                //add methods to a div
                  item.div.click(function(){
                    this.obj.clicked();
                  });

                  item.div.mouseover(function() {
                    this.obj.getInfo();
                  });

                  item.div.mouseout(function() {
                    this.obj.mouseLeft();
                  });

                item.div.appendTo('.bagpack');
              }
          }

        }

      } //else if it is another array name

    }

  },


   sellItem: function(item, indexInBagpack) { //can sell items only from bagpack to avoid selling by coincidence

      inventory.bagpack.splice(indexInBagpack,1);
      delete item;
      gold.increase(item.sellPrice);
      city.createPage();
      item.mouseLeft(); //to hide item info dialog just in case it was up

    },


    equipItem: function(item){





    },


    updateStats: function(item, action){ //equip or unequip








    },



	 handleItem: function(item){ //launched when item is clicked


	 	//go through all arrays and get index of the object in each of the arrays       
        
	 	   var indexInCityMarket = city.market.indexOf(item);
	 	//var indexInMerchant = requires further development
        var indexInActive = inventory.active.indexOf(item);
        var indexInArrows = inventory.arrows.indexOf(item);
        var indexInHelmetSlot = inventory.helmetSlot.indexOf(item);
        var indexInShieldSlot = inventory.shieldSlot.indexOf(item);
        var indexInbreastplateSlot = inventory.breastplateSlot.indexOf(item);
        var indexInMeleeSlot = inventory.meleeSlot.indexOf(item);
        var indexInRangeSlot = inventory.rangeSlot.indexOf(item);
        var indexInBagpack = inventory.bagpack.indexOf(item);  


		    //determine which array the item is and act accordingly
        if (indexInCityMarket > -1) { //item is in the market available for purchase
        	console.log('item is in city market. Will now purchase.');

        	
          if (gold.checkBalance(item)){ //if player has suffient gold
            console.log('balance sufficient, will equip now')

            
            city.market.splice(indexInCityMarket,1);
  //!!! add item to inventory OR autoequip if relevant slot is empty. Update stats via inventory.updateStats()
            city.createPage();
            item.mouseLeft(); //to hide item info dialog just in case it was up

            gold.decrease(item.buyPrice);
          } else {
            insufficientFundsMessage(item);
          }

        
        } else if (indexInBagpack > -1) { //item is in bagpack
            console.log('element is in bagpack');
               
               if (city.pageOpened) { //player is in the city
               		console.log('Player is in city and item is in bagpack. Will sell the item now');
                  inventory.sellItem(item, indexInBagpack);

               } else { //player is not in city

               		if (player.inCombat) { //player is in combat. cannot happen essentially, since bagpack is never displayed during combat. Left IF check here to keep general structure.
               		
               		} else { //player not in combat
               			console.log('Player is not in city and not in combat. Will try to equip it now');

               			




                    //depending on the item type it may go into one of several arrays
               			//check if arrays are full (compare current length with array with maxArrayLength)
               				
               				//if full:
               					
               					//The pop() method removes the last element from an array fruits.pop(); 
               					//targetArray.push(this);
               					//sourceArray.splice(indefOfThis, 1);

               					// - remove last item from target array
               					// - move the removed item to bagpack
               					// - add new item to target array
               					//redray page/arrays

               				//if not then add to array
               		}
               }



        } else if (indexInActive > -1){ //item is in active
            console.log('element is in Active');


			if (player.inCombat) {

				//use the item if it can be used in combat

			}  else { //player chaacter details page opened. Cannot be in city.

        inventory.bagpack.push(item);
        inventory.active.splice(indexInActive,1);
        item.mouseLeft(); //to hide item info dialog just in case it was up
        //update stats(item);
        characterDetailsPage.open();
			}


        
        } else if (indexInArrows > -1){ //item is in active
             console.log('element is in arrows');

             if (player.inCombat) {
             	//shoot arrow
             	//remove arrow from array
             	//redraw array/page
             
             } else { //player chaacter details page opened. Cannot be in city.
				
                inventory.bagpack.push(item);
                inventory.arrows.splice(indexInArrows,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();
             }


        
        }  else if (indexInHelmetSlot > -1){ //item is in active
             console.log('element is in HelmetSlot');
                inventory.bagpack.push(item);
                inventory.helmetSlot.splice(indexInHelmetSlot,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();

        
        }  else if (indexInbreastplateSlot > -1){ //item is in active
             console.log('element is in BreastplateSlot');
                inventory.bagpack.push(item);
                inventory.breastplateSlot.splice(indexInbreastplateSlot,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();

        
        }  else if (indexInShieldSlot > -1){ //item is in active
             console.log('element is in ShieldSlot');
                inventory.bagpack.push(item);
                inventory.shieldSlot.splice(indexInShieldSlot,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();


        } else if (indexInMeleeSlot > -1){ //item is in active
             console.log('element is in MeleedSlot');
                inventory.bagpack.push(item);
                inventory.meleeSlot.splice(indexInMeleeSlot,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();

        
        }  else if (indexInRangeSlot > -1){ //item is in active
             console.log('element is in RangeSlot');
                inventory.bagpack.push(item);
                inventory.rangeSlot.splice(indexInRangeSlot,1);
                item.mouseLeft(); //to hide item info dialog just in case it was up
                //update stats(item);
                characterDetailsPage.open();
        }   





	 }









};