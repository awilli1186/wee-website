---
name: $eq
heading: Get indexed node of specified element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| i | number | -- | Element index | &#10003; |
| context | selection | document | [Wee selection](/script/core#core) for context ||

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