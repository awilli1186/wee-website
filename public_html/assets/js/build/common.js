/* global tinyscrollbar */

Wee.fn.make('common', {
	init: function() {
		// Sidebar scrolling
		this.$private('initScrolling');

		// Active subnav highlighting
		this.$private('initHighlight');

		// Insert GitHub links to blocks
		this.$private('matchBlocks');

		// Mobile navigation
		$('ref:mobileNav').on('click', function() {
			$('ref:primary').toggleClass('primary--slide');
		});

		// Initialize search
		(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
			(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
			e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
		})(window,document,'script','//s.swiftypecdn.com/install/v1/st.js','_st');

		_st('install','hj1HofVyCj-c6n4fxX_u');
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
	},
	matchBlocks: function() {
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
							$this.parent().append('<a href="' + href + '#L' + data[id] + '" class="doc__link">→</a>');
						}
					});
				}
			});
		}
	}
});