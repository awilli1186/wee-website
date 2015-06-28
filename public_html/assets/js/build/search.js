Wee.fn.make('search', {
	init: function() {
		var scope = this;

		$('ref:searchInput').on({
			'keydown': function(e) {
				if (e.keyCode === 40 || e.keyCode === 38) {
					e.preventDefault();
				}
			},
			'keyup': function(e) {
				scope.$private.process(e.keyCode, this.value);
				e.preventDefault();
			},
			'blur': function() {
				scope.$prev = false;
			}
		});

		$(Wee._body).on('click', function(e) {
			if (e.target !== $('ref:searchInput')[0]) {
				scope.collapse();
			}
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
			activeClass = '--is-active';

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
			scope.$active.find('a').first().trigger('click');
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
		Wee.data.request({
			url: 'https://llxgy0e3h1-dsn.algolia.net/1/indexes/docs',
			data: {
				query: val,
				hitsPerPage: 10,
				'x-algolia-api-key': 'f3b959d6c167a564eeef83ecebd62191',
				'x-algolia-application-id': 'LLXGY0E3H1'
			},
			jsonp: true,
			success: function(data) {
				var content = '';

				if (data.nbHits > 0) {
					data.hits.forEach(function (obj) {
						content += Wee.view.render(
							'<li class="search__results__entry">' +
							'<a href="{{url}}" class="search__results__link">' +
							'<h4 class="search__results__title">{{title}}</h4>' +
							'{{#description|notEmpty}}' +
							'<p class="search__results__desc">{{description}}</p>' +
							'{{/description}}' +
							'</a>' +
							'</li>',
							obj
						);
					});
				} else {
					$('ref:searchOutput').hide();
				}

				$('ref:searchOutput').show()
					.find('ref:searchResults').html(content);

				Wee.search.processing = false;
			}
		});
	}
});