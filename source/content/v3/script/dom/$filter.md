---
name: $filter
heading: Return a filtered subset of elements from a matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✔ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$filter('ref:element', '.filter');
```

---code|label:Function---

The current index and element are injected into the callback. The scope of `this` is the element.

```html
<ul class="people">
	<li>John Doe</li>
	<li>John Smith</li>
	<li>Jane Doe</li>
	<li>Jane Smith</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$filter('.people li', function(i, el) {
	// Return elements containing 'Doe'
	return Wee.$text(el).indexOf('Doe') !== -1;
});
```

```javascript
[<li>John Doe</li>, <li>Jane Doe</li>]
```