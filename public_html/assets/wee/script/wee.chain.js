(function(W, U) {
	'use strict';

	var $, $p;
	W._win.WeeAlias = W._win.WeeAlias || '$';

	(function(A) {
		var Get = function(sel, context) {
			if (sel) {
				var els = Array.isArray(sel) ? sel : W.$toArray(W.$(sel, context)),
					i = 0;

				for (; i < els.length; i++) {
					var el = els[i];

					if (el) {
						A.call(this, el);
					}
				}

				this.sel = sel;
			}
		};

		$ = W._win[WeeAlias] = function(sel, context) {
			return new Get(sel, context);
		};

		$p = $.prototype = Get.prototype = {
			_$: true,
			length: 0,
			each: function(fn, options) {
				W.$each(this, fn, options);
			},
			map: function(fn) {
				return W.$map(this, fn);
			},
			attr: function(key, value) {
				var resp = W.$attr(this, key, value);
				return value !== U ? this : resp;
			},
			eq: function(index) {
				return $(W.$eq(this, index));
			},
			first: function() {
				return this.eq(0);
			},
			data: function(key, value) {
				var resp = W.$data(this, key, value);
				return value !== U ? this : resp;
			},
			reverse: function() {
				var copy = W.$extend({}, this),
					length = this.length,
					x = length,
					i = 0;

				for (; i < length; i++) {
					x--;
					this[i] = copy[x];
				}

				return this;
			}
		};
	})([].push);

	W.fn.extend({
		$chain: function(a, b) {
			if (typeof a == 'string') {
				$p[a] = b;
			} else {
				for (var key in a) {
					$p[key] = a[key];
				}
			}
		}
	});
})(Wee, undefined);