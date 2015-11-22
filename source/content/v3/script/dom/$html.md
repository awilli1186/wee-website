---
name: $html
heading: Get inner HTML of first selection or set each matching selection's HTML
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | [function](/script/#functions), string | -- | HTML to set or callback | ✔ |

---code---

```html
<div class="ref:element"><h1>Heading</h1></div>
```

---code|type:string|modifier:split|label:Get---

```javascript
Wee.$html('ref:element');
```

```javascript
"<h1>Heading</h1>"
```

---code|label:Set---

```javascript
Wee.$html('ref:element', '<h2>New Heading</h2>');
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of `this` is the element.

```javascript
Wee.$html('.js-element', function(el, i, html) {
	// Return uppercase HTML
	return html.toUpperCase();
});
```