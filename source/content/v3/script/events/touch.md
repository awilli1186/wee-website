---
name: Touch
heading: Standard swipe events are available out of the box
---

---variables---

| Variable | Type| Default | Description | Required |
| -- | -- | -- | -- | -- |
| distance | integer | 50 | Minimum swipe distance in pixels ||
| movement | integer | 25 | Maximum opposing shift in pixels ||

---code---

The `swipeLeft`, `swipeRight`, `swipeUp`, and `swipeDown` events are available and work just like standard events.

```javascript
Wee.on('ref:element', 'swipeRight', function() {
	// Swipe logic
}, {
	distance: 150,
	movement: 20
});
```