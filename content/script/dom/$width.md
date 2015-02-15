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

---code|modifier:stacked|label:Function---

The current index and width are injected into the callback. The scope of ```this``` is the element.

```html
<div data-ref="example" style="width: 100px;"></div>
```

```javascript
Wee.$width('ref:example', function(i, width) {
	// Increase the width of the element by 50px
	return (width += 50) + 'px';
});
```

---note---

**Note:** If no unit is provided pixels will be set.