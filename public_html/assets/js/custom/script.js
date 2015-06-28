/* global CollapsibleLists */

Wee.routes.map({
	'$seg': {
		'$any': [
			'common',
			'code',
			'search'
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
	},
	'blog': {
		'$any': 'blog'
	}
});

Wee.ready(function() {
	Wee.routes.run();
});