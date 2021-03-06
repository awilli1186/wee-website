/* global tinyscrollbar */

Wee.fn.make('sidebar', {
	init: function() {
		var isActive = '-is-active',
			$sidebarToggle = $('ref:sidebarToggle'),
			$headerNav = $('ref:headerNav'),
			$primary = $('ref:primary'),
			$footer = $('ref:footer'),
			$topNav = $('ref:topnav');

		this.$subnavLinks = $('a', 'ref:subnav');
		this.active = false;

		if (this.subScroller) {
			this.subScroller.update();
		}

		$($._win).on({
			resize: this.setOffsets,
			scroll: this.setActive
		}, {
			init: true,
			scope: this
		});

		$.screen.map([
			{
				max: 2,
				once: true,
				callback: function() {
					$sidebarToggle.on('click', function() {
						$primary.toggleClass(isActive);
						$topNav.toggleClass(isActive);
						$sidebarToggle.toggleClass(isActive);
						$footer.toggleClass(isActive);
						$headerNav.hide();
					});
				}
			},
			{
				min: 3,
				callback: function() {
					$primary.removeClass(isActive);
					$topNav.removeClass(isActive);
					$footer.removeClass(isActive);
					$sidebarToggle.removeClass(isActive);
				}
			}
		]);
	},

	/**
	 * Initialize scrollbar markup and instance
	 */
	initScrolling: function() {
		var wrapper = '<div class="scrollbar"><div class="track"><div class="thumb"></div></div></div>',
			$topnav = $('ref:topnav'),
			$subnav = $('ref:subnav');

		if ($topnav.length) {
			$topnav.append(wrapper);
			this.topScroller = tinyscrollbar($topnav[0]);
		}

		if ($subnav.length) {
			$subnav.append(wrapper);
			this.subScroller = tinyscrollbar($subnav[0]);
		}
	},

	/**
	 * Set proper offset on page load and anchor click
	 */
	setOffsets: function() {
		var scope = this,
			$body = $($._body),
			offset = 98;

		// Position initial anchor
		if (location.hash) {
			$body.scrollTop($body.scrollTop() - offset);
		}

		// Bind subnav anchor position
		scope.offsets = [];

		scope.$subnavLinks.each(function(el) {
			var $el = $(el),
				$targ = $($el.attr('href')),
				top = $targ.offset().top,
				activeClass = '-is-active';

			$el.add($targ).on('click', function(e, el) {
				location.hash = el.hash;

				$targ[0].blur();
				$body.scrollTop(top - offset);

				scope.$subnavLinks.removeClass(activeClass);
				$(el).addClass(activeClass);

				e.preventDefault();
			});

			scope.offsets.push(top);
		});
	},

	/**
	 * Handle active navigation selection
	 */
	setActive: function() {
		var min = $($._win).scrollTop() + 98,
			activeClass = '-is-active',
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