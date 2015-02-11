---
name: $width
heading: Get or set the width of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | [function](/script/#functions), string | -- | Width to set or callback | ✓ |

---code|type:number|modifier:split|label:Get---

```javascript
Wee.$width('ref:element');
```

```javascript
100
```

---note---

**Note:** The value returned is a unitless pixel value.

---code|label:Set---

```javascript
Wee.$width('ref:element', '10rem');
```

---code|label:Function---

The current index and width are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$width('ref:element', function(el, i, width) {
	// Callback logic
});
```