
let gameArray=['#FF6347','#FF6347','#FF0000','#FF0000', '#808000', '#808000', '#00FF00', '#00FF00','#008000', '#008000', '#00FFFF', '#00FFFF','#008080', '#008080', '#FFFFCC', '#FFFFCC', '#000080', '#000080',  '#FF00FF', '#FF00FF','#800080', '#800080',  '#808080', '#808080']
//let gameArray=[['blue','#000000'], ['blue','#000000'],['green','#FF0000'], ['green','#FF0000']]
let gameValues= [];
let tileIDs=[];
let tilesFlipped=0;
let score=0;

// Array.prototype.tileShuffle=function(){
// 	console.log("arrayProtoShuffle");
//     let i= this.length, j, temp;
//     while (--i>0){
//        j=Math.floor(Math.random() * (i+1));
//         temp=this[j];
//         this[j]=this[i];
//         this[i]=temp;
//     }
// }

Array.prototype.tileShuffle = function () {
	//let input = this;
  
	for (let i = this.length-1; i >= 0; i--) {
  
	  let randomIndex = Math.floor(Math.random() * (i + 1));
	  let itemAtIndex = this[randomIndex];
  
	  this[randomIndex] = this[i];
	  this[i] = itemAtIndex;
	}
	//return input;
  }
  

gameArray.tileShuffle();

function newBoard(){
	console.log("newBoard Created");
    tilesFlipped = 0;
    var output = '';
    gameArray.tileShuffle();
    for (let i=0; i<gameArray.length; i++){

		//output += '<div id="tile_'+i+'"    ></div>'; prints only box but no value is displayed
		//let style="style="background-color:'+gameArray[i]+'";
		// works but changes color on load
	 //let color1="style.backgroundColor";
	  //output+= '<div id="tile_'+i+'" style="background-color:'+gameArray[i]+'"  onclick="flipTile(this,\''+gameArray[i]+'\')";"></div>';
	  output+= '<div id="tile_'+i+'"  onclick="flipTile(this, \''+gameArray[i]+'\')";"></div>';
	  
	  //style="background-color:lightblue" "document.body.style.backgroundColor = 'green';"
	  //output+= '<div id="tile_'+i+'" onclick="flipTile(this, style="background-color:'+gameArray[i]+'")";"></div>';
	}
	// output+= '<div id="tile_'+i+'" onclick="flipTile(this,\''+gameArray[i]+'\')";"></div>';
	// // 	//output += `<div id= 'tile_${i}'  style='background-color:${gameArray[i]}' ></div>`;
	// 	output += `<div id= 'tile_${i}'  style='background-color:lightblue' ></div>`;
	
	// } cardElement[i].style.backgroundColor = colors[i]
	 //console.log("what is tile"+tile.id);
	document.getElementById('gameBoard').innerHTML = output;
	//document.getElementById('gameBoard').appendChild = g;
	console.log("output result\n"+output);
	//flipTile(tile,val); <div id="tile_23" onclick="flipTile(this,' style.backgroundColor="#00FFFF"')";"></div>
	console.log("hiii");
	
	//document.getElementById('gameBoard').style.backgroundColor = colors[i];
	
}

let color12=[];
// let result1="";
// function colorCheck(){
// 	for(let i=0; i<12;i++){
// 		 result1[i]=gameArray[i].tileShuffle();
// 	}
// 	retrun result[i];

function flipTile(tile,val, color1){
	console.log("flipTile");
	console.log(tile.id);
	if(tile.innerHTML == "" && gameValues.length < 2){
	//tile.style.backgroundColor = gameArray[Math.floor(Math.random() * gameArray.length)];
	//tile.innerHTML=val;
	   tile.style.backgroundColor =val;
		//tile.innerHTML= '<div style.backgroundColor=val/>'
		//tile.innerHTML = '<img class="img-responsive" src="images/'+ val +'.png"/>';
		
		if(gameValues.length == 0){
			gameValues.push(val);
			tileIDs.push(tile.id);
			color12.push(gameArray[Math.floor(Math.random() * gameArray.length)]);
			//tileIDS.style.backgroundColor="#800080";
			//tile.style.backgroundColor="#800080";
		} else if(gameValues.length == 1){
			gameValues.push(val);
			tileIDs.push(tile.id);
			color12.push(gameArray[Math.floor(Math.random() * gameArray.length)]);
			console.log("color12"+color12);
			if(gameValues[0] == gameValues[1]){
				tilesFlipped += 2;
				score=score+1;	
				alert(document.getElementById('score').innerHTML=score);
				document.getElementById('score').innerHTML=score;
				// Clear both arrays
				gameValues = [];
				tileIDs = [];
			// if(color12[0] == color12[1]){
			// 	tilesFlipped += 2;
			// 	// Clear both arrays
			// 	gameValues = [];
			// 	tileIDs = [];
			// 	color12=[];
				// Check to see if the whole board is cleared
				if(tilesFlipped == gameArray.length+15){
					alert("Board cleared... generating new board");
					document.getElementById('gameBoard').innerHTML = "";
					console.log("flip2Back");

					newBoard();
				}
			} else {
				function flip2Back(){
					// Flip the 2 tiles back over
					console.log("flip2Back");
				    let tile_1 = document.getElementById(tileIDs[0]);
				    let tile_2 = document.getElementById(tileIDs[1]);
					//tile_1.style.background = "url('./images/PlainTile.png') no-repeat";
					tile_1.style.backgroundColor='aquamarine'; 
            	    tile_1.innerHTML = "";
					//tile_2.style.background = "url('./images/PlainTile.png')no-repeat";
					tile_2.style.backgroundColor='aquamarine'; 
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    gameValues = [];
            	    tileIDs = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
    
function restart(){
	
	newBoard();
}
