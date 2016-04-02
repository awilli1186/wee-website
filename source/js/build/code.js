/* global hljs */

Wee.fn.make('code', {
	init: function() {
		var priv = this.$private;

		// Highlight code blocks
		$('pre code').each(
			hljs.highlightBlock
		);

		$('code').on('dblclick', function(e, el) {
			priv.selectCode(el);
		});
	}
}, {
	/**
	 * Select all markup in a code block
	 *
	 * @private
	 * @param {HTMLElement} el - target code wrapper
	 */
	selectCode: function(el) {
		var range = $._doc.createRange(),
			sel = $._win.getSelection();

		range.selectNodeContents(el);

		sel.removeAllRanges();
		sel.addRange(range);
	}
});