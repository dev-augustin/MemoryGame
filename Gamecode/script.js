//let gameArray=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
//let gameArray=['red','red','blue','blue','blue','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
//let gameArray=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','./images/timer.png','./images/timer.png'];
let gameArray=['#FF6347','#FF6347','#FF0000','#FF0000', '#808000', '#808000', '#00FF00', '#00FF00','#008000', '#008000', '#00FFFF', '#00FFFF','#008080', '#008080', '#FFFFCC', '#FFFFCC', '#000080', '#000080',  '#FF00FF', '#FF00FF','#800080', '#800080',  '#808080', '#808080']
//let gameArray=[['blue','#000000'], ['blue','#000000'],['green','#FF0000'], ['green','#FF0000']]
let gameValues= [];
let tileIDs=[];
let tilesFlipped=0;
let score=0;
//newly added
var turnCount = 0;
var player1Score = 1;
var player2Score = 1;
var playerID = null;

Array.prototype.tileShuffle=function(){
	console.log("arrayProtoShuffle called");
    let i= this.length, j, temp;
    while (--i>0){
       j=Math.floor(Math.random() * (i+1));
        temp=this[j];
        this[j]=this[i];
        this[i]=temp;
    }
}
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
    
	  //output+= '<div id="tile_'+i+'" style="background-color:'+gameArray[i]+'"  onclick="flipTile(this,\''+gameArray[i]+'\')";"></div>';
	  output+= '<div id="tile_'+i+'"  onclick="flipTile(this, \''+gameArray[i]+'\')";"></div>';
	  
	  //style="background-color:lightblue" "document.body.style.backgroundColor = 'green';"
	  //output+= '<div id="tile_'+i+'" onclick="flipTile(this, style="background-color:'+gameArray[i]+'")";"></div>';
	}

	console.log("loop started");
	// output+= '<div id="tile_'+i+'" onclick="flipTile(this,\''+gameArray[i]+'\')";"></div>';
	// // 	//output += `<div id= 'tile_${i}'  style='background-color:${gameArray[i]}' ></div>`;
	// 	output += `<div id= 'tile_${i}'  style='background-color:lightblue' ></div>`;
	
	// } cardElement[i].style.backgroundColor = colors[i]
	 //console.log("what is tile"+tile.id);
	document.getElementById('gameBoard').innerHTML = output;
	//document.getElementById('gameBoard').appendChild = g;
	console.log("output result\n"+output);
	//flipTile(tile,val); <div id="tile_23" onclick="flipTile(this,' style.backgroundColor="#00FFFF"')";"></div>
	console.log("hiii welcome ");
	
	//document.getElementById('gameBoard').style.backgroundColor = colors[i];
	//return output;
}




// let result1="";
// function colorCheck(){
// 	for(let i=0; i<12;i++){
// 		 result1[i]=gameArray[i].tileShuffle();
// 	}
// 	retrun result[i];

function flipTile(tile,val){
	console.log("flipTile");
	console.log(tile.id);
	console.log("gameValues.length:"+gameValues.length);
	console.log("empty inner"+tile.innerHTML);
	console.log("val"+val);

	
	//if(tile.innerHTML == "" && gameValues.length < 2){
	//tile.style.backgroundColor = gameArray[Math.floor(Math.random() * gameArray.length)];
	//tile.innerHTML=val;
	if(gameValues.length < 2){
	  tile.style.backgroundColor =val;
	 console.log("tile co"+tile.style.backgroundColor)
		//tile.innerHTML= '<div style.backgroundColor=val/>'
		//tile.innerHTML = '<img class="img-responsive" src="images/'+ val +'.png"/>';
		
		if(gameValues.length == 0){
			gameValues.push(val);
			tileIDs.push(tile.id);
			//console.log("game value 0")
			console.log('%c game value 0 ', 'background: #222; color: #bada55');
		
			//tileIDS.style.backgroundColor="#800080";
			//tile.style.backgroundColor="#800080";
		} else if(gameValues.length == 1){
			gameValues.push(val);
			tileIDs.push(tile.id);
			//console.log("game value 1")
			console.log('%c game value 1', 'background: #222; color: blue');
 
			if(gameValues[0] == gameValues[1]){
				tilesFlipped += 2;
				//score=score+1;	
				// alert(document.getElementById('score').innerHTML=score);
				// document.getElementById('score').innerHTML=score;
				// // Clear both arrays
				gameValues = [];
				tileIDs = [];
				// console.log("match found");
				// console.log('%c match found', 'background: #222; color:green');
				// alert("match found");
				/*  newly added code*/
				/////////// TurnCount is increased and the next player is up
            	turnCount ++;
            	setTimeout(currentPlayer,500);
            	////// increase the appropriate player's score
            	if (playerID ===1){
            		$('#player1Score').html(player1Score++);	
            	} else {
            		$('#player2Score').html(player2Score++);
				}
				
				/*ends here*/
				// Check to see if the whole board is cleared
				if(tilesFlipped == gameArray.length){
					alert("Board cleared... generating new board");
					//document.getElementById('gameBoard').innerHTML = "";
					console.log("flip2Back");
					//new code*/
					if (player1Score > player2Score) {
						
						alert("Player 1: #winning. Let's play again!");   

					} else if (player2Score > player1Score) {
							
						alert("Heck yeah, Player 2! Let's play again!");

					} else {
						
						alert("Well look at that. You're both winners! Let's play again!");

					};
					/////// clear the board, reset the turnCount, set newBoard.
					document.getElementById('gameBoard').innerHTML = "";
					turnCount = 0;
					/*ends here*/
					newBoard(); /*old code*/
				}
			} else {
				function flip2Back(){
					// Flip the 2 tiles back over
					//alert("flip2Back");
					console.log("flip2Back");
				    let tile_1 = document.getElementById(tileIDs[0]);
				    let tile_2 = document.getElementById(tileIDs[1]);
					//tile_1.style.background = "url('./images/PlainTile.png') no-repeat";
					tile_1.style.backgroundColor='lightslategrey'; 
            	    //tile_1.innerHTML = "";
					//tile_2.style.background = "url('./images/PlainTile.png')no-repeat";
					tile_2.style.backgroundColor='lightslategrey'; 
            	    //tile_2.innerHTML = "";
				    // Clear both arrays
				    gameValues = [];
            	    tileIDs = [];
				}
				setTimeout(flip2Back, 700);
				/*new code*/
				//// increase the turn count, switch players.
				turnCount ++;
				setTimeout(currentPlayer,500);
			      /*ends*/



			}
		}
	}
}
    

////////  whose turn is it? 
var currentPlayer = function(){
	if (turnCount %2 === 0) {
		playerID = 1;
		//////// add text shadow highlight to player 1, remove from player 2.
		$('#player1Div').css({"textShadow": "3px 2px coral"});
		$('#player2Div').css({"textShadow": ""});
		
	} else {
		playerID = 2;
		////// if it's 2nd player's turn, highlight player 2 name and remove highlight from player 1.
		$('#player2Div').css({"textShadow": "3px 2px coral"});
		$('#player1Div').css({"textShadow": ""});
		console.log(playerID);
	}
};

///////  RESET BUTTON (same as reloading the page)

$('#resetButton').on('click', function(){  
	turnCount =0;
	$('#player1Score').html('&nbsp;');
	$('#player2Score').html('&nbsp');
	$('#player1P').html('&nbsp');
	$('#player2P').html('&nbsp');
	player1Score = 1;
	player2Score = 1;
	newBoard();
	//$('#launchModalButton').show();
	//$('#gameBoard').html(null);
	//$('#headerTitle').show();
	

});
