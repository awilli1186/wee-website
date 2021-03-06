---
name: $setVar
heading: Add metadata variables to datastore
---

---code|modifier:stacked|label:Single Value---

Available data-set values are pushed into the global storage for later retrieval.

```html
<div data-set="key" data-value="value"></div>
```

```javascript
Wee.$setVar();
```

---code|type:string|modifier:split---

```javascript
Wee.$get('key');
```

```javascript
"value"
```

---code|label:Value Array---

To push into an array instead of setting a single value append array brackets to the end of the key.

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

---doc|label:Simple Object---

To create a keyed object you can pass keys into the array notation.

---code---

```html
<div data-set="obj.key1" data-value="value1"></div>
<div data-set="obj.key2" data-value="value2"></div>
<div data-set="obj.key3" data-value="value3"></div>
```

---code|type:object|modifier:split---

```javascript
Wee.$get('obj');
```

```javascript
{
	"key1": "value1",
	"key2": "value2"
	"key3": "value3"
}
```

---doc|label:Complex Object---

You can also nest objects by continuing the array notation.

---code---

```html
<div data-set="obj.key1" data-value="value1"></div>
<div data-set="obj.key2.sub1" data-value="value2"></div>
<div data-set="obj.key2.sub2" data-value="value3"></div>
```

---code|type:object|modifier:split---

```javascript
Wee.$get('obj');
```

```javascript
{
	"key1": "value1",
	"key2": {
		"sub1": "value2",
		"sub2": "value2"
	}
}
```

---code|label:JSON---

```html
<div data-set="obj" data-value='{"key": true}'></div>
```

---code|type:boolean|modifier:split---

```javascript
Wee.$get('obj.key');
```

```javascript
true
```

---note---

**Note:** This function is called by default on page load.