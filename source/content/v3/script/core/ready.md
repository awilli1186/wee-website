---
name: Ready
heading: Execute specified function when document is ready
---

The ready function will wait for the page to finish loading or immediately execute the function if the page is already loaded.

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