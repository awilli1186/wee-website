(function(W, U) {
	'use strict';

	W.fn.extend({
		// Add specified class name to specified element
		// Accepts either string or function value
		// Returns undefined
		$addClass: function(sel, val) {
			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				var name = func ?
						val.call(el, i, el.className) :
						val;

				if (name) {
					el.className = (el.className + ' ' + name.split(' ').filter(function(name) {
						return ! W.$hasClass(el, name);
					}).join(' ')).trim();
				}
			});
		},
		// Removes specified class from specified element
		// Accepts either string or function value
		// Returns undefined
		$removeClass: function(sel, val) {
			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				var name = func ?
						val.call(el, i, el.className) :
						val;

				if (name) {
					el.className = el.className.replace(
						new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi'
					), ' ').trim();
				}
			});
		},
		// Determine if specified element has specified class
		// Returns boolean
		$hasClass: function(sel, val) {
			return W.$(sel).some(function(el) {
				return new RegExp('(^| )' + val + '( |$)', 'gi').test(el.className);
			});
		},
		// Get CSS value of first element or set matched elements CSS property with specified value
		// Accepts either rule object or rule, value
		// Returns string|undefined
		$css: function(sel, a, b) {
			var obj = W.$isObject(a);

			if (b !== U || obj) {
				var func = ! obj && W.$isFunction(b);

				W.$each(sel, function(el, i) {
					obj ?
						Object.keys(a).forEach(function(key) {
							el.style[key] = a[key];
						}) :
						el.style[a] = func ?
							b.call(el, i, el.style[a]) :
							b;
				});
			} else {
				var el = W.$first(sel);

				return W._legacy ?
					el.currentStyle[a] :
					getComputedStyle(el, null)[a];
			}
		},
		// Get HTML value of first element or set matched elements HTML with specified value
		// Returns string|undefined
		$html: function(sel, val) {
			if (val === U) {
				return W.$first(sel).innerHTML;
			}

			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				var html = func ?
						val.call(el, i, el.innerHTML) :
						val;

				if (html !== false && html !== U) {
					el.innerHTML = html;
				}
			});
		},
		// Clone specified element
		// Returns element array
		$clone: function(sel) {
			return W.$map(sel, function(el) {
				return el.cloneNode(true);
			});
		},
		// Hide specified element
		$hide: function(sel) {
			W.$each(sel, function(el) {
				W.$addClass(el, 'js-hide');
			});
		},
		// Show specified element
		$show: function(sel) {
			W.$each(sel, function(el) {
				W.$removeClass(el, 'js-hide');
			});
		},
		// Toggle the display of a specified element
		$toggle: function(sel) {
			W.$each(sel, function(el) {
				! W.$hasClass(el, 'js-hide') ?
					W.$hide(el) :
					W.$show(el);
			});
		},
		// Get children of specified element with optional filter
		// Returns element array
		$children: function(sel, filter) {
			var arr = [];

			W.$each(sel, function(el) {
				var children = W._slice.call(el.children);

				arr = arr.concat(
					filter ?
						W.$filter(children, filter) :
						children
				);
			});

			return W.$unique(arr);
		},
		// Get content of specified element
		// Returns element array
		$contents: function(sel) {
			var arr = [];

			W.$each(sel, function(el) {
				arr = arr.concat(W._slice.call(el.childNodes));
			});

			return W.$unique(arr);
		},
		// Get siblings of specified element with optional filter
		// Returns element array
		$siblings: function(sel, filter) {
			var arr = [];

			W.$each(sel, function(el) {
				var siblings = W._slice.call(el.parentNode.children),
					i = 0;

				for (; i < siblings.length; i++) {
					if (siblings[i] === el) {
						siblings.splice(i, 1);
						break;
					}
				}

				arr = arr.concat(
					filter ?
						W.$filter(siblings, filter) :
						siblings
				);
			});

			return W.$unique(arr);
		},
		// Get parent of specified element
		// Returns element
		$parent: function(sel) {
			return W.$unique(W.$map(sel, function(el) {
				return el.parentNode;
			}));
		},
		// Get last match of specified element
		// Returns element
		$last: function(sel, context) {
			return W.$eq(sel, -1, context);
		},
		// Get subset of matches from index range
		// Returns element array
		$slice: function(sel, start, end) {
			if (! sel._$_) {
				sel = W._selArray(sel);
			}

			return W._slice.call(sel, start, end);
		},
		// Determine if specified parent element contains specified child element
		// Returns boolean
		$contains: function(sel, child) {
			var b = false;

			W.$each(sel, function(el) {
				if (W.$(child, el).length > 0) {
					b = true;
					return;
				}
			});

			return b;
		},
		// Append specified child element to parent element
		$append: function(sel, child) {
			var func = W.$isFunction(child);

			W.$each(sel, function(el, i) {
				var app = func ?
						child.call(el, i, el.innerHTML) :
						child;

				if (app) {
					W.$isString(app) ?
						el.innerHTML = el.innerHTML + app :
						W.$each(app, function(cel) {
							el.appendChild(cel);
						});
				}
			});
		},
		// Prepend specified child element to specified parent element
		$prepend: function(sel, child) {
			var func = W.$isFunction(child);

			W.$each(sel, function(el, i) {
				var pre = func ?
						child.call(el, i, el.innerHTML) :
						child;

				if (pre) {
					W.$isString(pre) ?
						el.innerHTML = child + el.innerHTML :
						W.$each(child, function(cel) {
							el.insertBefore(cel, el.firstChild);
						});
				}
			});
		},
		// Insert specified element before specified element
		$before: function(sel, pos, rem) {
			var func = W.$isFunction(pos);

			W.$each(sel, function(el, i) {
				var bef = func ?
						pos.call(el, i, pos.innerHTML) :
						pos;

				if (bef) {
					W.$isString(bef) ?
						el.insertAdjacentHTML('beforebegin', bef) :
						W.$each(bef, function(cel) {
							if (i > 0) {
								cel = W.$clone(cel)[0];
							}

							el.parentNode.insertBefore(cel, el);
						}, {
							reverse: true
						});
				}

				if (rem) {
					W.$remove(el);
				}
			});
		},
		// Insert specified element before specified element
		$insertBefore: function(prev, sel) {
			W.$each(sel, function(el) {
				W.$each(prev, function(cel) {
					el.parentNode.insertBefore(cel, el);
				});
			});
		},
		// Insert specified element after specified element
		$after: function(sel, pos, rem) {
			var func = W.$isFunction(pos);

			W.$each(sel, function(el, i) {
				var aft = func ?
						pos.call(el, i, el.innerHTML) :
						pos;

				if (aft) {
					W.$isString(aft) ?
						el.insertAdjacentHTML('afterend', aft) :
						W.$each(aft, function(cel) {
							if (i > 0) {
								cel = W.$clone(cel)[0];
							}

							el.parentNode.insertBefore(cel, el.nextSibling);
						}, {
							reverse: true
						});
				}

				if (rem) {
					W.$remove(el);
				}
			});
		},
		// Insert specified element after specified element
		$insertAfter: function(next, sel) {
			W.$each(sel, function(el, i) {
				W.$each(next, function(cel) {
					if (i > 0) {
						cel = W.$clone(cel)[0];
					}

					el.parentNode.insertBefore(cel, el.nextSibling);
				});
			});
		},
		// Replace specified element with another specified element
		$replaceWith: function(sel, pos) {
			W.$after(sel, pos, true);
		},
		// Remove specified element from document
		$remove: function(sel, context) {
			W.$each(sel, function(el) {
				el.parentNode.removeChild(el);
			}, {
				context: context
			});
		},
		// Remove child nodes from specified element
		$empty: function(sel) {
			W.$each(sel, function(el) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			});
		},
		// Wrap HTML around specified element
		$wrap: function(sel, html) {
			var func = W.$isFunction(html);

			W.$each(sel, function(el, i) {
				var wrap = W.$parseHTML(
					func ?
						html.call(el, i) :
						html
				);

				W.$each(wrap, function(cel) {
					cel.appendChild(el.cloneNode(true));
					el.parentNode.replaceChild(cel, el);
				});
			});
		},
		// Wrap HTML around the content of specified element
		$wrapInner: function(sel, html) {
			var func = W.$isFunction(html);

			W.$each(sel, function(el, i) {
				var wrap = W.$parseHTML(
						func ?
							html.call(el, i) :
							html
					),
					children = W.$children(el);

				if (children.length === 0) {
					children = W.$html(el);

					W.$empty(el);
					W.$html(wrap, children);
				} else {
					W.$each(children, function(cel) {
						wrap[0].appendChild(cel);
					});
				}

				W.$append(el, wrap);
			});
		},
		// Get property of specified element or set property with specified value
		$prop: function(sel, a, b) {
			var obj = W.$isObject(a);

			if (b !== U || obj) {
				var func = ! obj && W.$isFunction(b);

				W.$each(sel, function(el, i) {
					obj ?
						Object.keys(a).forEach(function(key) {
							el[key] = a[key];
						}) :
						el[a] = func ?
							b.call(el, i, el[a]) :
							b;
				});
			} else {
				var el = W.$first(sel);

				return el[a];
			}
		},
		// Remove specified attribute of specified element
		$removeAttr: function(sel, key) {
			W.$each(sel, function(el) {
				el.removeAttribute(key);
			});
		},
		// Get text value of specified element or set text with specified value
		// Returns string
		$text: function(sel, val) {
			if (val === U) {
				return W.$map(sel, function(el) {
					return (el.textContent || el.innerText).trim();
				}).join('');
			}

			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				var text = func ?
						val.call(el, i, (el.textContent || el.innerText).trim()) :
						val;

				el.textContent === U ?
					el.innerText = text :
					el.textContent = text;
			});
		},
		// Get value of specified element or set specified value
		// Returns string
		$val: function(sel, val) {
			if (val === U) {
				var el = W.$first(sel);

				if (el.nodeName == 'SELECT') {
					var opt = W.$find(el, 'option');
					val = opt.map(function(a) {
						if (a.selected) {
							return a.value;
						}
					});

					return el.multiple ? val : val[0];
				}

				return el.value;
			}

			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				if (el.nodeName == 'SELECT') {
					var opt = W.$find(el, 'option');
					val = W.$toArray(val);

					opt.forEach(function(a) {
						if (val.indexOf(a.value) > -1) {
							a.selected = true;
						}
					});
				} else {
					el.value = func ?
						val.call(el, i, el.value) :
						val;
				}
			});
		},
		// Get matching nodes based on a specified filter within a specified element
		// Returns element array
		$find: function(sel, filter) {
			var arr = [];

			W.$each(sel, function(el) {
				arr = arr.concat(W.$(filter, el));
			});

			return arr;
		},
		// Get the next sibling of a specified element
		// Returns element
		$next: function(sel, filter, opt) {
			var arr = [];

			W.$each(sel, function(el) {
				var nodes = W.$children(W.$parent(el)),
					index = W.$index(el) + 1;

				nodes.forEach(function(el, i) {
					if (i === index && (! filter || filter && W.$is(el, filter, opt))) {
						arr.push(el);
					}
				});
			});

			return arr;
		},
		// Get the previous sibling of a specified element
		// Returns element
		$prev: function(sel, filter, opt) {
			var arr = [];

			W.$each(sel, function(el) {
				var nodes = W.$children(W.$parent(el)),
					index = W.$index(el) - 1;

				nodes.forEach(function(el, i) {
					if (i === index && (! filter || filter && W.$is(el, filter, opt))) {
						arr.push(el);
					}
				});
			});

			return arr;
		},
		// Return a subset of elements based on a specified filter from a specified element
		// Returns element array
		$filter: function(sel, filter, opt) {
			var func = W.$isFunction(filter);

			return W.$map(sel, function(el, i) {
				return func ?
					func(el, i) :
					W.$is(el, filter, opt) ? el : false;
			});
		},
		// Return a subset of elements based on a specified exclusion filter from a specified element
		// Returns element array
		$not: function(sel, filter, opt) {
			var func = W.$isFunction(filter);

			return W.$map(sel, function(el, i) {
				return func ?
					func(el, i) :
					W.$is(el, filter, opt) ? false : el;
			});
		},
		// Determines if a particular element matches a specified criteria
		// Returns boolean
		$is: function(sel, filter, opt) {
			var el = W.$first(sel);

			if (W.$isFunction(filter)) {
				return W.$exec(filter, W.$extend({
					scope: el
				}, opt));
			} else if (W.$isObject(filter)) {
				return el === (filter._$_ ? filter[0] : filter);
			} else if (W.$isArray(filter)) {
				return el === filter[0];
			} else {
				var matches = el.matches || el.matchesSelector || el.msMatchesSelector ||
						el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector;

				if (matches) {
					return matches.call(el, filter);
				} else {
					var elem = el.parentNode.querySelectorAll(filter),
						i = 0;

					for (; i < elem.length; i++) {
						if (elem[i] === el) {
							return true;
						}
					}
				}
			}

			return false;
		},
		// Get the sibling index of a specified element
		// Returns int
		$index: function(sel) {
			var el = W.$first(sel),
				children = W.$children(W.$parent(el)),
				i = 0;

			for (; i < children.length; i++) {
				if (children[i] === el) {
					return i;
				}
			}

			return -1;
		},
		// Get unique closest nodes of matched elements with filter and optional context
		// Returns element
		$closest: function(sel, filter, context) {
			return W.$unique(W.$map(sel, function(el) {
				if (W.$is(el, filter)) {
					return el;
				}

				while (el !== null) {
					el = el.parentNode;

					if (el === W._html) {
						return false;
					}

					if (W.$is(el, filter)) {
						return el;
					}
				}
			}, {
				context: context
			}));
		},
		// Get unique ancestors of matched elements with optional filter
		// Returns element array
		$parents: function(sel, filter) {
			var arr = [];

			W.$each(sel, function(el) {
				while (el !== null) {
					el = el.parentNode;

					if (! filter || (filter && W.$is(el, filter))) {
						arr.push(el);
					}

					if (el === W._html) {
						return false;
					}
				}
			});

			return W.$unique(arr);
		},
		// Toggle the display of a specified element
		$toggleClass: function(sel, val, toggle) {
			var func = W.$isFunction(val);

			W.$each(sel, function(el, i) {
				func ?
					val.call(el, i, el.className) :
					val.split(' ').forEach(function(val) {
						toggle === false ||  W.$hasClass(el, val) ?
							W.$removeClass(el, val) :
							W.$addClass(el, val);
					});
			});
		},
		// Convert specified HTML string to a DOM object and optionally converts it to a Wee DOM object
		// Returns element
		$parseHTML: function(html, obj) {
			var el = W._doc.createElement('div');

			el.innerHTML = html;

			var children = W.$children(el);

			return obj ? $(children) : children;
		},
		// Serialize specified form element
		// Returns string
		$serializeForm: function(sel) {
			var arr = [],
				el = W.$first(sel),
				i = 0,
				x = 0;

			if (el.nodeName == 'FORM') {
				for (; i < sel.elements.length; i++) {
					var child = sel.elements[i];

					if (child.name && child.type != 'file' && child.type != 'reset') {
						if (child.type == 'select-multiple') {
							for (; x < child.options.length; x++) {
								if (child.options[x].selected) {
									arr.push(child.name + '=' + encodeURIComponent(child.options[x].value).replace(/%20/g, '+'));
								}
							}
						} else {
							if (child.type != 'submit' && child.type != 'button') {
								if ((child.type != 'checkbox' && child.type != 'radio') || el.checked) {
									arr.push(child.name + '=' + encodeURIComponent(child.value).replace(/%20/g, '+'));
								}
							}
						}
					}
				}

				return arr.join('&');
			}

			return '';
		},
		// Get the position of a specified element
		// Returns object
		$position: function(sel) {
			var el = W.$first(sel);

			return {
				top: el.offsetTop,
				left: el.offsetLeft
			};
		},
		// Get the offset of a specified element
		// Returns object
		$offset: function(sel) {
			var rect = W.$first(sel).getBoundingClientRect(),
				el = W._legacy ? W._html : W._win;

			return {
				top: rect.top + (W._legacy ? el.scrollTop : el.pageYOffset),
				left: rect.left + (W._legacy ? el.scrollLeft : el.pageXOffset)
			};
		},
		// Get or set the width of a specified element, optionally accounting for margin
		// Returns int
		$width: function(sel, val) {
			var func = val && W.$isFunction(val),
				width;

			if (val === U || val === true || func) {
				var el = W.$first(sel);

				switch (el) {
					case W._win:
						width = el.innerWidth;
						break;
					case W._doc:
						width = Math.max(
							W._body.offsetWidth,
							W._body.scrollWidth,
							W._html.clientWidth,
							W._html.offsetWidth,
							W._html.scrollWidth
						);
						break;
					default:
						width = el.offsetWidth;

						if (val === true) {
							var style = el.currentStyle || getComputedStyle(el);
							width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
						}

						break;
				}

				if (! func) {
					return width;
				}
			}

			W.$each(sel, function(el, i) {
				W.$css(el, 'width', func ?
					val.call(el, i, width) :
					val
				);
			});
		},
		// Get or set the height of an element, optionally accounting for margin
		// Returns int
		$height: function(sel, val) {
			var func = val && W.$isFunction(val),
				height;

			if (val === U || val === true || func) {
				var el = W.$first(sel);

				switch (el) {
					case W._win:
						height = el.innerHeight;
						break;
					case W._doc:
						height = Math.max(
							W._body.offsetHeight,
							W._body.scrollHeight,
							W._html.clientHeight,
							W._html.offsetHeight,
							W._html.scrollHeight
						);
						break;
					default:
						height = el.offsetHeight;

						if (val === true) {
							var style = el.currentStyle || getComputedStyle(el);
							height += parseInt(style.marginTop) + parseInt(style.marginBottom);
						}
				}

				if (! func) {
					return height;
				}
			}

			W.$each(sel, function(el, i) {
				W.$css(el, 'height', func ?
					val.call(el, i, height) :
					val
				);
			});
		},
		// Get or set the top scroll position of an element
		// Returns int
		$scrollTop: function(sel, val) {
			if (val === U) {
				var el = sel ? W.$first(sel) : W._win;

				if (W._legacy && el === W._win) {
					el = W._html;
					return el.scrollTop;
				}

				return el.pageYOffset;
			}

			W.$each(sel, function(el) {
				el.scrollTo(0, val);
			});
		}
	});
})(Wee, undefined);