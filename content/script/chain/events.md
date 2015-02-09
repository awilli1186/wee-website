---
name: Events
---

---methods|modifier:bordered---

* [$(selector).on(a, b, c)](/script/events#on)
* [$(selector).off(evts, opt)](/script/events#off)
* [$(selector).one(a, b, c)](/script/events#one)
* [$(selector).trigger(evt)](/script/events#trigger)

---doc---

In this example, the selector is the element to which the event is bound.

```javascript
$('.element').on('click', function() {
	// Callback logic
});
```

Here the event is being triggered on the selector.

```javascript
$('.element').trigger('click');
```