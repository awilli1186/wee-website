---
name: $append
heading: Append selection or markup after each matching selection
related: $prepend
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✔ |

---code|label:Selection---

```javascript
Wee.$append('ref:element', Wee.$('.js-element'));
```

---code|modifier:stacked|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```html
<h1 data-ref="listHeading">Names</h1>
<ul>
	<li>John Doe</li>
	<li>Jane Doe</li>
</ul>
```

```javascript
Wee.append('ref:listHeading', function(i, html) {
	// Modify to heading the include the number of listed names
	return ' (' + Wee.$children(Wee.$next()).length + ')';
});
```

```html
<h1 data-ref="listHeading">Names (2)</h1>
<ul>
	<li>John Doe</li>
	<li>Jane Doe</li>
</ul>
```