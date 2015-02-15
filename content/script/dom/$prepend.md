---
name: $prepend
heading: Prepend selection or markup before each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✓ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$prepend('ref:element', Wee.$('.js-element'));
```

---code|label:Function---

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
<h1 data-ref="listHeading">2 Names</h1>
<ul>
	<li>John Doe</li>
	<li>Jane Doe</li>
</ul>
```