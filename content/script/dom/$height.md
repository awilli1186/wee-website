---
name: $height
heading: Get or set the height of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | [function](/script/#functions), string | -- | Height to set or callback | ✓ |

---code|type:number|modifier:split|label:Get---

```javascript
Wee.$height('ref:element');
```

```javascript
100
```

---note---

**Note:** The value returned is a unitless pixel value.

---code|label:Set---

```javascript
Wee.$height('ref:element', '10rem');
```

---code|label:Function---

The current index and height are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$height('ref:element', function(i, height) {
	// Callback logic
});
```