(function(W, U) {
	'use strict';

	W.fn.make('view', {
		// Render specified data into specified template string
		// Return string
		render: function(temp, data) {
			return this.$private('render', temp, data);
		},
		// Add template conditional filters
		addFilter: function(a, b) {
			this.$private('extend', 'filters', a, b);
		},
		// Add template helper functions
		addHelper: function(a, b) {
			this.$private('extend', 'helpers', a, b);
		},
		// Add global template partials
		addPartial: function(a, b) {
			this.$private('extend', 'partials', a, b);
		}
	}, {
		_construct: function() {
			// Create extension objects
			this.filters = {};
			this.helpers = {};
			this.partials = {};

			// Set tag regex
			this.pair = /{{#(.+?)(?:|\|([^}]*))}}((?:{{#\1[^}]*}}.*?{{\/\1}})*[\s\S]*?){{\/\1}}/g;
			this.partial = /{{> (.+?)}}/g;
			this.single = /{{(.+?)}}/g;
			this.ext = /(.[^\(]+)(?:\((.*)\))?/;

			// Add default filters
			this.extend('filters', {
				is: function(val) {
					return this.val.toString() == val;
				},
				not: function(val) {
					return this.val.toString() != val;
				},
				isEmpty: function() {
					return this.empty;
				},
				notEmpty: function() {
					return ! this.empty;
				}
			});
		},
		extend: function(type, a, b) {
			var obj = a;

			if (W.$isString(a)) {
				obj = [];
				obj[a] = b;
			}

			W.$extend(this[type], obj);
		},
		render: function(temp, data) {
			var scope = this;

			// Make partial replacements
			temp = temp.replace(this.partial, function(match, tag) {
				if (scope.partials.hasOwnProperty(tag)) {
					var partial = scope.partials[tag];
					return W.$isFunction(partial) ? partial() : partial;
				}

				return '';
			});

			// Process template tags
			return this.process(temp, data, {}, data, 0);
		},
		process: function(temp, data, prev, init, index) {
			var scope = this;

			return temp.replace(this.pair, function(match, tag, filter, inner) {
				var val = scope.getVal(data, prev, tag, U, init, index),
					empty = val === false || val == null || val.length === 0,
					resp = '';

				if (! filter && empty === false) {
					// Loop through objects and arrays
					if (typeof val == 'object') {
						var isObj = W.$isObject(val),
							i = 0;

						for (var key in val) {
							if (val.hasOwnProperty(key)) {
								var el = val[key],
									item = W.$extend({
										$key: key,
										'.': el,
										'#': i,
										'##': i + 1
									}, W.$isObject(el) ? el : (isObj ? val : {}));

								resp += scope.process(inner, item, data, init, i);

								i++;
							}
						}
					} else if (W.$isString(val)) {
						resp = scope.process(inner, {
							'.': val,
							'#': 0,
							'##': 1
						}, data, init, 0);
					} else if (val !== false) {
						resp = inner;
					}
				} else if (filter !== U) {
					var filters = filter.split('|'),
						cont = filters.every(function(el) {
							var arr = el.match(scope.ext),
								args = arr[2] !== U ? arr[2].split(',') : [];
							el = arr[1];

							return scope.filters.hasOwnProperty(el) && scope.filters[el].apply({
								val: val,
								data: data,
								root: init,
								inner: inner,
								empty: empty
							}, args);
						});

					if (cont === true) {
						return scope.process(inner, data, {}, init);
					}
				}

				return resp;
			}).replace(this.single, function(match, set) {
				var split = set.split('||'),
					fb = split[1],
					segs = split[0].split('|'),
					tag = segs[0].trim(),
					val = scope.getVal(data, prev, tag, fb, init, index),
					helpers = val === U ? segs : segs.slice(1);

				// Process helpers
				helpers.forEach(function(el) {
					var arr = el.match(scope.ext);

					if (arr) {
						var args = arr[2] !== U ? arr[2].split(',') : [];
						el = arr[1].trim();

						if (scope.helpers.hasOwnProperty(el)) {
							val = scope.helpers[el].apply({
								val: val,
								data: data,
								root: init,
								tag: tag,
								index: index
							}, args);
						}
					}
				});

				// Encode output by default
				if (typeof val == 'string' && helpers.indexOf('raw') == -1) {
					val = val.replace(/&amp;/g, '&')
						.replace(/&/g, '&amp;')
						.replace(/</g, '&lt;')
						.replace(/>/g, '&gt;')
						.replace(/"/g, '&quot;');
				}

				return val === U || typeof val == 'object' ? '' : val;
			});
		},
		getVal: function(data, prev, key, fb, init, x) {
			var trim = key.trim(),
				resp = trim == '.' ? key : key.split('.'),
				orig = data,
				i = 0;

			// Alter context
			if (resp[0] == '$root') {
				data = init;
				resp.shift();
			} else if (trim.substring(0, 3) == '../') {
				data = prev;
				resp.splice(0, 3, trim.substring(3));
			}

			var len = resp.length - 1;

			// Loop through object segments
			for (; i <= len; i++) {
				key = resp[i];

				if (data.hasOwnProperty(key)) {
					data = data[key];

					// Return value on last segment
					if (i === len) {
						if (typeof data == 'function') {
							data = data(orig, init, x);
						}

						if (data !== U) {
							return data;
						}
					}
				} else {
					break;
				}
			}

			// Return fallback
			return fb ? fb.trim() : fb;
		}
	});
})(Wee, undefined);