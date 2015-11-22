---
name: $removeClass
heading: Remove classes from each matching selection
related: $addClass
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | [function](/script/#functions), string | -- | Class name(s) to remove or callback | ✔ |

---code|label:Single---

```javascript
Wee.$removeClass('ref:element', 'modifier');
```

---code|label:Multiple---

Separate multiple class names with spaces.

```javascript
Wee.$removeClass('ref:element', 'modifier modifier2');
```

---code|label:Function---

The current index and class value are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$removeClass('ref:element', function(i, className) {
	// Remove an indexed class
	return className + i;
});
```