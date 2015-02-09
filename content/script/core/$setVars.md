---
name: $setVars
heading: Add metadata variables to datastore
---

---doc|label:Single Value---

Available data-set values are pushed into the global storage for later retrieval.

---code|modifier:stacked---

```html
<div data-set="key" data-value="value"></div>
```

```javascript
Wee.$setVars();
```

---code|type:string|modifier:split---

```javascript
Wee.$get('key');
```

```javascript
"value"
```

---doc|label:Value Array---

To push into an array instead of setting a single value append array brackets to the end of the key.

---code---

```html
<div data-set="key[]" data-value="value1"></div>
<div data-set="key[]" data-value="value2"></div>
<div data-set="key[]" data-value="value3"></div>
```

---code|type:array|modifier:split---

```javascript
Wee.$get('key');
```

```javascript
["value1", "value2", "value3"]
```

---note---

**Note:** This function is called by default with on page load.