---
name: Events
---

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