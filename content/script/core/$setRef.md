---
name: $setRef
heading: Add bind elements to datastore
---

```html
<div data-ref="id"></div>
```

---doc---

This function is called by default with Wee core on page load. Available
data-ref values are pushed into the global storage for later retrieval.

```javascript
Wee.$setRef();
```

---code---

```javascript
$('ref:id');
```

```html
<div data-ref="id"></div>
```