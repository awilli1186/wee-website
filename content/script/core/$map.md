---
name: $map
heading: Translate items in an array|selection to new array
---

---variables---

| Variable | Type            | Default | Description            | Required |
| -------- | --------------- | ------- | ---------------------- | -------- |
| sel      | array, selector | --      | Array or selector      | &#10003; |
| fn       | callback        | --      | Callback function      | &#10003; |
| opt      | object          | --      | Callback options below |          |

---variables---

| Variable | Type   | Default | Description                                           | Required |
| -------- | ------ | ------- | ----------------------------------------------------- | -------- |
| args     | array  | --      | Callback arguments (appended after element and index) |          |
| scope    | object | --      | Callback scope                                        |          |

---code|label:Simple Array---

```javascript
Wee.$map([1, 2, 3], function(val) {
	return val + 1;
});
```

```javascript
[2, 3, 4]
```