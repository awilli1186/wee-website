---
name: $getKeys
heading: Get keys from an object
variables:
  - { var: "obj", desc: "Object (single level only)", type: "object", req: true }
---

```javascript
var obj = {
	key: 'val',
	key2: 'val',
	key3: 'val'
};

var $keys = Wee.$getKeys(obj);
```