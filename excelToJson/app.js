node_xj = require("xlsx-to-json");
node_xj({
	input: "productSearch.xlsx", // input xls 
	output: "output.json" // output json 
}, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log(result);
	}
});