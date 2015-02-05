Wee.view.addHelper('tag', function() {
	var helpers = '|' + this.helpers.filter(function(el) {
		return el !== 'tag';
	}).join('|').replace(/\|+$/, '');
console.log(this.helpers)
	return '{{' + this.tag + helpers + '}}';
});