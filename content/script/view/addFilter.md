---
name: addFilter
---

This allows the creation of custom filters. Wee's default filters include is, not, isEmpty, and notEmpty. Properties of the tag that is being filtered can be accessed via the current scope this. These include val, data, root, tag, inner, and empty.

---table---

| Variable | Type     | Default | Description  | Required |
| -------- | -------- | ------- | ------------ | -------- |
| a        | string   | --      | Filter name  | &#10003; |
| b        | callback | --      | Filter logic | &#10003; |

---doc---

```javascript
Wee.view.addFilter('isNumber', function() {
	return typeof this.val === "number";
});
```

---code---

```javascript
var data = {
	age: 30
},
template = "{{#age|isNumber|tag}}I am {{age|tag}} years old.{{/age}}";

Wee.view.render(template, data);
```

```javascript
"I am 30 years old."
```