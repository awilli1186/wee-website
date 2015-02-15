---
name: $after
heading: Insert selection or markup after each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✓ |
| remove | boolean | false | Remove target after insertion ||

---code|label:Selection---

```javascript
Wee.$after('ref:element', Wee.$('.js-element'));
```

---code|label:Markup---

```javascript
Wee.$after('ref:element', '<span>Injected notice</span>');
```

---code|modifier:stacked|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```html
<div data-name="John Smith">
	<h1 data-ref="bioName">Name</h1>
</div>
```

```javascript
Wee.$after('ref:bioName', function(i, html) {
	// Add the parent data-name as a paragraph after the matched element
	return '<p>' + Wee.$data(Wee.$parent(this), 'name') + '</p>';
});
```

```html
<div data-name="John Smith">
	<h1 data-ref="bioName">Name</h1>
	<p>John Smith</p>
</div>
```