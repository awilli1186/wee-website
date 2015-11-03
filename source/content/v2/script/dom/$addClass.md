---
name: $addClass
heading: Add classes to each matching selection
related: $removeClass
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | [function](/script/#functions), string | -- | Class name(s) to add or callback | ✓ |

---code|label:Single---

```javascript
Wee.$addClass('ref:element', 'modifier');
```

---code|label:Multiple---

Separate multiple class names with spaces.

```javascript
Wee.$addClass('ref:element', 'modifier modifier2');
```

---code|label:Function---

The current index and class value are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$addClass('ref:element', function(i, className) {
	// Add an indexed class
	return className + i;
});
```

---note---

**Note:** Callbacks can also be in the format of 'controllerName:method'. The index argument is always 0-based.