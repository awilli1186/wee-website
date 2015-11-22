---
name: addEvent
heading: Add a custom event
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Event name | ✔ |
| on | function | -- | Enable function | ✔ |
| off | function | -- | Disable function | ✔ |

---code---

```javascript
Wee.events.addEvent('pressHold', function(el, fn, conf) {
	var scope = this,
		duration = conf.duration || 400;

	Wee.events.on(el, 'mousedown.pressHold', function(e, el) {
		scope.timer = setTimeout(function() {
			scope.timer = false;

			fn.apply(conf.scope || el, W._slice.call(arguments));
		}, duration);
	}, conf);

	Wee.events.on(el, 'mouseup.pressHold', function() {
		if (scope.timer) {
			clearTimeout(scope.timer);
		}
	});
}, function(el, fn) {
	Wee.events.off(el, 'mouseup.pressHold', fn);
});

$('ref:element').on('pressHold', function(e, el) {
	// Trigger logic
});
```