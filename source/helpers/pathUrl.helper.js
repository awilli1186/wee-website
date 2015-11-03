Wee.view.addHelper('pathUrl', function() {
	return this.val.toLowerCase()
		.replace(/(content\/|.md|\$)/g, '')
		.replace(/\/([^\/]*)$/, '#$1')
		.replace('#intro', '');
});