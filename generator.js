function GenerateTable(min, max, width, height, headerText) {
	var table = document.createElement("table")
	table.className = "bingo"
	if (headerText) {
		var header = document.createElement("table")
		header.className = "header"
		var headerRow = document.createElement("tr")
		for (var i = 0; i < width; i++) {
			var td = document.createElement("td")
			td.className = "hc"
			td.textContent = headerText.substr(i, 1)
			headerRow.appendChild(td)
		}
		header.appendChild(headerRow)
		table.appendChild(header)
	}
	for (var i = height - 1; i >= 0; i--) {
		var tr = document.createElement("tr")
		for (var j = width - 1; j >= 0; j--) {
			var td = document.createElement("td")
			td.className = "num"
			td.textContent = Math.floor(min + Math.random() * Math.abs(max-min+1))
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	return table
}