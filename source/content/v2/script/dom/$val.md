---
name: $val
heading: Get value of first matching selection or set values of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | [function](/script/#functions), string | -- | Class name(s) to add or callback | ✔ |

---code|label:Get---

```javascript
Wee.$val('ref:element');
```

---code|label:Set---

```javascript
Wee.$val('ref:element', '123');
```

---code|modifier:stacked|label:Function---

The current index and value are injected into the callback. The scope of ```this``` is the element.

```html
<input type="text" value="This is an ordinary sentence in an input field." data-ref="input">
```

```javascript
Wee.$val('ref:input', function(i, value) {
	// Check the length of the current value but don't change the value
	if (value.length > 20) {
		alert('Getting long winded, aren\'t we?');
	}

	return value;
});
```