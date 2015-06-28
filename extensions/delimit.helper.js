Wee.view.addFilter('delimit', function() {
	var val = this.val,
		total = val.length;

	this.val.forEach(function(el, i) {
		if (i + 1 < total) {
			val[i].delimiter = ',';
		}
	});
});