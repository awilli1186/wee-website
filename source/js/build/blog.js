Wee.fn.make('blog', {
	init: function() {
		Wee._win.disqus_shortname = 'weepower'; // jscs:ignore

		Wee.assets.load({
			files: 'https://' + disqus_shortname + '.disqus.com/embed.js' // jscs:ignore
		});
	}
});