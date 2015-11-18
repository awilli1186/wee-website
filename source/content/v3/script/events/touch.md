---
name: Touch
heading: Standard swipe events are available out of the box
---

The `swipeLeft`, `swipeRight`, `swipeUp`, and `swipeDown` events are available and work just like standard events.

---code---

```javascript
Wee.on('ref:element', 'swipeRight', function() {
	// Swipe logic
});
```