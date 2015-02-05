---
name: addPartial
---

Partials are code snippets that can be reused throughout your project.

---table---

| Variable | Type   | Default | Description       | Required |
| -------- | ------ | ------- | ----------------- | -------- |
| a        | string | --      | Partial name      | &#10003; |
| b        | string | --      | Partial as string | &#10003; |

---doc---

```javascript
Wee.view.addPartial('copyright', '<small>&copy; {{\year}}</small>');
```

---code---

```javascript
var template = '{{\> copyright}}',
	data = {
		year: 2015
	};

Wee.view.render(template, data);
```

```javascript
<small>&copy; 2015</small>
```