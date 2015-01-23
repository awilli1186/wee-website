---
name: Render
---

Render parses your template using a data object.

---table---

| Variable | Type   | Default | Description | Required |
| -------- | ------ | ------- | ----------- | -------- |
| temp     | string | --      | Template    | &#10003; |
| data     | object | --      | Data object | &#10003; |

---doc---

```javascript
var data = {
	firstName: "John",
	lastName: "Smith"
},
template = "My name is {{firstName|tag}}{{#lastName|notEmpty|tag}} {{lastName|tag}}{{/lastName}}";
```

---code---

```javascript
Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```