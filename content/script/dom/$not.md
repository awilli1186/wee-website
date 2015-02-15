---
name: $not
heading: Returns elements not matching the filtered selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✓ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$not('ref:element', 'div');
```

---code|label:Function---

The current index and element are injected into the callback. The scope of ```this``` is the element.

```html
<div data-ref="element" data-active="true">
```

---code|type:boolean|modifier:split---

```javascript
Wee.$not('ref:element', function() {
	// Check to see if data-active is set true
	return Wee.$data(this, 'active' === 'true';
});
```

```javascript
false
```