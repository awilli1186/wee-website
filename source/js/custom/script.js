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
		'structure': 'structure'
	},
	'blog': {
		'$slug': 'blog'
	},
	'style': {
		'customize': 'customize'
	}
});

Wee.ready('routes:run');