---
name: $setVars
heading: Add metadata variables to datastore
---

```html
<div data-set="key" data-value="value"></div>
```

---doc|label:Single Value---

This function is called by default with Wee core on page load. Available data-set values are pushed into the global storage for later retrieval.

```javascript
Wee.$setVars();
```

---code---

```javascript
Wee.$get('key');
```

```javascript
value
```

---doc|label:Value Array---

To push into an array instead of setting a single value append array brackets to the end of the key.

```html
<div data-set="key[]" data-value="value1"></div>
<div data-set="key[]" data-value="value2"></div>
<div data-set="key[]" data-value="value3"></div>
```

---code---

```javascript
Wee.$get('key');
```

```javascript
["value1", "value2", "value3"]
```