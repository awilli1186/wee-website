---
name: $map
heading: Translate items in an array or selection to new array
---

The callback receives the current element as well as the index.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | array, selection | -- | Array or [Wee selection](/script/core#core) | &#10003; |
| fn | function | -- | Callback function | &#10003; |
| opt | object | -- | Callback options below ||

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