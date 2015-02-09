---
name: addHelper
---

This allows the creation of custom helpers. Properties of the tag that the helper is being called on can be accessed via the current scope this. These include val, data, root, tag, index, helpers, and fallback.

---variables---

| Variable | Type     | Default | Description  | Required |
| -------- | -------- | ------- | ------------ | -------- |
| a        | string   | --      | Helper name  | &#10003; |
| b        | callback | --      | Helper logic | &#10003; |

---code---

```javascript
Wee.view.addHelper('uppercase', function() {
	return this.val.toUpperCase();
});
```

---code|modifier:split|type:string---

```javascript
var template = 'My name is {{name|uppercase|tag}}.',
	data = {
		name: 'john'
	};

Wee.view.render(template, data);
```

```javascript
"My name is JOHN."
```