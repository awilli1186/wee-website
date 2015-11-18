---
name: Events
link: /script/events
---

---methods|modifier:bordered---

* [$(sel).on(a, b, c)](/script/events#on)
* [$(sel).off(a, b)](/script/events#off)
* [$(sel).bound(event, fn)](/script/events#bound)
* [$(sel).trigger(name)](/script/events#trigger)

---code---

In this example, the selector is the element to which the event is bound.

```javascript
$('.element').on('click', function() {
	// Click logic
});
```

Here the event is being triggered on the selector.

```javascript
$('.element').trigger('click');
```