Wee.fn.make('blog', {
	init: function() {
		Wee._win.disqus_shortname = 'weepower';

		Wee.assets.load({
			files: '//' + disqus_shortname + '.disqus.com/embed.js'
		});
	}
});