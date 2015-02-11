---
name: Events
---

---methods|modifier:bordered---

* [$(sel).on(a, b, c)](/script/events#on)
* [$(sel).off(events, options)](/script/events#off)
* [$(sel).one(a, b, c)](/script/events#one)
* [$(sel).trigger(event)](/script/events#trigger)

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