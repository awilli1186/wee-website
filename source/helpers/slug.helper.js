Wee.view.addHelper('slug', function() {
	if (! this.val) {
		return '';
	}

	var val = this.val.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');

	return val === '' ? 'sel' : val;
});