---
name: Ready
heading: Execute specified function when document is ready
---

---table---

| Variable | Type     | Default | Description     | Required |
| -------- | -------- | ------- | --------------- | -------- |
| fn       | callback | --      | Callback option | &#10003; |

---doc|label:Callback---

```javascript
Wee.ready(function() {
	// Document ready logic
});
```

---doc|label:Wee:fn array---

```javascript
Wee.ready([
	'fn:function',
	'fn:function2'
]);
```