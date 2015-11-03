Wee.view.addHelper('slug', function() {
	var val = this.val.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');

	return val === '' ? 'sel' : val;
});