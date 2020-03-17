
let gameArray=['#FF6347','#FF6347','#FF0000','#FF0000', '#808000', '#808000', '#00FF00', '#00FF00','#008000', '#008000', '#00FFFF', '#00FFFF','#008080', '#008080', '#FFFFCC', '#FFFFCC', '#000080', '#000080',  '#FF00FF', '#FF00FF','#800080', '#800080',  '#808080', '#808080']
let gameValues= [];
let tileIDs=[];
let tilesFlipped=0;
let score=0;
let turnCount = 0;
let player1Score = 1;
let player2Score = 1;
let playerID = null;

//Fisher-Yates shuffle algorithm 
Array.prototype.tileShuffle = function () {
	for (let i = this.length-1; i >= 0; i--) {
	  let randomIndex = Math.floor(Math.random() * (i + 1)); // Ex.randomIndex=0.5*(1+1)=1
	  let itemAtIndex = this[randomIndex]; //itemAtIndex (temp to swap the values)
	  this[randomIndex] = this[i];
	  this[i] = itemAtIndex;
	}
  }

// Array.prototype.tileShuffle=function(){ 
// 	console.log("arrayProtoShuffle called");
//     let i= this.length, j, temp;
//     while (--i>0){
//        j=Math.floor(Math.random() * (i+1));
//         temp=this[j];
//         this[j]=this[i];
//         this[i]=temp;
//     }
// } // j is to generate random index and temp is to swap the values
 
//gameArray.tileShuffle();
console.log("on page load");
function newBoard(){
	console.log("newBoard Created");
	tilesFlipped = 0;
	console.log("tilesFlipped count: "+tilesFlipped);
	var output = '';
	console.log("initial output:" +output);
	gameArray.tileShuffle();
	console.log(gameArray);
    for (let i=0; i<gameArray.length; i++){
    
	  output+= '<div id="tile_'+i+'"  onclick="flipTile(this, \''+gameArray[i]+'\')";"></div>'
	}
	//console.log("loop started");
	document.getElementById('gameBoard').innerHTML = output;
	//console.log("output result\n"+output);
}

function flipTile(tile,val){
	//console.log("flipTile function called");
	//console.log(tile.id);
	//console.log("gameValues.length:"+gameValues.length);
	//console.log("empty inner"+tile.innerHTML);
	//console.log("val"+val);
	if(gameValues.length < 2){
	  tile.style.backgroundColor =val;
	  console.log("tile color"+tile.style.backgroundColor)
		//tile.innerHTML = '<img class="img-responsive" src="images/'+ val +'.png"/>';
		
		if(gameValues.length == 0){
			gameValues.push(val);
			tileIDs.push(tile.id);
			console.log('%c game value 0 ', 'background: #222; color: #bada55');
		
		} else if(gameValues.length == 1){
			gameValues.push(val);
			tileIDs.push(tile.id);
			console.log('%c game value 1', 'background: #222; color: blue');
 
			if(gameValues[0] == gameValues[1]){
				tilesFlipped += 2;
				//score=score+1;	
				// alert(document.getElementById('score').innerHTML=score);
				// if match is found both arrays are cleared
				gameValues = [];
				tileIDs = [];
				// console.log('%c match found', 'background: #222; color:green');
				
				// TurnCount is incremented and turn is passed to next player
            	turnCount ++;
            	setTimeout(currentPlayer,500);
            	// increase the respective player's score
            	if (playerID ===1){
            		$('#player1Score').html(player1Score++);	
            	} else {
            		$('#player2Score').html(player2Score++);
				}
				
				/*ends here*/
				// Check to see if the whole board is cleared
				if(tilesFlipped == gameArray.length){
					//alert("Board cleared... generating new board");
					//document.getElementById('gameBoard').innerHTML = "";
					console.log("flip2Back");
					//new code*/
					if (player1Score > player2Score) {
						
						alert("Player 1 Wins");   

					} else if (player2Score > player1Score) {
							
						alert("Player 2 Wins");

					} else {
						
						alert("Game is Tie");

					};
					// clear the board, reset the turnCount, set newBoard.
					turnCount = 0;
					newBoard(); 
				}
			} else {
				function flip2Back(){
					// Flip the 2 tiles face down
					console.log("flip2Back");
				    let tile_1 = document.getElementById(tileIDs[0]);
				    let tile_2 = document.getElementById(tileIDs[1]);
					//tile_1.style.background = "url('./images/PlainTile.png') no-repeat";
					tile_1.style.backgroundColor='lightslategrey'; 
					tile_2.style.backgroundColor='lightslategrey'; 
				    // Clear both arrays
				    gameValues = [];
            	    tileIDs = [];
				}
				setTimeout(flip2Back, 700);
				/*new code*/
				// increase the turn count, switch players.
				turnCount ++;
				setTimeout(currentPlayer,500);
			      /*ends*/



			}
		}
	}
}  

//which player's turn? 
var currentPlayer = function(){
	if (turnCount %2 === 0) {
		playerID = 1;
		// adding text shadow highlight to player 1, remove from player 2.
		$('#player1Div').css({"textShadow": "3px 2px coral"});
		$('#player2Div').css({"textShadow": ""});
		
	} else {
		playerID = 2;
		//if it's 2nd player's turn, highlight player 2 name and remove highlight from player 1.
		$('#player2Div').css({"textShadow": "3px 2px coral"});
		$('#player1Div').css({"textShadow": ""});
		console.log(playerID);
	}
};

//  RESET BUTTON (to reloading the page)

$('#resetButton').on('click', function(){  
	turnCount =0;
	$('#player1Score').html('&nbsp;');
	$('#player2Score').html('&nbsp');
	//$('#player1P').html('&nbsp');
	//$('#player2P').html('&nbsp');
	$('#player1Div').css({"textShadow": ""});
	$('#player2Div').css({"textShadow": ""});
	player1Score = 1;
	player2Score = 1;
	newBoard();	
});
