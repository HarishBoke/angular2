function init(){
	var wordsData = "";
	initData();

	var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
       startGame();	
    }
    else setTimeout(arguments.callee, 100);
}
function loadJSON(callback) {
	var xobj =  new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'assets/words.json', true);
	xobj.onreadystatechange = function() {
		if(xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	}
	xobj.send(null);
}
function initData() {
	loadJSON(function(response) {
		wordsData =  JSON.parse(response);
	});
}
function startGame(){
	document.getElementById("restartGame").style.display = "none";
	document.getElementById("gameContainer").innerHTML = "";
	generateNumber();
}
function generateNumber(){
	var minimum = 6, maximum = 12;
	var randomNumber = Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
	fillData(randomNumber);
}
function fillData(randomNumber){
	var tilesArray = [];
	// generate columns
	for(var i = 0; i < randomNumber*2; ++i){
		document.getElementById("gameContainer").innerHTML += "<div class='generatedColumn animated rotateIn col-xs-4'  name='col_"+i+"' id='col_"+i+"'></div>";
	}
	var printedColumns = document.querySelectorAll('.generatedColumn');
	
	//generate data as per columns
	for(var i = 0; i < randomNumber; ++i){
		tilesArray.push(wordsData.data[i]);
	}
	var tilesImgArray = tilesArray.concat(tilesArray);

	// assign data to columns 
	for(var j= 0; j < randomNumber*2; ++j){
		document.querySelectorAll('.generatedColumn')[j].innerHTML = "<img src="+tilesImgArray[j].image+" alt="+tilesImgArray[j].phrase+">";
	}
	toggleTiles(printedColumns);
}
function toggleTiles(printedColumns){
	var visibleTiles = [];
	var visibleImgName = [];
	
	document.getElementById("gameContainer").addEventListener("click", function(e){
		if (e.target && e.target.nodeName == "DIV") {
				//toggle tiles::starts
				if (e.target.children[0].style.visibility == "hidden" || e.target.children[0].style.visibility==''){
						visibleTiles.push(e.target.attributes.name.value);
						visibleImgName.push(e.target.children[0].alt);

						e.target.children[0].className ="animated flipInX";
						e.target.children[0].style.visibility = 'visible';	
					} 

					if(visibleTiles.length >= 2){
						matchPairs(visibleTiles,visibleImgName);
					}
					
			}
	});
}
function resetMatch(visibleTiles,visibleImgName) {
	visibleTiles.splice(0,2);
	visibleImgName.splice(0,2);
	gameContainer.style.pointerEvents = 'all';
}
function gameOver(){
	if(document.querySelectorAll('.generatedColumn').length == 0){
		document.getElementById("restartGame").style.display =  "block";
	}
	else{
		document.getElementById("restartGame").style.display = "none";
	}
}
function matchPairs(visibleTiles,visibleImgName) {
	var successNotification = document.getElementById("success-notification");
	var errorNotification = document.getElementById("error-notification");
	var gameContainer = document.getElementById("gameContainer");

	// if tiles match 
	if(visibleTiles[0] != visibleTiles[1] && visibleImgName[0] == visibleImgName[1]){
		successNotification.style.display = "block";
		gameContainer.style.pointerEvents = 'none';
		setTimeout(function(){
			errorNotification.style.display = "none";
			successNotification.style.display = "none";
			gameContainer.removeChild(document.getElementById(visibleTiles[0]));
			gameContainer.removeChild(document.getElementById(visibleTiles[1]));
			resetMatch(visibleTiles,visibleImgName);
			gameOver();
		},1000);
	}
	// if tiles do not match 
	else {
		errorNotification.style.display = "block";
		gameContainer.style.pointerEvents = 'none';
		setTimeout(function(){				
			errorNotification.style.display = "none";
			successNotification.style.display = "none";
			document.getElementById(visibleTiles[0]).children[0].style.visibility = 'hidden';
			document.getElementById(visibleTiles[1]).children[0].style.visibility = 'hidden';
			resetMatch(visibleTiles,visibleImgName);
		},1000);
	}
}
init();