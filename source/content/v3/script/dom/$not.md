---
name: $not
heading: Returns elements not matching the filtered selection
related: $is
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✔ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$not('ref:element', 'div');
```

---code|label:Function---

The current index and element are injected into the callback. The scope of `this` is the element.

```html
<ul class="names">
	<li>John Doe</li>
	<li data-hidden="true">Jane Doe</li>
	<li>John Smith</li>
	<li>Jane Smith</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$not('.names li', function(i, el) {
	// Check if data-hidden is set to true
	return Wee.$data(el, 'hidden') === 'true';
});
```

```javascript
[<li>John Doe</li>, <li>John Smith</li>, <li>Jane Smith</li>]
```