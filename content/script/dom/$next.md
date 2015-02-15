---
name: $next
heading: Get the unique next sibling of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Simple---

```javascript
Wee.$next();
```

---code|label:Filtered---

```html
<ul>
	<li>John Doe</li>
	<li>John Smith</li>
	<li data-ref="name">Jane Doe</li>
	<li>Jane Smith</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$next('ref:name');
```

```html
<li>Jane Smith</li>
```