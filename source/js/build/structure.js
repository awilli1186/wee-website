/* global CollapsibleLists */

Wee.fn.make('structure', {
	init: function() {
		$.assets.load({
			files: '/assets/js/lib/vendor/CollapsibleLists.min.js',
			success: function() {
				// Causes bug on 'Structure' section
				// Removed from routes ('build/modules', 'start/structure'). Deemed as unnecessary.
				CollapsibleLists.applyTo($.first('.doc__collapsible ul'));
				Wee.sidebar.setOffsets();
			}
		});
	}
});