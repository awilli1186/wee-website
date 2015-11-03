---
name: $text
heading: Get inner text of first selection or set each matching selection's text
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | [function](/script/#functions), string | -- | Text to set or callback | ✓ |

---code---

```markup
<div class="js-element">Inner text</div>
```

---code|type:string|modifier:split|label:Get---

```javascript
Wee.$text('.js-element');
```

```javascript
"Inner text"
```

---code|label:Set---

```javascript
Wee.$text('.js-element', 'New text');
```

---code|label:Function---

The current index and text are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$text('.js-element', function(el, i, text) {
	// Return uppercase text
	return text.toUpperCase();
});
```