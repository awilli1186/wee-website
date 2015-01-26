(function(W, U) {
	'use strict';

	W.fn.make('assets', {
		// Cache pre-existing CSS and JavaScript asset references
		_construct: function() {
			this.loaded = [];

			W.$each('link[rel="stylesheet"], script[src]', function(el) {
				this.loaded[el.href || el.src] = el;
			}, {
				scope: this
			});
		},
		// Get currently bound resource root or set root with specified value
		// Returns string
		root: function(val) {
			return val ? this.$set('.', val) : this.$get('.', '');
		},
		// Load specified assets with specified set of options
		load: function(conf) {
			var files = W.$toArray(conf.files),
				root = conf.root !== U ? conf.root : this.root(),
				now = new Date().getTime(),
				len = files.length,
				i = 0;

			// Create group name if not specified
			if (! conf.group) {
				conf.group = 'load-' + now;
			}

			// Set file array length to check against
			this.$set(conf.group, len);
			this.$set(conf.group + 'fail', 0);
			this.$set(conf.group + 'conf', conf);

			// Request each specified file
			for (; i < len; i++) {
				var file = root + files[i];

				if (! this.loaded[file]) {
					if (conf.cache === false) {
						file += (file.indexOf('?') == -1 ? '?' : '&') + now;
					}

					this.$private('request', file, conf);
				}
			}
		},
		// Remove one or more files from the DOM
		remove: function(files) {
			files = W.$toArray(files);

			var keys = Object.keys(files),
				i = 0;

			for (; i < keys.length; i++) {
				var key = keys[i],
					src = files[key],
					el = this.loaded[src];

				if (el !== U) {
					el.parentNode.removeChild(el);
					el = null;
					delete this.loaded[src];
				}
			}
		},
		// When specified references are ready execute callback
		ready: function(group, opt, poll) {
			if (this.$get(group) === 0) {
				var conf = W.$extend(this.$get(group + 'conf'), opt);
				opt = {
					args: conf.args,
					scope: conf.scope
				};

				if (conf.failure && this.$get(group + 'fail') > 0) {
					W.$exec(conf.failure, opt);
				} else if (conf.success) {
					W.$exec(conf.success, opt);
				}
			} else if (poll) {
				setTimeout(function() {
					W.assets.ready(group, {}, true);
				}, 20);
			}
		}
	}, {
		// Request specific file
		request: function(path, conf) {
			var scope = this,
				head = W._doc.getElementsByTagName('head')[0],
				ext = path.split('.').pop().split(/\#|\?/)[0],
				group = conf.group,
				img = new Image();

			// Load file based on extension
			if (ext == 'js') {
				var js = W._doc.createElement('script');

				js.src = path;
				js.async = conf.async === true;

				js.onload = js.onreadystatechange = function() {
					var rs = js.readyState;

					if (rs && rs != 'complete' && rs != 'loaded') {
						return;
					}

					scope.$public.loaded[path] = js;
					scope.done(group);
				};

				js.onerror = function() {
					scope.fail(group);
				};

				head.appendChild(js);
			} else if (ext == 'css') {
				var link = W._doc.createElement('link');

				link.rel = 'stylesheet';
				link.href = path;

				head.appendChild(link);

				img.onerror = function() {
					scope.$public.loaded[path] = link;
					scope.done(group);
				};

				img.src = path;
			} else if ((/(gif|jpe?g|png|svg)$/i).test(ext)) {
				img.onload = function() {
					scope.done(group);
				};

				img.onerror = function() {
					scope.fail(group);
				};

				img.src = path;
			}
		},
		// Decrement remaining count of assets to be loaded
		done: function(group) {
			this.$set(group, this.$get(group) - 1);
			this.$public.ready(group, {}, false);
		},
		// Track failed resources
		fail: function(group) {
			var key = group + 'fail';

			this.$set(key, this.$get(key) + 1);
			this.done(group);
		}
	});
})(Wee, undefined);