Wee.fn.make('link', {
	init: function() {
		var $link = $('.intro__link');

		if ($link.length && $link.attr('href').indexOf('assets') !== -1) {
			Wee.data.request({
				url: '/assets/js/map.json',
				json: true,
				success: function(json) {
					var href = $link.attr('href'),
						split = href.split('/'),
						section = split.slice(-2, -1),
						file = split.slice(-1),
						data = json[section][file];

					$('.doc__anchor').each(function(el) {
						var $this = $(el),
							id = $this.attr('id');

						if (data[id]) {
							$this.parent()
								.append('<a href="' + href + '#L' + data[id] + '" class="doc__link">→</a>');
						}
					});
				}
			});
		}
	}
});