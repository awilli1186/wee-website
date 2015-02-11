---
name: $eq
heading: Get indexed node of matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| index | number | -- | Element index | ✓ |
| context | [selection](/script#selection) | document | Context selection ||

---code---

```html
<ul class="js-element">
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$eq('.js-element li', 1);
```

```html
<li>List item 2</li>
```

---code|modifier:split|label:Negative Index---

```javascript
Wee.$eq('.js-element li', -1);
```

```html
<li>List item 3</li>
```