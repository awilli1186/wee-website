---
name: $height
heading: Get or set the height of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | [function](/script/#functions), string, number | -- | Height to set or callback | ✔ |

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

---code|modifier:stacked|label:Function---

The current index and height are injected into the callback. The scope of `this` is the element.

```html
<div data-ref="example" style="height: 100px;"></div>
```

```javascript
Wee.$height('ref:example', function(i, height) {
	// Increase the height of the element by 50px
	return (height += 50) + 'px';
});
```

---note---

**Note:** If no unit is provided pixels will be set.