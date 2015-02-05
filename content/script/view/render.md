---
name: Render
---

Render parses your template using a data object.

---table---

| Variable | Type   | Default | Description | Required |
| -------- | ------ | ------- | ----------- | -------- |
| temp     | string | --      | Template    | &#10003; |
| data     | object | --      | Data object | &#10003; |

---code---

```javascript
var template = 'My name is {{\firstName}}{{\#lastName|notEmpty}} {{\lastName}}{{\/lastName}}'
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
My name is John Smith
```