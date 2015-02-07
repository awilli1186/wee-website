---
name: $eq
heading: Get indexed node of specified element
---

---variables---

| Variable | Type              | Default | Description          | Required |
| -------- | ----------------- | ------- | -------------------- | -------- |
| sel      | selector, element | --      | Selector or element  | &#10003; |
| i        | number            | --      | Index of the element | &#10003; |

---doc---

```html
<ul>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
```

---code---

```javascript
Wee.$eq('li', 0);
```

```html
<li>List item 1</li>
```