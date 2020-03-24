

var default_bingoSize = 2
var default_bingoMin = 1
var default_bingoMax = 99
var default_bingoWidth = 5
var default_bingoHeight = 5
var default_bingoText = "bingo"

var displaymenufragment = document.createDocumentFragment();
var generationmenufragment = document.createDocumentFragment();
/*
var menutable_1 = menufragment.appendChild(document.createElement("table"))
var menutableHeader = menutable_1.appendChild(document.createElement("tr"))
var menutableRow = menutable_1.appendChild(document.createElement("tr"))
*/
var settings = {}
function appendSetting(menufragment, settingName, settingElement) {
	var menutable = menufragment.appendChild(document.createElement("table"))
	menutable.className = "setting"
	menutable.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).appendChild(document.createTextNode(settingName))
	menutable.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).appendChild(settingElement)
	settings[settingName] = menutable
	//menutableHeader.appendChild(document.createElement("td")).appendChild(document.createTextNode(settingName))
	//menutableRow.appendChild(document.createElement("td")).appendChild(settingElement)
}

var bingoStyleSelect = document.createElement("select")
for (var i = 1; i <= 4; i++) {
	var option = document.createElement("option")
	option.value = i;
	option.textContent = "Bingo Style " + i
	bingoStyleSelect.appendChild(option)
}
bingoStyleSelect.onchange = function() {SwitchBingoStyle(this.value)}
appendSetting(displaymenufragment, "Style", bingoStyleSelect)

var bingoSizefragment = document.createDocumentFragment();
var bingoSizeRange = document.createElement("input")
bingoSizeRange.type = "range"
bingoSizeRange.min = 1
bingoSizeRange.max = 10
bingoSizeRange.value = default_bingoSize
bingoSizeRange.step = 0.1
var bingoSizeInput = document.createElement("input")
bingoSizeInput.type = "number"
bingoSizeInput.value = default_bingoSize
bingoSizeInput.min = 0
bingoSizeRange.oninput = function() {ChangeBingoSize(this.value); bingoSizeInput.value = this.value;}
bingoSizeInput.oninput = function() {ChangeBingoSize(this.value); bingoSizeRange.value = this.value;}
bingoSizefragment.appendChild(bingoSizeRange)
bingoSizefragment.appendChild(bingoSizeInput)
bingoSizefragment.appendChild(document.createTextNode("em"))

appendSetting(displaymenufragment, "Size", bingoSizefragment)

/*
var menutable_2 = menufragment.appendChild(document.createElement("table"))
menutableHeader = menutable_2.appendChild(document.createElement("tr"))
menutableRow = menutable_2.appendChild(document.createElement("tr"))
*/
var mode = 0
var bingoModeButton = document.createElement("button")
bingoModeButton.textContent = "Number mode"
function defaultMode() {
	//number mode
	mode = 0
	bingoModeButton.textContent = "Number mode"
	settings["Min"].style.display = "";
	settings["Max"].style.display = "";
	settings["Text"].style.display = "";
}
bingoModeButton.onclick = function() {
	++mode;
	switch (mode) {
		case 1:
		bingoModeButton.textContent = "Image mode"
		settings["Min"].style.display = "none";
		settings["Max"].style.display = "none";
		settings["Text"].style.display = "none";
		break;
		default:defaultMode()
	}
}
appendSetting(generationmenufragment, "Mode", bingoModeButton)

var bingoTextInput = document.createElement("input")
bingoTextInput.value = default_bingoText
appendSetting(generationmenufragment, "Text", bingoTextInput)

var bingoMinInput = document.createElement("input")
bingoMinInput.type = "number"
bingoMinInput.value = default_bingoMin
appendSetting(generationmenufragment, "Min", bingoMinInput)

var bingoMaxInput = document.createElement("input")
bingoMaxInput.type = "number"
bingoMaxInput.value = default_bingoMax
appendSetting(generationmenufragment, "Max", bingoMaxInput)

var bingoWidthInput = document.createElement("input")
bingoWidthInput.type = "number"
bingoWidthInput.min = 0
bingoWidthInput.value = default_bingoWidth
appendSetting(generationmenufragment, "Width", bingoWidthInput)

var bingoHeightInput = document.createElement("input")
bingoHeightInput.type = "number"
bingoHeightInput.min = 0
bingoHeightInput.value = default_bingoHeight
appendSetting(generationmenufragment, "Height", bingoHeightInput)

function generateBingos(num) {
	for (var i = num - 1; i >= 0; i--) {
		bingoContainer.appendChild(GenerateTable(
			parseInt(bingoMinInput.value),
			parseInt(bingoMaxInput.value),
			parseInt(bingoWidthInput.value),
			parseInt(bingoHeightInput.value),
			bingoTextInput.value
		))
	}
}

var bingoGeneratefragment = document.createDocumentFragment();
var bingoGenerate1Button = document.createElement("button")
bingoGenerate1Button.textContent = "1"
bingoGenerate1Button.onclick = function() {generateBingos(1)}
bingoGeneratefragment.appendChild(bingoGenerate1Button)

var bingoGenerate10Button = document.createElement("button")
bingoGenerate10Button.textContent = "10"
bingoGenerate10Button.onclick = function() {generateBingos(10)}
bingoGeneratefragment.appendChild(bingoGenerate10Button)

var bingoGenerate100Button = document.createElement("button")
bingoGenerate100Button.textContent = "100"
bingoGenerate100Button.onclick = function() {generateBingos(100)}
bingoGeneratefragment.appendChild(bingoGenerate100Button)

appendSetting(generationmenufragment, "Generate", bingoGeneratefragment)

var bingoClearButton = document.createElement("button")
bingoClearButton.textContent = "Clear All"
bingoClearButton.onclick = function() {bingoContainer.textContent = ""}
appendSetting(generationmenufragment, "Delete", bingoClearButton)

var bingoPrintButton = document.createElement("button")
bingoPrintButton.textContent = "Print"
bingoPrintButton.onclick = function() {window.print()}
appendSetting(generationmenufragment, "Print", bingoPrintButton)


defaultMode()

displaymenuElement.appendChild(displaymenufragment)
generationmenuElement.appendChild(generationmenufragment)