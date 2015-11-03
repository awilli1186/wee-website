/* global Prism */

Wee.fn.make('code', {
	init: function() {
		var scope = this;

		Prism.highlightAll();

		$('pre code').on('dblclick', function() {
			scope.$private.selectCode(this);
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