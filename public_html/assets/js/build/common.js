/* global tinyscrollbar */

Wee.fn.make('common', {
	init: function() {
		// Sidebar scrolling
		this.$private('initScrolling');

		// Active subnav highlighting
		this.$private('initHighlight');

		// Mobile navigation
		$('ref:mobileNav').on('click', function() {
			$('ref:primary').toggleClass('primary--slide');
		});
	}
}, {
	_construct: function() {
		this.$win = $(Wee._win);
	},
	initScrolling: function() {
		$('ref:scroll').each(function(el) {
			$(el).append('<div class="scrollbar"><div class="track"><div class="thumb"></div></div></div>');
			tinyscrollbar(this);
		});
	},
	initHighlight: function() {
		this.$subnavLinks = $('ref:subnav').find('a');

		this.$win.on({
			resize: function() {
				$('.js-overview').css('top', 0);
				this.setOffsets();
			},
			scroll: this.setActive
		}, {
			init: true,
			scope: this
		});
	},
	setOffsets: function() {
		this.offsets = [];

		this.$subnavLinks.each(function(el) {
			var ref = $(el).attr('href');
			this.offsets.push($(ref).offset().top);
		}, {
			scope: this
		});
	},
	setActive: function() {
		var min = this.$win.scrollTop() + 100,
			i = 0;

		for (; i < this.offsets.length; i++) {
			if (this.offsets[i + 1] > min) {
				if (this.active !== i) {
					this.$subnavLinks.removeClass('is-active').eq(i).addClass('is-active');
					this.active = i;
				}

				return;
			}
		}
	}
});