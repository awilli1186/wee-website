---
name: $extend
heading: Extend specified object with specified source object
---

---table---

| Variable | Type    | Default | Description   | Required |
| -------- | ------- | ------- | ------------- | -------- |
| obj      | object  | --      | Target object | &#10003; |
| src      | object  | --      | Source object | &#10003; |
| deep     | boolean | false   | Deep nesting  |          |

---doc---

```javascript
var obj1 = {
    key1: 'val1',
    key2: 'val2'
},
obj2 = {
    key3: 'val3',
    key4: 'val4'
};
```

```javascript
var $obj3 = Wee.$extend(obj1, obj2);
```