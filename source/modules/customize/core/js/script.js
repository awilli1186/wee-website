Wee.fn.make('customize', {
	init: function() {
		this.$private.initScrolling();
		this.$private.initAccordion();
		this.$private.initAutoComplete();
		this.$private.initPreview();
		this.$private.initModal();
		this.$private.initSelectAll();
		this.$private.getColors();
	}
}, {
	getColors: function() {
		var scope = this,
			match = /color|(\|false)?/g,
			colors = $('input').filter(function(i, el) {
				var validateColor = $(el).data('validate');

				return match.test(validateColor);
			});

		scope.colorValues = [];

		colors.each(function(el) {
			var $el = $(el);

			scope.colorValues[$el.attr('name')] = $el.val();
		});
	},
	initScrolling: function() {
		$('ref:scrollable').each(function(el) {
			$(el).append('<div class="scrollbar"><div class="track">' +
				'<div class="thumb"></div></div></div>');

			this.scrollbar = tinyscrollbar(el);
		});
	},
	updateScrollbar: function(position) {
		tinyscrollbar($('.scrollable')[0]).update(position);
	},
	initAccordion: function() {
		var scope = this;

		Wee.$setRef();

		$('ref:toggle').on('click', function() {
			var scrollAmount = Math.abs($('.accordion').css('top').replace('px', ''));

			$(this).next().toggleClass('js-hide');
			$(this).toggleClass('-is-active');

			scope.updateScrollbar($(this).offset().top + scrollAmount - $(this).height());
		});
	},
	initAutoComplete: function() {
		var scope = this,
			keyCodes = {
				arrowDown: 40,
				arrowUp: 38,
				enter: 13,
				esc: 27,
				shift: 16,
				tab: 9
			},
			preview = $('ref:previewFrame')[0].contentWindow,
			regexp = /(@[\da-z-_]+$)/i;

		$('input').on({
			keyup: function(e, el) {
				var $next = $(this).next(), // Michael - revisit
					value = el.value,
					match = value.match(regexp),
					matches = [],
					list = '',
					$currentSelection = false;

				if (scope.autocompleteShowing && e.keyCode === keyCodes.shift) {
					scope.shiftHeld = false;
				} else if ((scope.autocompleteShowing && e.keyCode === keyCodes.arrowUp) ||
					(scope.shiftHeld && e.keyCode === keyCodes.tab)) {
					if (scope.$currentSelection !==
						undefined && scope.$currentSelection[0] !==
						$('.suggestions').children().first()[0] // Michael - ref
					) {
						$currentSelection = scope.$currentSelection.prev();
						scope.$currentSelection.removeClass('current-selection');
					}

					if ($currentSelection) {
						$currentSelection.addClass('current-selection');
						scope.$currentSelection = $currentSelection;
					}
				} else if (scope.autocompleteShowing && e.keyCode ===
					keyCodes.arrowDown || e.keyCode === keyCodes.tab
				) {
					if (scope.$currentSelection !== undefined &&
						scope.$currentSelection[0] !==
						$('.suggestions').children().last()[0]
					) {
						$currentSelection = scope.$currentSelection.next();
						scope.$currentSelection.removeClass('current-selection');
					} else if (scope.$currentSelection === undefined) {
						$currentSelection = $('.suggestions').children().first();
					}

					if ($currentSelection) {
						$currentSelection.addClass('current-selection');
						scope.$currentSelection = $currentSelection;
					}
				} else if (scope.autocompleteShowing && e.keyCode === keyCodes.enter) {
					if (scope.$currentSelection !== undefined) {
						$(el).val(scope.$currentSelection.text());
						scope.$currentSelection = undefined;
					}

					scope.removeSuggestions();
					scope.processChange(el);
				} else if (scope.autocompleteShowing && e.keyCode === keyCodes.esc) {
					scope.removeSuggestions();
				} else if (regexp.test(value)) {
					scope.autocompleteShowing = true;
					scope.$currentSelection = undefined;

					for (var name in preview.weeVariables) {
						if (name.substr(1).toLowerCase()
							.indexOf(match[0].substr(1).toLowerCase()) !== -1) {
							matches.push(name);
						}
					}

					if (matches.length) {
						for (var i = 0 ; i < matches.length ; i++) {
							list += '<li class="suggestion">' + matches[i];

							if (scope.colorValues[matches[i]]) {
								list += '<span class="color-preview" style="background: ' +
								scope.colorValues[matches[i]] + '"></span>';
							}

							list += '</li>';

							if (i === 4) {
								break;
							}
						}

						if ($next.is('.suggestions')) {
							$next.empty().append(list);
						} else {
							$(this).after('<ul class="suggestions">' + list + '</ul>');
						}
					} else {
						scope.removeSuggestions();
					}
				} else {
					scope.removeSuggestions();
				}
			},
			keydown: function(e) {
				if (scope.autocompleteShowing && e.keyCode === keyCodes.shift) {
					scope.shiftHeld = true;
				} else if (e.which === keyCodes.tab && scope.autocompleteShowing) {
					e.preventDefault();
				}

				if (scope.autocompleteShowing) {
					if (e.keyCode === keyCodes.arrowUp ||
						e.keyCode === keyCodes.arrowDown) {
						e.preventDefault();
					}
				}
			},
			blur: function() {
				Wee._win.setTimeout(function() {
					scope.removeSuggestions();
				}, 200);
			},
			click: function() {
				this.select();
			}
		});

		$(Wee._body).on('click', function(e) {
			if ($(e.target).not('input') && $(e.target).not('.autocomplete__item')) {
				scope.removeSuggestions();
			}
		});

		$('.suggestion').on('click', function(e) {
			var $target = $(e.target),
				inputEl = $target.parent().prev().sel[0];

			$(inputEl).val($target.text());
			scope.removeSuggestions();
			scope.processChange(inputEl);
		}, {
			delegate: '.accordion__content'
		});
	},
	removeSuggestions: function() {
		$('.suggestions').remove();
		this.autocompleteShowing = false;
	},
	initModal: function() {
		var scope = this,
			preview = $('ref:previewFrame')[0].contentWindow;

		$('ref:show-code').on('click', function(e) {
			var template,
				file,
				variables = preview.weeVariables;

			e.preventDefault();

			Wee.data.request({
				url: '/wee_variables.less',
				success: function(data) {
					template = data;
					file = Wee.view.render(template, variables);
					scope.showModal(file);
				},
				failure: function(data) {
					scope.showMessage(data.status + ' (' + data.statusText + ')');
				}
			});
		});

		$('ref:overlay').on('click', function() {
			scope.hideModal();
		});
	},
	showModal: function(file) {
		$('ref:overlay').addClass('-is-active');
		$('ref:modal').html('<pre><code>' +
			file + '</code></pre>').addClass('-is-active');
	},
	hideModal: function() {
		$('ref:modal').removeClass('-is-active');
		$('ref:overlay').removeClass('-is-active');
	},
	initPreview: function() {
		var scope = this;

		$('input, select').on('change', function(e, el) {
			e.preventDefault();

			setTimeout(function() {
				if (! scope.autocompleteShowing) {
					scope.processChange(el);
				}
			}, 100);
		});

		$('form').on('submit', function(e) {
			e.preventDefault();

			return;
		});
	},
	processChange: function(el) {
		var preview = $('ref:previewFrame')[0].contentWindow;

		if (this.isRecursive(el)) {
			this.showMessage('Recursive variable definition for ' + el.name);
			this.resetInput(el);
		} else {
			var parse = this.parseValue(el.value);

			if (! parse.valid) {
				this.showMessage('Parsing error: ' + parse.response);
				this.resetInput(el);
			} else {
				var validate = this.validate(parse.response, el);

				if (! validate.valid) {
					this.showMessage('Validation error: ' + validate.response);
					this.resetInput(el);
				} else {
					preview.setVal(el.name, el.value.trim());

					if (this.colorValues[el.name]) {
						this.colorValues[el.name] = el.value.trim();
					}

					if ($(el).data('useVar') !== 'true') {
						$(el).val(validate.response);
						el.defaultValue = validate.response;
					}
				}
			}
		}

		this.autocompleteShowing = false;
	},
	isRecursive: function(el) {
		var match = new RegExp(el.name);

		return match.test(el.value);
	},
	resetInput: function(input) {
		$(input).val(input.defaultValue);
	},
	showMessage: function(message) {
		var $messageBar = $('ref:message-bar'),
			hideMessage = function() {
				$messageBar.removeClass('-is-active');
			};

		$messageBar.html('<span>' + message + '</span>').addClass('-is-active');
		setTimeout(hideMessage, 4000);
	},
	parseValue: function(value) {
		var preview = $('ref:previewFrame')[0].contentWindow,
			vars = preview.less.Parser.serializeVars(preview.weeVariables),
			css = vars + '#foo { value: ' + value + '; }',
			result = {};

		preview.less.render(css, function(error, output) {
			error ?
				result = {
					valid: false,
					response: error.message
				} :
				result = {
					valid: true,
					response: output.css.match(/(?:: )(.*)(?=;)/)[1]
				};
		});

		return result;
	},
	validate: function(val, el) {
		var scope = this,
			types = $(el).data('validate').split('|'),
			result = {};

		types.forEach(function(type) {
			if (type === 'unit') {
				result = scope.isUnit(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'number') {
				result = scope.isNumber(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'color') {
				result = scope.isColor(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'font') {
				result = scope.isFont(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'path') {
				result = scope.isPath(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'file') {
				result = scope.isFile(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'entity') {
				result = scope.isEntity(val);

				if (result.valid) {
					return;
				}
			} else if (type === 'selection' || type === 'string') {
				result = {
					valid: true,
					response: val
				};

				return;
			} else if (type === 'false' || type === 'auto') {
				if (val.toLowerCase() === 'false' ||
					val.toLowerCase() === 'auto') {
					result = {
						valid: true,
						response: val
					};

					return;
				}
			}
		});

		return result;
	},
	isUnit: function(val) {
		var match = /(^((\.\d+)|(\d+(\.\d+)?)(%|px|em|rem)?)$)/;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid unit.'
		};
	},
	isNumber: function(val) {
		var match = /(^[1-9][0-9]*$)/;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid number.'
		};
	},
	isColor: function(val) {
		var scope = this,
			colors = $('ref:previewFrame')[0].contentWindow.less.data.colors,
			match = /(^#[0-9a-f]{3,6}$)/i;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		} else if (scope.isColorKeyword(val, colors)) {
			return {
				valid: true,
				response: colors[val]
			};
		}

		return {
			valid: false,
			response: 'Not a valid color.'
		};
	},
	isColorKeyword: function(val, colors) {
		for (var color in colors) {
			if (val === color) {
				return true;
			}
		}

		return false;
	},
	isFont: function(val) {
		var stack = val.split(','),
			match = /(^"[\da-z]((-|_| )?[\da-z]+)*"$)|(^[\da-z]((-|_)?[\da-z]+)*$)/i,
			isMatch = function(value) {
				return match.test(value.trim());
			};

		if (stack.every(isMatch)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid font or font stack.'
		};
	},
	isPath: function(val) {
		var match = /(^'(\.\.\/)*([\w]+\/)*'$)/;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid path.'
		};
	},
	isFile: function(val) {
		var match = /(^'([\w-]+\.[\w]+)'$)/;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid file.'
		};
	},
	isEntity: function(val) {
		var match = /(^'(\\[0-9a-f]{4})+'$)/i;

		if (match.test(val)) {
			return {
				valid: true,
				response: val
			};
		}

		return {
			valid: false,
			response: 'Not a valid entity.'
		};
	},
	initSelectAll: function() {
		$('ref:modal').on('click', function(e, el) {
			if (window.getSelection !== undefined &&
				document.createRange !== undefined) {
				var range = document.createRange();

				range.selectNodeContents(el);
				var sel = window.getSelection();

				sel.removeAllRanges();
				sel.addRange(range);
			} else if (document.selection !== undefined &&
			document.body.createTextRange !== undefined) {
				var textRange = document.body.createTextRange();

				textRange.moveToElementText(el);
				textRange.select();
			}
		});
	}
});