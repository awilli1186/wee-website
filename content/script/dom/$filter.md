---
name: $filter
heading: Return a filtered subset of elements from a matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✓ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$filter('ref:element', '.filter');
```

---code|label:Function---

The current index and element are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$filter('ref:element', function(i, el) {
	// Return elements containing 'Hello'
	return $(el).text().indexOf('Hello') !== -1;
});
```