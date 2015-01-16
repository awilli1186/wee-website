---
name: $getKeys
heading: Get keys from an object
---

---table---

| Variable | Type   | Default | Description                | Required |
| -------- | ------ | ------- | -------------------------- | -------- |
| obj      | object | --      | Object (single level only) | &#10003; |

---doc---

```javascript
var obj = {
	key: 'val',
	key2: 'val',
	key3: 'val'
};

var $keys = Wee.$getKeys(obj);
```