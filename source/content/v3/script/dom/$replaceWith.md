---
name: $replaceWith
heading: Replace each matching selection with selection or markup
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✔ |

---code|label:Selection---

```javascript
Wee.$replaceWith('ref:element', Wee.$('.js-element'));
```

---code|label:Markup---

```javascript
Wee.$replaceWith('ref:element', '<span>Replacement element</span>');
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of `this` is the element.

```html
<ul class="names">
	<li>John Doe</li>
	<li>Jane Doe</li>
</ul>
```

---code|modifier:split---

```javascript
Wee.$replaceWith('.names li', function(i, html) {
	return "<li>The " + html + "</li>";
});
```

```html
<ul class="names">
	<li>The Jane Doe</li>
	<li>The John Doe</li>
</ul>
```