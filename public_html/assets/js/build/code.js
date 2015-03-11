Wee.fn.make('code', {
	init: function() {
		// Bind code toggle and selection
		Wee.events.on({
			'pre code': {
				dblclick: function(e, el) {
					this.$private('selectCode', el);
				}
			}
		}, {
			scope: this
		});
	}
}, {
	selectCode: function(el) {
		var range = Wee._doc.createRange(),
		sel = Wee._win.getSelection();

		range.selectNodeContents(el);

		sel.removeAllRanges();
		sel.addRange(range);
	}
});