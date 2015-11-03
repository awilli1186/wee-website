/* global tinyscrollbar */

Wee.fn.make('sidebar', {
	init: function() {
		this.$subnavLinks = $('a', 'ref:subnav');
		this.active = false;

		if (this.scroller) {
			this.scroller.update();
		}

		$(Wee._win).on({
			resize: function() {
				this.setOffsets();
			},
			scroll: this.setActive
		}, {
			init: true,
			scope: this
		});
	},
	initScrolling: function() {
		var wrapper = '<div class="scrollbar"><div class="track"><div class="thumb"></div></div></div>',
			$topnav = $('ref:topnav'),
			$subnav = $('ref:subnav');

		$topnav.append(wrapper);
		tinyscrollbar($topnav[0]);

		$subnav.append(wrapper);
		this.scroller = tinyscrollbar($subnav[0]);
	},
	setOffsets: function() {
		this.offsets = [];

		this.$subnavLinks.each(function(el) {
			var $el = $(el),
				ref = $el.attr('href'),
				top = $(ref).offset().top;

			$el.on('click', function(e) {
				$(Wee._body).scrollTop(top - 98);

				e.preventDefault();
			});

			this.offsets.push(top);
		}, {
			scope: this
		});
	},
	setActive: function() {
		var min = $(Wee._win).scrollTop() + 100,
			activeClass = '--is-active',
			i = 0;

		for (; i < this.offsets.length; i++) {
			var val = false;

			if (this.offsets[i + 1] > min) {
				val = i;
			} else if (min > this.offsets[this.offsets.length - 1]) {
				val = this.offsets.length - 1;
			}

			if (val !== false) {
				if (this.active !== val) {
					this.$subnavLinks.removeClass(activeClass)
						.eq(val).addClass(activeClass);

					this.active = val;
				}

				return;
			}
		}
	}
});