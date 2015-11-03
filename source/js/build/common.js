Wee.fn.make('common', {
	init: function() {
		// Disable mouse event outlines
		$('a').on('mousedown', function(e) {
			var $el = $(e.target);

			if ($el.css('outline-style') == 'none') {
				var outlineClass = '--no-outline';

				$el.addClass(outlineClass).on('blur', function() {
					$el.removeClass(outlineClass);
				}, {
					once: true
				});
			}
		}, {
			delegate: Wee._body
		});

		// Setup color scheme picker
		$('ref:switch').on('click', function() {
			this.dark = this.dark === undefined ?
				(this.$private.getCookie('dark') != 'false') :
				! this.dark;

			document.cookie = 'dark:' + this.dark;

			$(Wee._body).toggleClass('--dark', this.dark);
		}, {
			init: true,
			scope: this
		});
	}
}, {
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