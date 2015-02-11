---
name: $wrap
heading: Wrap markup around each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| html | [function](/script/#functions), string | -- | Wrapper HTML or callback | ✓ |

---code|label:Markup---

```javascript
Wee.$wrap('ref:element', '<div class="wrapper"></div>');
```

---code|label:Function---

The current index is injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$addClass('ref:element', function(i) {
	// Callback logic
});
```