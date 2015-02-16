// Wee (weepower.com)
// Licensed under Apache 2 (http://www.apache.org/licenses/LICENSE-2.0)
// DO NOT MODIFY

(function(N, U) {
	'use strict';

	var web = typeof window != 'undefined',
		W = (function() {
			var _store = {},
				D = web ? document : {};

			return {
				_body: D.body,
				_doc: D,
				_html: D.documentElement,
				_legacy: D.getElementsByClassName ? false : true,
				_slice: [].slice,
				_win: N,

				// Create namespaced controller
				fn: {
					make: function(name, pub, priv) {
						W[name] = (function() {
							var Public = pub,
								Private = priv || {};

							// Ensure the current controller is not being extended
							if (name != '_tmp') {
								var data = {
									// Private getter and setter methods for controllers
									$get: function(key, def, set, opt) {
										return W.$get(name + (key ? ':' + key : ''), def, set, opt);
									},
									$set: function(key, val, opt) {
										return W.$set(name + ':' + key, val, opt);
									},
									$push: function(key, a, b) {
										return W.$push(name + ':' + key, a, b);
									},
									// Destroy current controller
									$destroy: function() {
										if (Public._destruct) {
											Public._destruct();
										}

										if (Private._destruct) {
											Private._destruct();
										}

										delete W[name];
									}
								};

								// Extend defined public and private objects with data functions
								Public = W.$extend(pub, data);
								Private = W.$extend(priv, data);
							}

							// If private object exists expose $call function for executing private methods
							if (priv) {
								Public.$private = function(fn) {
									var args = W._slice.call(arguments);

									// Bind all additional arguments to private method call
									args.length > 1 ?
										args.shift() :
										args = [];

									return Private[fn].apply(Private, args);
								};
							}

							Private.$public = Public;

							_store[name] = {};

							if (Public._construct !== U) {
								Public._construct();
							}

							if (Private._construct !== U) {
								Private._construct();
							}

							return Public;
						})();
					},
					// Extend existing controller with additional methods and properties
					extend: function(a, b, c) {
						if (W.$isObject(a)) {
							// Merge into the global object
							W.$extend(W, a);
						} else if (W.hasOwnProperty(a)) {
							// Merge the objects else create the controller
							this.make('_tmp', b, c);
							W.$extend(W[a], W._tmp);
							delete W._tmp;
						} else {
							this.make(a, b, c);
						}
					}
				},
				// Get matches to specified selector
				// Accepts optional context
				// Returns array
				$: function(selector, context) {
					var el = null;

					if (typeof selector != 'string') {
						el = selector;
					} else {
						context = context !== U ? W.$first(context) : D;

						// Check for pre-cached element
						if (selector.slice(0, 4) == 'ref:') {
							selector = W.$get(selector);

							// Apply context filter if not document
							return selector ?
								context === D ?
									selector :
									selector.filter(function(el) {
										return context.contains(el);
									}) :
								[];
						}

						if (selector == 'window') {
							return [N];
						}

						if (selector == 'document') {
							return [D];
						}

						if (N.WeeSelector !== U) { // Use third-party selector engine if defined
							el = N.WeeSelector(selector, context);
						} else {
							// Check for advanced query triggers
							if (selector.indexOf(' ') > 0 || selector.indexOf(':') > -1 || selector.indexOf('[') > -1 || selector.indexOf('#') > -1 || selector.lastIndexOf('.') > 0) {
								el = context.querySelectorAll(selector);
							} else {
								var c = selector.charAt(0);

								if (c == '#') {
									el = context.getElementById(selector.substr(1));
								} else if (c == '.') {
									el = W._legacy ?
										context.querySelectorAll(selector) :
										context.getElementsByClassName(selector.substr(1));
								} else {
									el = context.getElementsByTagName(selector);
								}
							}
						}
					}

					if (el === null) {
						return el;
					}

					if (el.nodeType !== U || el === N) {
						return [el];
					}

					return W._slice.call(el, 0);
				},
				// Set global variable
				// Options can be passed if value is a callback
				// Returns mixed
				$set: function(key, value, options) {
					var split = W._storeData(key),
						set = W._canExec(value) || options ?
							W.$exec(value, options) :
							value;

					split[0][split[1]] = set;

					return set;
				},
				// Get global variable
				// Accepts optional boolean to set default value if variable doesn't exist
				// Options can be passed if default value being set is a callback
				// Returns mixed
				$get: function(key, fallback, set, options) {
					if (key) {
						var split = W._storeData(key),
							root = split[0];
						key = split[1];

						if (root.hasOwnProperty(key)) {
							return root[key];
						}

						if (fallback !== U) {
							fallback = W._canExec(fallback) ?
							W.$exec(fallback, options) || options :
								fallback;

							if (set) {
								W.$set(key, fallback);
							}

							return fallback;
						}

						return null;
					}

					return _store;
				},
				// Get attribute of first matching selection or set attribute of each matching selection
				// Returns string|undefined
				$attr: function(target, a, b) {
					var obj = W.$isObject(a);

					if (b !== U || obj) {
						var func = ! obj && W._canExec(b);

						W.$each(target, function(el, i) {
							obj ?
								Object.keys(a).forEach(function(key) {
									el.setAttribute(key, a[key]);
								}) :
								el.setAttribute(a, func ?
										W.$exec(b, {
											args: [i, el[a]],
											scope: el
										}) :
										b
								);
						});
					} else {
						return W.$first(target).getAttribute(a);
					}
				},
				// Get data of first matching selection or set data of each matching selection
				// Returns string|undefined
				$data: function(target, a, b) {
					if (W.$isObject(a)) {
						var obj = {};

						Object.keys(a).forEach(function(key) {
							obj['data-' + key] = a[key];
						});

						a = obj;
					} else {
						a = 'data-' + a;
					}

					return W.$attr(target, a, b);
				},
				// Execute function for each matching selection
				// Options include arguments, context, and scope
				$each: function(target, fn, options) {
					if (target) {
						var conf = W.$extend({
								args: []
							}, options),
							els = W._selArray(target, conf),
							i = 0;

						if (conf.reverse && ! els._$) {
							els = els.reverse();
						}

						for (; i < els.length; i++) {
							var el = els[i];

							W.$exec(fn, {
								args: [el, i].concat(conf.args),
								scope: conf.scope || el
							});
						}
					}
				},
				// Get current environment or detect current environment against specified object
				// Defaults to local
				// Returns string|undefined
				$env: function(rules, fallback) {
					if (rules) {
						W.$set('_env', function() {
							var host = location.host;

							Object.keys(rules).forEach(function(key) {
								var el = rules[key];

								if (el == host || (W._canExec(el) && W.$exec(el, {
										args: [host]
									}))) {
									return key;
								}
							});

							return fallback || 'local';
						});
					}

					return W.$get('_env', 'local');
				},
				// Determine if the environment is secured over https
				// Optional url can be passed for evaluation
				// Returns boolean
				$envSecure: function(url) {
					return (url || N.location.href).slice(0, 5) == 'https';
				},
				// Get indexed node of matching selection
				// Returns element
				$eq: function(target, index, context) {
					var el = W.$(target, context);
					return el[index < 0 ? el.length + index : index];
				},
				// Execute specified function or controller method
				// Arguments and scope can be set in the optional options object
				// Arguments defaults to an empty array and the scope defaults to null
				// Returns mixed
				$exec: function(fn, options) {
					options = options || {};

					var conf = W.$extend({
							args: []
						}, options),
						fns = W.$toArray(fn),
						len = fns.length,
						i = 0;

					for (; i < len; i++) {
						fn = fns[i];

						if (W.$isString(fn)) {
							var segs = fn.split(':');
							fn = W[segs[0]][segs.length > 1 ? segs[1] : 'init'];

							if (! options.scope) {
								conf.scope = W[segs[0]];
							}
						}

						if (W.$isFunction(fn)) {
							var response = fn.apply(conf.scope, W.$toArray(conf.args));

							if (len === 1) {
								return response;
							}
						}
					}
				},
				// Extend target object with source object
				// Optionally nest deep with third argument set to true
				// Returns object
				$extend: function(target, source, deep) {
					target = target || {};

					if (source) {
						var keys = Object.keys(source),
							i = 0;

						for (; i < keys.length; i++) {
							var key = keys[i];

							// Attempt to deep nest else set property of object
							if (deep) {
								try {
									target[key] = (W.$isObject(target[key])) ?
										W.$extend(target[key], source[key]) :
										source[key];
								} catch (e) {
									target[key] = source[key];
								}
							} else {
								target[key] = source[key];
							}
						}
					}

					return target;
				},
				// Get the first element of a matching selection
				// Returns element
				$first: function(target, context) {
					return W.$eq(target, 0, context);
				},
				// Get keys from an object
				// Returns array
				// DEPRECATED
				$getKeys: function(value) {
					return Object.keys(value);
				},
				// Determine if value belongs to array
				// Returns int|false
				$inArray: function(array, value) {
					var i = array.indexOf(value);
					return i < 0 ? false : i;
				},
				// Determine if value is an array
				// Returns boolean
				$isArray: function(value) {
					return Array.isArray(value);
				},
				// Determine if value is a function
				// Returns boolean
				$isFunction: function(value) {
					return value && {}.toString.call(value) == '[object Function]';
				},
				// Determine if value is an object
				// Returns boolean
				$isObject: function(value) {
					return value && value.constructor === Object;
				},
				// Determine if value is a string
				// Returns boolean
				$isString: function(value) {
					return typeof value == 'string';
				},
				// Translate items in an array|selection to new array
				// Returns array
				$map: function(target, fn, options) {
					if (! Array.isArray(target)) {
						target = W._selArray(target, options);
					}

					var conf = W.$extend({
							args: []
						}, options),
						res = [],
						i = 0;

					for (; i < target.length; i++) {
						var el = target[i],
							val = W.$exec(fn, {
								args: [el, i].concat(conf.args),
								scope: conf.scope || el
							});

						if (val !== false) {
							res.push(val);
						}
					}

					return res;
				},
				// Merge source array into target array
				// Optionally de-duplicate the arrays by passing true
				// Returns array
				$merge: function(target, source, unique) {
					target = target.concat(source);
					return unique ? W.$unique(target) : target;
				},
				// Push value into global array
				// Returns array
				$push: function(key, a, b) {
					var split = W._storeData(key),
						root = split[0];
					key = split[1];

					if (! root.hasOwnProperty(key)) {
						root[key] = b !== U ? {} : [];
					}

					if (b !== U) {
						var isArr = Array.isArray(b);

						if (! root[key].hasOwnProperty(a)) {
							root[key][a] = isArr ? [] : {};
						}

						root[key][a] = isArr ? root[key][a].concat(b) : b;
					} else {
						Array.isArray(a) ?
							root[key] = root[key].concat(a) :
							root[key].push(a);
					}

					return root[key];
				},
				// Serialize object
				// Returns string
				$serialize: function(value) {
					return Object.keys(value).map(function(key) {
						if (typeof value[key] == 'string') {
							return encodeURIComponent(key) + '=' + encodeURIComponent(value[key]);
						}
					}).join('&');
				},
				// Add ref elements to datastore
				// data-bind is DEPRECATED
				$setRef: function(context) {
					var sets = W.$get('ref');
					context = context ? W.$first(context) : D;

					// Clear existing refs if reset
					if (sets) {
						Object.keys(sets).forEach(function(key) {
							var set = sets[key];

							set.forEach(function(el, i) {
								if (context.contains(el) && context !== el) {
									set.splice(i, i + 1);
								}
							});
						});
					}

					// Set refs from DOM
					W.$each('[data-ref], [data-bind]', function(el) {
						var ref = el.getAttribute('data-ref') || el.getAttribute('data-bind');

						ref.split(/\s+/).forEach(function(val) {
							W.$push('ref', val, [el]);
						});
					}, {
						context: context
					});
				},
				// Add metadata variables to datastore
				$setVars: function() {
					W.$each('[data-set]', function(el) {
						var key = W.$data(el, 'set'),
							val = W.$data(el, 'value');

						key.slice(-2) == '[]' ?
							W.$push(key.slice(0, -2), val) :
							W.$set(key, val);
					});
				},
				// Cast object to array if it isn't one
				// Returns array
				$toArray: function(value) {
					return Array.isArray(value) ? value : [value];
				},
				// Create new array with only unique values from source array
				// Returns array
				$unique: function(array) {
					return array.reverse().filter(function(e, i, array) {
						return array.indexOf(e, i + 1) === -1;
					}).reverse();
				},
				// Fallback for non-existent chaining
				$chain: function() {},
				// Determine if value can be executed
				// Returns boolean
				_canExec: function(value) {
					if (W.$isString(value) && value.indexOf(':') !== -1) {
						var split = value.split(':'),
							fn = split[0],
							method = split[1];

						if (W[fn] && W[fn][method]) {
							value = W[fn][method];
						}
					}

					return W.$isFunction(value);
				},
				// Convert selection to array
				// Returns array
				_selArray: function(selector, options) {
					if (selector._$) {
						return selector;
					}

					options = options || {};
					var el = W.$isString(selector) ? W.$(selector, options.context) : selector;

					return el ? W.$toArray(el) : [];
				},
				// Determine data storage root and key
				// Returns array
				_storeData: function(key) {
					if (key.indexOf(':') == -1) {
						return [_store, key];
					}

					var segs = key.split(':');
					key = segs[0];

					if (! _store.hasOwnProperty(key)) {
						_store[key] = [];
					}

					return [_store[key], segs[1]];
				},
				// Execute specified function when document is ready
				ready: function(fn) {
					D.readyState == 'complete' ?
						W.$exec(fn) :
						W._legacy ?
							D.attachEvent('onreadystatechange', function() {
								if (D.readyState == 'complete') {
									W.$exec(fn);
								}
							}) :
							D.addEventListener('DOMContentLoaded', function() {
								W.$exec(fn);
							});
				}
			};
		})();

	N.Wee = W;

	// Set data variables and bind elements
	if (web) {
		W.$setVars();
		W.$setRef();
	}

	// AMD setup
	if (typeof define == 'function' && define.amd) {
		define('wee', [], function() {
			return W;
		});
	}
})(this, undefined);