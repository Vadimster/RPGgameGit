
var city = {

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
     $('#backgroundmusic').get(0).pause();  //alternatively var audio = $('#backgroundmusic')[0];  audio.pause();
	   //$('#city-backgroundmusic').get(0).play();
	   $('#cityPage-cityName').text(map.tileBox[player.map.positionY][player.map.positionX].cityName);
	   $('#cityPage-cityBanner').css("background-image", "url(img/dialogs/city/banners/" +map.tileBox[player.map.positionY][player.map.positionX].cityBanner+ ".png)");

  		$('#cityPage')
      		.dialog(
        			{buttons: 
           			{
           			 'Leave city' :function(){
              			//city.pageOpened  = false;
              			//$('#city-backgroundmusic').get(0).pause();
              			//$('#backgroundmusic').get(0).play();
              			//city.visited = false;
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


var market = {    //for inventory see GameConfig.inventory


  drawPage: function(){
      
      console.log('market.drawPage() launched');
      console.log(gameConfig.inventory.market.length);

      gameConfig.inventory.draw('market');
      gameConfig.inventory.draw('bagpack');

      $('#marketPage')
          .dialog(
              {buttons: 
                {
                 'Leave market' :function(){
                    //city.pageOpened  = false;
                    //$('#city-backgroundmusic').get(0).pause();
                    //$('#backgroundmusic').get(0).play();
                    //city.visited = false;
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


var gamingParlor = {

drawPage: function(){
    
    $('#gamingParlorPage-outcomeMessage').empty();
    $('#gamingParlorPage-playerCard').css('background-image', 'none'); 
    $('#gamingParlorPage-oponentCard').css('background-image', 'none');
    $('#backgroundmusic').get(0).pause();  //alternatively var audio = $('#backgroundmusic')[0];  audio.pause();
    //$('#city-backgroundmusic').get(0).play();

    $('#gamingParlorPage')
        .dialog(
            {buttons: 
              {
               'Leave parlor' :function(){
                  //$('#city-backgroundmusic').get(0).pause();
                  //$('#backgroundmusic').get(0).play();
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
    },


    cards: {
      s2: {suit: 4, rank: 2, name: '2 of spades', img: 'img/dialogs/city/parlor/deck/spades/2s.png'},
      s3: {suit: 4, rank: 3, name: '3 of spades', img: 'img/dialogs/city/parlor/deck/spades/3s.png'},  
      s4: {suit: 4, rank: 4, name: '4 of spades', img: 'img/dialogs/city/parlor/deck/spades/4s.png'},
      s5: {suit: 4, rank: 5, name: '5 of spades', img: 'img/dialogs/city/parlor/deck/spades/5s.png'},
      s6: {suit: 4, rank: 6, name: '6 of spades', img: 'img/dialogs/city/parlor/deck/spades/6s.png'},
      s7: {suit: 4, rank: 7, name: '7 of spades', img: 'img/dialogs/city/parlor/deck/spades/7s.png'},
      s8: {suit: 4, rank: 8, name: '8 of spades', img: 'img/dialogs/city/parlor/deck/spades/8s.png'},
      s9: {suit: 4, rank: 9, name: '9 of spades', img: 'img/dialogs/city/parlor/deck/spades/9s.png'},
      s10: {suit: 4, rank: 10, name: '10 of spades', img: 'img/dialogs/city/parlor/deck/spades/10s.png'},
      s11: {suit: 4, rank: 11, name: 'Jack of spades', img: 'img/dialogs/city/parlor/deck/spades/js.png'},
      s12: {suit: 4, rank: 12, name: 'Queen of spades', img: 'img/dialogs/city/parlor/deck/spades/qs.png'},
      s13: {suit: 4, rank: 13, name: 'king of spades', img: 'img/dialogs/city/parlor/deck/spades/ks.png'},
      s14: {suit: 4, rank: 14, name: 'Ace of spades', img: 'img/dialogs/city/parlor/deck/spades/as.png'},
      
      h2: {suit: 3, rank: 2, name: '2 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/2h.png'},
      h3: {suit: 3, rank: 3, name: '3 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/3h.png'},
      h4: {suit: 3, rank: 4, name: '4 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/4h.png'},
      h5: {suit: 3, rank: 5, name: '5 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/5h.png'},
      h6: {suit: 3, rank: 6, name: '6 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/6h.png'},
      h7: {suit: 3, rank: 7, name: '7 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/7h.png'},
      h8: {suit: 3, rank: 8, name: '8 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/8h.png'},
      h9: {suit: 3, rank: 9, name: '9 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/9h.png'},
      h10: {suit: 3, rank: 10, name: '10 of hearts', img: 'img/dialogs/city/parlor/deck/hearts/10h.png'},
      h11: {suit: 3, rank: 11, name: 'Jack of hearts', img: 'img/dialogs/city/parlor/deck/hearts/jh.png'},
      h12: {suit: 3, rank: 12, name: 'Queen of hearts', img: 'img/dialogs/city/parlor/deck/hearts/qh.png'},
      h13: {suit: 3, rank: 13, name: 'king of hearts', img: 'img/dialogs/city/parlor/deck/hearts/kh.png'},
      h14: {suit: 3, rank: 14, name: 'Ace of hearts', img: 'img/dialogs/city/parlor/deck/hearts/ah.png'},
    
      d2: {suit: 2, rank: 2, name: '2 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/2d.png'},
      d3: {suit: 2, rank: 3, name: '3 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/3d.png'},
      d4: {suit: 2, rank: 4, name: '4 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/4d.png'},
      d5: {suit: 2, rank: 5, name: '5 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/5d.png'},
      d6: {suit: 2, rank: 6, name: '6 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/6d.png'},
      d7: {suit: 2, rank: 7, name: '7 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/7d.png'},
      d8: {suit: 2, rank: 8, name: '8 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/8d.png'},
      d9: {suit: 2, rank: 9, name: '9 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/9d.png'},
      d10: {suit: 2, rank: 10, name: '10 of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/10d.png'},
      d11: {suit: 2, rank: 11, name: 'Jack of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/jd.png'},
      d12: {suit: 2, rank: 12, name: 'Queen of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/qd.png'},
      d13: {suit: 2, rank: 13, name: 'king of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/kd.png'},
      d14: {suit: 2, rank: 14, name: 'Ace of diamonds', img: 'img/dialogs/city/parlor/deck/diamonds/ad.png'},
    
      c2: {suit: 1, rank: 2, name: '2 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/2c.png'},
      c3: {suit: 1, rank: 3, name: '3 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/3c.png'},
      c4: {suit: 1, rank: 4, name: '4 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/4c.png'},
      c5: {suit: 1, rank: 5, name: '5 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/5c.png'},
      c6: {suit: 1, rank: 6, name: '6 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/6c.png'},
      c7: {suit: 1, rank: 7, name: '7 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/7c.png'},
      c8: {suit: 1, rank: 8, name: '8 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/8c.png'},
      c9: {suit: 1, rank: 9, name: '9 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/9c.png'},
      c10: {suit: 1, rank: 10, name: '10 of clubs', img: 'img/dialogs/city/parlor/deck/clubs/10c.png'},
      c11: {suit: 1, rank: 11, name: 'Jack of clubs', img: 'img/dialogs/city/parlor/deck/clubs/jc.png'},
      c12: {suit: 1, rank: 12, name: 'Queen of clubs', img: 'img/dialogs/city/parlor/deck/clubs/qc.png'},
      c13: {suit: 1, rank: 13, name: 'king of clubs', img: 'img/dialogs/city/parlor/deck/clubs/kc.png'},
      c14: {suit: 1, rank: 14, name: 'Ace of clubs', img: 'img/dialogs/city/parlor/deck/clubs/ac.png'}
    },

    playerCard: {
      rank: null,
      suit: null,
      name: null,
      img: null
    },

    oponentCard: {
      rank: null,
      suit: null,
      name: null,
      img: null
    },

    playGame: function(){
      $('#gamingParlorPage-outcomeMessage').empty();
      $('#gamingParlorPage-playerCard').css('background-image', 'none'); 
      $('#gamingParlorPage-oponentCard').css('background-image', 'none');

      console.log('playGame() started');
      var stake = parseInt(document.getElementById('stake').value);

      if (gameConfig.gold.checkBalance(stake)){
          if (gamingParlor.resolveGame()){
            window.setTimeout(gamingParlor.dealPlayerCard, 1000);
            window.setTimeout(gamingParlor.dealOponentCard, 2000);
            window.setTimeout(gamingParlor.revealPlayerCard, 3000);
            window.setTimeout(gamingParlor.revealOponentCard, 4000);
            window.setTimeout(gamingParlor.displayWinMessage,5000);
            window.setTimeout(gameConfig.gold.increase, 5500, player, stake*2);

          } else {
            console.log('returned PLAYER LOSES');
            window.setTimeout(gamingParlor.dealPlayerCard, 1000);
            window.setTimeout(gamingParlor.dealOponentCard, 2000);
            window.setTimeout(gamingParlor.revealPlayerCard, 3000);
            window.setTimeout(gamingParlor.revealOponentCard, 4000);
            window.setTimeout(gamingParlor.displayLostMessage,5000);
            window.setTimeout(gameConfig.gold.decrease, 5500, player, stake);
          }

      } else {
        $('#insufficientSomethingPage-message').text('Hey, you are broke and we are playing for money here! Get out and come back when you have got a few more gold coins.');
        $('#insufficientSomethingPage')
            .dialog(
                {buttons: 
                  {
                   'Oh...' :function(){
                      //$('#city-backgroundmusic').get(0).pause();
                      //$('#backgroundmusic').get(0).play();
                      $(this).dialog('close');
                      }
                },
            draggable: false,
              resizable: false,
              modal: true,
              width: 360,
              height: 420,
              closeOnEscape: true,
              dialogClass: "no-close"
              }
        ); //creates dialog
      }
    
    }, 


    resolveGame: function(){

      /* ADJUST RULES
        
        if(player.stats.luck.counter === 0){ //opponent gets +2 to rank max 12
          console.log('Player luck is 0');
          

        } else if (player.stats.luck.counter === 1){ //opponent gets +1 to rank max 11
          console.log('Player luck is 1');
          

        } else if (player.stats.luck.counter === 2){ //game as normal
          console.log('Player luck is 2');
          

        } else if (player.stats.luck.counter === 3){ //player wins all draws
          console.log('Player luck is 3');
          

        } else if (player.stats.luck.counter === 4){ //player gets +1 to rank max 10
          console.log('Player luck is 4');
          

        } else if (player.stats.luck.counter === 5){ //player gest +2 to rank max 10
          console.log('Player luck is 5');

        }
          

      */


      var cardDeck = [];
      for(var key in gamingParlor.cards){
        cardDeck.push(gamingParlor.cards[key]);
      }

                console.log('Deck length is: ' +cardDeck.length);       
                for(i=0; i < cardDeck.length; i++){
                  console.log('Element: ' + i + ' Rank: ' +cardDeck[i].rank+ ' Suit: ' +cardDeck[i].suit+ ' Name: ' +cardDeck[i].name);
                }

      var playerCardIndex = Math.floor(Math.random()*cardDeck.length); //use it to pick properties of an object from array. Avoids messing up with objects.
                console.log('playerCardIndex is: ' +playerCardIndex);

      gamingParlor.playerCard.rank = cardDeck[playerCardIndex].rank; 
      gamingParlor.playerCard.suit = cardDeck[playerCardIndex].suit;
      gamingParlor.playerCard.name = cardDeck[playerCardIndex].name;
      gamingParlor.playerCard.img = cardDeck[playerCardIndex].img;


                console.log('PLAYER card | Rank: ' +gamingParlor.playerCard.rank+ ' Suit: ' +gamingParlor.playerCard.suit+ ' Name: ' +gamingParlor.playerCard.name)

      cardDeck.splice(playerCardIndex, 1);

                console.log('Deck length after player card removal is: ' +cardDeck.length);
          
                for(i=0; i < cardDeck.length; i++){
                  console.log('Element: ' + i + ' Rank: ' +cardDeck[i].rank+ ' Suit: ' +cardDeck[i].suit+ ' Name: ' +cardDeck[i].name);
                }

      var oponentCardIndex = Math.floor(Math.random()*cardDeck.length); //use it to pick properties of an object from array. Avoids messing up with objects.
                console.log('oponentCardIndex is: ' +oponentCardIndex);

      gamingParlor.oponentCard.rank = cardDeck[oponentCardIndex].rank; 
      gamingParlor.oponentCard.suit = cardDeck[oponentCardIndex].suit;
      gamingParlor.oponentCard.name = cardDeck[oponentCardIndex].name; 
      gamingParlor.oponentCard.img = cardDeck[oponentCardIndex].img; 

                console.log('OPONENT card | Rank: ' +gamingParlor.oponentCard.rank+ ' Suit: ' +gamingParlor.oponentCard.suit+ ' Name: ' +gamingParlor.oponentCard.name)



      if (gamingParlor.playerCard.rank > gamingParlor.oponentCard.rank){ // (1) No action needed - player wins naturally
              console.log('Player wins on highest rank naturally');
              console.log('PLAYER card | Rank: ' +gamingParlor.playerCard.rank+ ' Suit: ' +gamingParlor.playerCard.suit+ ' Name: ' +gamingParlor.playerCard.name);
              console.log('OPONENT card | Rank: ' +gamingParlor.oponentCard.rank+ ' Suit: ' +gamingParlor.oponentCard.suit+ ' Name: ' +gamingParlor.oponentCard.name);
              return true;



      }else if (gamingParlor.playerCard.rank < gamingParlor.oponentCard.rank) { // player will lose if luck does not kick in
        if (player.stats.luck.counter > 1){ //player luck kicks in and there might be card adjustment

          if (gamingParlor.playerCard.rank < gameConfig.bonus.maxCardRank){ //there is space for further rank increase and adjustment will be made
            gamingParlor.playerCard.rank = gamingParlor.playerCard.rank + gameConfig.bonus.cardRankIncrease;
            console.log('player got initial card rank increase. Increased rank before max adjustment is: ' + gamingParlor.playerCard.rank);
            console.log('player card rank now is ' + gamingParlor.playerCard.rank);
            if (gamingParlor.playerCard.rank > gameConfig.bonus.maxCardRank){ //ensure that rank after increase does not exceed max allowed value
              gamingParlor.playerCard.rank = gameConfig.bonus.maxCardRank
              console.log('Rank exceeded, adjusting to maxRank: ' + gamingParlor.playerCard.rank);
              console.log('suit is:' +gamingParlor.playerCard.suit);
            }
            if (gamingParlor.playerCard.rank === gamingParlor.oponentCard.rank && gamingParlor.playerCard.suit === gamingParlor.oponentCard.suit ){ //check if there is card collision after adjustment. 
              console.log('Player loses. There is card collision after adjustment');
              console.log('PLAYER card | Rank: ' +gamingParlor.playerCard.rank+ ' Suit: ' +gamingParlor.playerCard.suit+ ' Name: ' +gamingParlor.playerCard.name);
              console.log('OPONENT card | Rank: ' +gamingParlor.oponentCard.rank+ ' Suit: ' +gamingParlor.oponentCard.suit+ ' Name: ' +gamingParlor.oponentCard.name);
              return false;


            } else { //no card collision
                console.log('No card collision after adjustment. Will update card and resove game now');
              

                for (var j=0; j < cardDeck.length; j++){
                  if (cardDeck[j].rank === gamingParlor.playerCard.rank && cardDeck[j].suit === gamingParlor.playerCard.suit){ //locate new card in the deck
                    gamingParlor.playerCard.name = cardDeck[j].name; 
                    console.log('After foor loop - Player card is: ' + gamingParlor.playerCard.name); //URL!!
                  }
                }

                if (gamingParlor.playerCard.rank > gamingParlor.oponentCard.rank){
                  console.log('Player wins naturally due to higher after adjustment');
                  console.log('Player card is: ' + gamingParlor.playerCard.name);
                  console.log('Opponent card is: ' + gamingParlor.oponentCard.name); 
                  return true;   

                } else if (gamingParlor.playerCard.rank < gamingParlor.oponentCard.rank){
                  console.log('Oponent wins naturally due to higher rank after adjustment');
                  console.log('Player card is: ' + gamingParlor.playerCard.name);
                  console.log('Opponent card is: ' + gamingParlor.oponentCard.name);
                  return false;    

                } else { //ranks are the same but suits are not.
                  if (gamingParlor.playerCard.suit > gamingParlor.oponentCard.suit){
                    console.log('Player wins due to higher suit');
                    console.log('Player card is: ' + gamingParlor.playerCard.name);
                    console.log('Opponent card is: ' + gamingParlor.oponentCard.name);
                    return true;    

                  } else {
                    console.log('Opponent wins due to higher suit');
                    console.log('Player card is: ' + gamingParlor.playerCard.name);
                    console.log('Opponent card is: ' + gamingParlor.oponentCard.name); 
                    return false;                     
                  }              
                }
            }
       
          }else { //player loses - rank cannot be increased as player already got a card >= 10
            console.log('Player looses. Although luck kicks in, player already has a high enough card');
            return false;
          }

        }else { //player looses - does not have sufficient luck to affect ranking
            console.log('Player loses -  insufficient luck to affect ranking');
            return false;
        }

      }else { // ranks are the same      
        if (gamingParlor.playerCard.suit > gamingParlor.oponentCard.suit){ // player wins naturally due to highest suit
            console.log('Player wins due to highest suit');
            return true;
        }else { // player will lose if luck does not kick in
          if(player.stats.luck.counter > 0) { // player luck kicks in and player wins
            console.log('Ranks are same and player got a lower suit, but player has luck and cards will be swapped');
            var tmp = gamingParlor.playerCard; //swap reference to objects   
            gamingParlor.playerCard = gamingParlor.oponentCard;
            gamingParlor.oponentCard = tmp;
            console.log('Player wins. Card is now: ' + gamingParlor.playerCard.name);
            console.log('Opponent loses. Card is now: ' + gamingParlor.oponentCard.name);
            return true;                       
          }else { // player luck does not kick in              
            console.log('Player loses. Ranks are same but player is out of luck and got lower suit');
            return false;         
          } 
        }    
      } 




    },

    dealPlayerCard: function(){
      $('#card_deal').get(0).play();
      $('#gamingParlorPage-playerCard').css("background-image", "url(img/dialogs/city/parlor/deck/back.png)");
    },


    dealOponentCard: function(){
      $('#card_deal').get(0).play();
      $('#gamingParlorPage-oponentCard').css("background-image", "url(img/dialogs/city/parlor/deck/back.png)");
    },

    revealPlayerCard: function(){
      $('#card_flip').get(0).play();
      $('#gamingParlorPage-playerCard').css("background-image", "url("+gamingParlor.playerCard.img+")");


    },

    revealOponentCard: function(){
      $('#card_flip').get(0).play();
      $('#gamingParlorPage-oponentCard').css("background-image", "url("+gamingParlor.oponentCard.img+")");

    },

    displayWinMessage: function(){
      $('#gamingParlorPage-outcomeMessage').css('color','green');
      $('#gamingParlorPage-outcomeMessage').text('YOU WON!');
    },

    displayLostMessage: function(){
      $('#gamingParlorPage-outcomeMessage').css('color','red');
      $('#gamingParlorPage-outcomeMessage').text('YOU LOST!');
    }

}; 