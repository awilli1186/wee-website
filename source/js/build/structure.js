/* global CollapsibleLists */

Wee.fn.make('structure', {
	init: function() {
		Wee.assets.load({
			files: '/assets/js/lib/vendor/CollapsibleLists.min.js',
			success: function() {
				CollapsibleLists.applyTo($.first('.doc__collapsible ul'));
				Wee.sidebar.setOffsets();
			}
		});
	}
});