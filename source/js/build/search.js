Wee.fn.make('search', {
	init: function() {
		var scope = this,
			$search = $('ref:search'),
			searchExpanded = false;

		$('ref:searchButton').on('click', function() {
			$search.toggleClass('-is-expanded', ! searchExpanded);

			if (! searchExpanded) {
				setTimeout(function() {
					$('ref:searchInput')[0].focus();
				}, 10);
			}

			searchExpanded = ! searchExpanded;
		});

		$('ref:searchInput').on({
			keydown: function(e) {
				if (e.keyCode === 40 || e.keyCode === 38) {
					e.preventDefault();
				}
			},
			keyup: function(e) {
				scope.$private.process(e.keyCode, this.value);
				e.preventDefault();
			},
			blur: function() {
				scope.$prev = false;
			}
		});

		$($._body).on('click', function(e) {
			setTimeout(function() {
				if (scope.$private.$active) {
					if (e.target !== $('ref:searchInput')[0]) {
						scope.collapse();
					}
				}
			}, 100);
		});
	},
	collapse: function() {
		this.$private.$active = false;
		this.$private.processing = false;

		$('ref:searchOutput').hide();
	}
}, {
	process: function(key, value) {
		var scope = this,
			activeClass = '-is-active';

		if (scope.$active) {
			scope.$active.removeClass(activeClass);
		}

		if (key === 40 || key === 38) {
			if (scope.$active) {
				scope.$active = key === 40 ?
					scope.$active.next() :
					scope.$active.prev();
			} else {
				scope.$entries = $('ref:searchResults').children();

				if (scope.$entries.length) {
					scope.$active = key === 40 ?
						scope.$entries.first() :
						scope.$entries.last();
				} else {
					scope.$active = false;
				}
			}

			if (scope.$active.length) {
				scope.$active.addClass(activeClass);
			} else {
				scope.$active = false;
			}
		} else if (key === 13 && scope.$active) {
			location.href = scope.$active.find('a')[0].href;
		} else if (key === 27 || key === 9) {
			scope.$public.collapse();
		} else {
			var val = value;

			if (val.length > 2) {
				if (! scope.processing) {
					scope.processing = true;

					setTimeout(function() {
						scope.query(val);
					}, 500);
				}
			} else {
				$('ref:searchOutput').hide();
				scope.$public.collapse();
			}
		}
	},
	query: function(val) {
		var scope = this;

		Wee.data.request({
			url: 'https://llxgy0e3h1-dsn.algolia.net/1/indexes/docs',
			data: {
				query: val,
				hitsPerPage: 6,
				'x-algolia-api-key': 'f3b959d6c167a564eeef83ecebd62191',
				'x-algolia-application-id': 'LLXGY0E3H1'
			},
			jsonp: true,
			success: function(data) {
				var $output = $('ref:searchOutput');

				if (data.nbHits > 0) {
					var content = Wee.view.render('search', data);

					$('ref:searchResults').html(content);
					$output.show();
				} else {
					$output.hide();
				}

				scope.processing = false;
			}
		});
	}
});