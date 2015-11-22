---
name: $setRef
heading: Add ref elements to datastore
---

Available data-ref values are pushed into the global storage for later retrieval. This method can be called after dynamic content is injected to ensure new refs are available for selection.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| context | [selection](/script#selection) | document | Context selection ||

---code|modifier:stacked---

```html
<div data-ref="element"></div>
```

```javascript
Wee.$setRef();
```

---code|modifier:split---

```javascript
$('ref:element');
```

```html
<div data-ref="element"></div>
```

---note---

**Note:** This function is called by default on page load and after relevant DOM manipulation. Subsequent calls clear the cache for the provided context and reset the references.