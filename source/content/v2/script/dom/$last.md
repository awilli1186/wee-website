---
name: $last
heading: Get the last element of a matching selection
related: $first
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| context | [selection](/script#selection) | document | Context selection ||

---code---

Works the same as [Wee.$()](#core) but only returns the last result from the result set.

```markup
<ul class="names">
	<li>John Doe</li>
	<li>John Smith</li>
	<li>Jane Doe</li>
	<li>Jane Smith</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$last('.names li');
```

```markup
<li>Jane Smith</li>
```