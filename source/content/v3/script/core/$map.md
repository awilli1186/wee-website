---
name: $map
heading: Translate items in an array or selection to new array
---

The callback receives the current element as well as the index.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | array, [selection](/script#selection) | -- | Array or selection | ✓ |
| fn | [function](/script/#functions) | -- | Callback function | ✓ |
| options | object | -- | Callback options below ||

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Function arguments ||
| scope | object | -- | Function scope ||

---code|type:array|modifier:split|label:Array---

```javascript
Wee.$map([1, 2, 3], function(val) {
	return val + 1;
});
```

```javascript
[2, 3, 4]
```

---code|type:array|modifier:split|label:Selection---

```javascript
Wee.$map('ref:element', function(el, i) {
	return $(el).text();
});
```

```javascript
["text", "text", ...]
```