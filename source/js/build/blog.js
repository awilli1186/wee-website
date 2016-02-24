Wee.fn.make('blog', {
	init: function() {
		$._win.disqus_shortname = 'weepower'; // jscs:ignore

		$.assets.load({
			files: 'https://' + disqus_shortname + '.disqus.com/embed.js' // jscs:ignore
		});
	}
});