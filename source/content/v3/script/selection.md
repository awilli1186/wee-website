---
name: Selection
---

Wee accepts any browser-supported selection queries. Internally Wee parses the selection string to invoke the most efficient native selection method and returns an array of matching nodes.

---code|label:Examples---

```javascript
$('#id');
$('.class');
$('#id .class');
$('.class1, .class2');
$('.parent > .child');
```

---doc---

References are a logical approach to selecting elements. They are cached when the page loads making them extremely quick to reference and are more visually distinct in markup than `js-` classes. Anywhere you can pass a standard selector you can also pass a 'ref:name' string.

---code|modifier:split---

```html
<div data-ref="element"></div>
```

```javascript
$('ref:element');
```

---note---

**Note:** References can't be used in subset selectors like `$('ref:element .child')`. To scope a selection within a reference pass the ref selector as the context argument like `$('.child', 'ref:element')`.

---doc---

If multiple references are set with the same name they are pushed into an array and can be targeted with a single ref selection. You can also provide a comma-delimited list of multiple refs.

---code|modifier:split---

```html
<div data-ref="element"></div>
<div data-ref="element element2"></div>
```

```javascript
$('ref:element').on('click', function() {
	// Method logic
});

$('ref:element, ref:element2').on('click', function() {
	// Method logic
});
```

---note---

**Note:** `Wee.$setRef()` can be called to update the ref cache as needed.