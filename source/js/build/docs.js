/* global ga, tinyscrollbar */

Wee.fn.make('docs', {
	init: function() {
		var scope = this;

		Wee.screen.map([
			{
				max: 2,
				once: true,
				callback: function() {
					// Mobile navigation
					//$('ref:mobileNav').on('click', function() {
					//	$('ref:inner').toggleClass(activeClass);
					//});
				}
			},
			{
				min: 3,
				once: true,
				scope: this,
				callback: function() {
					Wee.sidebar.init();
					Wee.sidebar.initScrolling();
				}
			}
		]);

		Wee.history.init({
			partials: 'title, main, .sublinks',
			bind: {
				click: 'a'
			},
			begin: function(conf) {
				if (conf.path === '/') {
					Wee._win.location = '/';

					return false;
				}
			},
			request: {
				success: function() {
					//ga('send', 'pageview');
				}
			}
		});

		var $navLinks = $('a', 'ref:scroll'),
			activeClass = '--is-active';

		$navLinks.on('click', function() {
			$navLinks.removeClass(activeClass);
			$(this).addClass(activeClass);
		});
	}
});