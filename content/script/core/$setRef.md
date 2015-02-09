---
name: $setRef
heading: Add bind elements to datastore
---

Available data-ref values are pushed into the global storage for later retrieval.

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

**Note:** This function is called by default with on page load.