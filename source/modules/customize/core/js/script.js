/* global jscolor */

Wee.fn.make('customize', {
	init: function() {
		var priv = this.$private;
		priv.preview = $('ref:previewFrame')[0].contentWindow;
		priv.$variables = $('ref:variables');
		priv.$colors = $('.color');

		Wee.sidebar.initScrolling();

		priv.initAccordion();
		priv.initGenerate();
		priv.getColors();
		priv.bindSelects();
		priv.initSuggestions();

		priv.preview.onload = function() {
			priv.setupPickers();

			priv.preview.less.pageLoadFinished.then(function() {
				$('ref:preview').removeClass('-is-loading');
			});
		};
	}
}, {
	initAccordion: function() {
		var scope = this,
			activeClass = '-is-active';

		$('ref:toggle').on('click', function() {
			var $el = $(this),
				scroll = Wee.sidebar.topScroller,
				active = $el.hasClass(activeClass),
				top = $el.position().top;

			$el.next().toggle();

			if (! active) {
				$el.addClass(activeClass);
			} else {
				$el.removeClass(activeClass);
				top = Math.min(top, scope.$variables.height() - scroll.viewportSize);
			}

			scope.$variables.tween({
				top: top * -1
			});

			scroll.update(top);
		});
	},

	initGenerate: function() {
		var scope = this,
			$button = $('ref:showCode'),
			$preview = $('ref:preview'),
			$output = $('ref:output');

		$button.on('click', function() {
			if (scope.codeVisible) {
				scope.codeVisible = false;

				$output.hide();
				$preview.show();
				$button.text('Generate Variables');
			} else {
				Wee.data.request({
					url: '/assets/less/template.less',
					cache: true,
					success: function(data) {
						var temp = $.view.render(data, scope.preview.weeVariables);
						scope.codeVisible = true;

						$preview.hide();
						$output.html('<pre><code>' + temp + '</code></pre>')
							.show();
						Wee.code.init();
						$button.text('Hide Variables');
					}
				});
			}
		});
	},

	getColors: function() {
		this.colorValues = this.$colors.map(function(el) {
			return el.getAttribute('name');
		});
	},

	bindSelects: function() {
		var scope = this;

		scope.$variables.find('select').on('change', function(e, el) {
			scope.process(el);
		});
	},

	initSuggestions: function() {
		var scope = this;

		scope.$variables.find('input').on({
			keydown: function(e, el) {
				if (scope.pickers.hasOwnProperty(el.id)) {
					scope.pickers[el.id].hide();
				}

				if (e.keyCode === 40 || e.keyCode === 38) {
					e.preventDefault();
				}
			},
			keyup: function(e, el) {
				scope.suggest(e.keyCode, el);
				e.preventDefault();
			},
			blur: function(e, el) {
				if (scope.pickers.hasOwnProperty(el.id)) {
					scope.pickers[el.id].hide();
				}

				scope.process(el);
				scope.hideResults();
			},
			'click focus': function() {
				scope.hideResults();
			}
		});
	},

	suggest: function(key, el) {
		var scope = this,
			activeClass = '-is-active';

		if (scope.$active) {
			scope.$active.removeClass(activeClass);
		}

		if (key === 38 || key === 40) {
			if (scope.$active) {
				scope.$active = key === 40 ?
					scope.$active.next() :
					scope.$active.prev();
			} else {
				scope.$entries = $('ref:suggestions').children();

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
		} else if (key === 13) {
			if (scope.$active) {
				el.value = scope.$active.text();
			}

			el.blur();
		} else if (key === 27) {
			scope.hideResults();
		} else if (el.value.length) {
			scope.showResults(el);
		}
	},

	showResults: function(el) {
		var view = $.view.render('customize.suggestions', {
			suggestions: this.getMatches(el)
		});

		$('ref:suggestions').remove();
		$(el).after(view);

		this.suggestions = true;
	},

	getMatches: function(el) {
		var scope = this,
			val = el.value,
			isColor = scope.pickers.hasOwnProperty(el.id),
			matches = Object.keys(scope.preview.weeVariables).filter(function(el) {
				var color = scope.pickers.hasOwnProperty(el.substr(1));

				return el.indexOf(val) > -1 &&
					((isColor && color) || (! isColor && ! color));
			}).slice(0, 8);

		return matches.map(function(el) {
			var result = {
				name: el
			};

			if (isColor) {
				result.color = scope.pickers[el.substr(1)]
					.toHEXString()
					.toLowerCase();
			}

			return result;
		});
	},

	hideResults: function() {
		this.suggestions = false;
		this.$active = false;

		$('ref:suggestions').remove();
	},

	setupPickers: function() {
		var scope = this;
		scope.pickers = [];

		scope.$colors.each(function(el) {
			var color = scope.parseValue(el.value).response,
				picker = new jscolor(el, {
					backgroundColor: 'transparent',
					borderWidth: 0,
					insetColor: '#fff',
					padding: 15,
					shadow: false,
					uppercase: false,
					valueElement: null,
					width: 225,
					onFineChange: function() {
						var val = this.toHEXString().toLowerCase();

						el.value = val;
						scope.processColor(el, val);
					}
				});
			scope.pickers[el.id] = picker;

			el.setAttribute('data-prev', el.value);
			el.setAttribute('data-value', color);

			picker.fromString(color);
		});
	},

	process: function(el) {
		var scope = this,
			val = el.value.trim(),
			error;

		if (el.name.indexOf(val) > -1) {
			error = 'Recursive variable definition for ' + el.name;
		} else {
			var validate = scope.validate(el);

			if (! validate.valid) {
				error = 'Validation error: ' + validate.response;
			} else {
				if (scope.colorValues.indexOf(el.name) > -1) {
					var parse = scope.parseValue(val),
						resp = parse.response;

					if (! parse.valid) {
						error = resp;
					} else {
						if (resp[0] !== '#') {
							resp = this.preview.less.data.colors[resp];
						}

						scope.processColor(el, resp);
					}
				} else {
					var values = [];
					values[el.name] = val;

					scope.preview.update(values);
					el.setAttribute('data-value', val);
				}
			}
		}

		if (error) {
			scope.showMessage(error);
			el.value = el.getAttribute('data-prev') || el.defaultValue;
		} else {
			el.setAttribute('data-prev', val);
		}
	},

	parseValue: function(val) {
		var vars = this.preview.less.Parser.serializeVars(
				this.preview.weeVariables
			),
			css = vars + '#foo { value: ' + val + '; }',
			result = {};

		this.preview.less.render(css, function(err, output) {
			result = err ? {
				valid: false,
				response: err.message
			} : {
				valid: true,
				response: output.css.match(/(?:: )(.*)(?=;)/)[1]
			};
		});

		return result;
	},

	processColor: function(el, val) {
		var scope = this,
			values = [];

		if (! val) {
			val = false;
		}

		scope.pickers[el.id].fromString(val || '#fff');
		el.setAttribute('data-value', val);

		values[el.name] = val;

		scope.processDependencies(el.name, el.value, val, values);
		scope.preview.update(values);
	},

	processDependencies: function(name, value, val, values) {
		var scope = this;

		scope.$colors.each(function(el) {
			if (el.value.indexOf(name) > -1) {
				values[el.name] = val;
				scope.pickers[el.id].fromString(val);
				el.setAttribute('data-prev', value);
				scope.processDependencies(el.name, value, val, values);
			}
		});
	},

	rules: {
		auto: function(val) {
			return val.toLowerCase() === 'auto';
		},
		color: function(val) {
			return /(^#[0-9a-f]{3,6}$)/i.test(val) ||
				this.preview.less.data.colors.hasOwnProperty(val);
		},
		entity: function(val) {
			return /(^'(\\[0-9a-f]{4})+'$)/i.test(val);
		},
		false: function(val) {
			return val.toLowerCase() === 'false';
		},
		file: function(val) {
			return /(^'([\w-]+\.[\w]+)'$)/.test(val);
		},
		font: function(val) {
			var match = /(^"[\da-z]((-|_| )?[\da-z]+)*"$)|(^[\da-z]((-|_)?[\da-z]+)*$)/i;

			return val.split(',').every(function(value) {
				return match.test(value.trim());
			});
		},
		number: function(val) {
			return /(^[1-9][0-9]*$)/.test(val);
		},
		path: function(val) {
			return /(^'(\.\.\/)*([\w]+\/)*'$)/.test(val);
		},
		unit: function(val) {
			return /(^((\.\d+)|(\d+(\.\d+)?)(%|px|em|rem)?)$)/.test(val);
		}
	},

	validate: function(el) {
		var val = el.value,
			types = el.getAttribute('data-validate'),
			result = {
				valid: true
			};

		if (val.indexOf('@') > -1 || val.indexOf('(') > -1) {
			val = this.parseValue(val).response;
		}

		if (types) {
			var arr = types.split('|');

			for (var i = 0; i < arr.length; i++) {
				var type = arr[i];

				if (this.rules[type].call(this, val)) {
					return {
						valid: true,
						response: val
					};
				} else {
					result = {
						valid: false,
						response: 'Value must match type ' + arr.join(' or ')
					};
				}
			}
		}

		return result;
	},

	showMessage: function(message) {
		var $bar = $('ref:messageBar'),
			activeClass = '-is-active';

		$bar.text(message)
			.addClass(activeClass);

		setTimeout(function() {
			$bar.removeClass(activeClass);
		}, 3500);
	}
});