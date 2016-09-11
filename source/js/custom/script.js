$.routes.map({
	'$any:once': 'common',
	'$seg': {
		'$any:once': [
			'docs',
			'search'
		],
		'$any': [
			'code',
			'sidebar',
			'link'
		]
	},
	'blog': {
		'$slug': 'blog'
	},
	'customize': 'customize'
});

$.ready('routes:run');