/* global CollapsibleLists */

Wee.routes.map({
	'$seg': {
		'$any': [
			'common',
			'code'
		]
	},
	'start': {
		'structure': function() {
			Wee.assets.load({
				files: '/assets/js/lib/vendor/CollapsibleLists.min.js',
				success: function() {
					CollapsibleLists.applyTo(Wee.$first('.doc__collapsible ul'));
				}
			});
		}
	}
});

Wee.ready(function() {
	Wee.routes.run();
});