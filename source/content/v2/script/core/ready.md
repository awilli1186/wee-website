---
name: Ready
heading: Execute specified function when document is ready
---

The ready function will wait for the page to finish loading else immediately execute the function.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| fn | [function](/script/#functions), array | -- | Document ready function(s) | ✔ |

---code|modifier:stacked---

```javascript
Wee.ready(function() {
	// Document ready logic
});
```

```javascript
Wee.ready([
	'routes:run',
	'controllerName:methodName'
]);
```