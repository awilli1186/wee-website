Wee.fn.make('common', {
	init: function() {
		var scope = this,
			$body = $(Wee._body),
			$header = $('ref:header'),
			$switch = $('ref:switch');

		// Mobile navigation
		Wee.screen.map([
			{
				max: 3,
				callback: function() {
					var $nav = $('ref:headerNav');

					$nav.hide();

					$nav.appendTo($header);
					$switch.appendTo($nav);
				}
			},
			{
				min: 4,
				init: false,
				callback: function() {
					var $nav = $('ref:headerNav'),
						$pull = $('ref:pull');

					$nav.show();

					$nav.insertAfter($pull);
					$switch.appendTo($header);
				}
			}
		]);

		$('ref:pull').on('click', function() {
			$('ref:headerNav').toggle();
		});

		// Setup color scheme picker
		this.$private.setScheme();

		$switch.on('click', function() {
			$body.addClass('-is-changing');

			scope.$private.setScheme(true);

			setTimeout(function() {
				$body.removeClass('-is-changing');
			}, 500);
		});

		// Disable mouse event outlines
		$('a').on('mousedown', function() {
			var $el = $(this);

			if ($el.css('outline-style') == 'none') {
				var outlineClass = '-no-outline';

				$el.addClass(outlineClass).on('blur', function() {
					$el.removeClass(outlineClass);
				}, {
					once: true
				});
			}
		}, {
			delegate: Wee._body
		});
	}
}, {
	/**
	 * Default the color scheme to dark
	 */
	_construct: function() {
		this.dark = true;
	},

	/**
	 * Toggle the color scheme between dark/light
	 *
	 * @private
	 * @param toggle
	 */
	setScheme: function(toggle) {
		this.dark = toggle ?
			! this.dark :
			this.getCookie('dark') != 'false';

		var d = new Date();
		d.setTime(d.getTime() + 31536000);

		document.cookie = 'dark:' + this.dark + ';expires=' + d.toUTCString();

		$(Wee._body).toggleClass('-dark', this.dark);
	},

	/**
	 * Get a cookie from the user
	 *
	 * @private
	 * @param name
	 * @returns {*|string}
	 */
	getCookie: function(name) {
		var values = document.cookie.split(';'),
			i = 0;

		for (; i < values.length; i++) {
			var value = values[i],
				split = value.split(':'),
				key = split[0].trim();

			if (key == name) {
				return split[1].trim();
			}
		}
	}
});