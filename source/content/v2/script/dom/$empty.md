---
name: $empty
heading: Remove child nodes from each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |

---code---

```html
<div data-ref="bio">
	<h1>John Smith</h1>
	<p>Lorem ipsum dolor.</p>
</div>
```

---code|modifier:split---

```javascript
Wee.$empty('ref:bio');
```

```html
<div data-ref="bio"></div>
```