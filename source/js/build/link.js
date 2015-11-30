Wee.fn.make('link', {
	init: function() {
		var $link = $('.intro__link');

		if ($link.length) {
			Wee.data.request({
				url: '/map.json',
				json: true,
				success: function(json) {
					var href = $link.attr('href'),
						split = href.split('/'),
						section = split.slice(-2, -1),
						file = split.slice(-1);

					if (json[section] && json[section][file]) {
						var data = json[section][file];

						$('.doc__anchor').each(function(el) {
							var $el = $(el),
								id = $el.attr('id');

							if (data[id]) {
								$el.parent()
									.append('<a href="' + href + '#L' + data[id] + '" class="doc__link">' +
										'<span class="souce-link">View on GitHub</span>' +
										'</a>');
							}
						});
					}
				}
			});
		}
	}
});