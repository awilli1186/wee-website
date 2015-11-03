/* global CollapsibleLists */

Wee.routes.map({
	'$any:once': 'common',
	'$seg': {
		'$any:once': [
			'docs',
			'search'
		],
		'$any': [
			'code',
			'sidebar'
		]
	},
	'start': {
		'structure': function() {
			Wee.assets.load({
				files: '/assets/js/lib/vendor/CollapsibleLists.min.js',
				success: function() {
					CollapsibleLists.applyTo($.first('.doc__collapsible ul'));
				}
			});
		}
	},
	'blog': {
		'$slug': 'blog'
	},
	'style': {
		'customize': 'customize'
	}
});

Wee.ready('routes:run');