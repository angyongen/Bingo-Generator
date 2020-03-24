var displaymenuElement = document.getElementById("displaymenu")
var generationmenuElement = document.getElementById("generationmenu")
var bingoContainer = document.getElementById("bingoContainer")
var bingoStyleElement = document.getElementById("bingoStyle")
var bingoSizeStyleSheet;
var styleSheets = document.styleSheets
for(var i=0; i<styleSheets.length; i++) {
	var sheet = styleSheets[i];
	if(sheet.title == "bingoSize") {
		bingoSizeStyleSheet = sheet;
	}
}
function SwitchBingoStyle(num) {
	bingoStyleElement.href = "bingo" + num + ".css"
}

function ChangeBingoSize(num) {
	bingoSizeStyleSheet.deleteRule(0) //removeRule(0) IE
	bingoSizeStyleSheet.insertRule(".bingo {font-size: " + num + "em;}", 0); //addRule IE
}