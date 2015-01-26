Wee.view.addHelper('tag', function() {
	var helpers = '|' + this.helpers.filter(function(el) {
		return el !== 'tag';
	}).join('|').replace(/\|+$/, '');

	return '{{' + this.tag + helpers + '}}';
});