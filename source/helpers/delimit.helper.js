Wee.view.addHelper('delimit', function() {
	if (this.index < this.data.content.length - 1) {
		this.val.delimiter = ',';
	}

	return this.val;
});