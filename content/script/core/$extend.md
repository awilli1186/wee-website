---
name: $extend
heading: Extend specified object with specified source object
variables:
  - { var: "obj", desc: "Target object", type: "object", req: true }
  - { var: "src", desc: "Source object", type: "object", req: true }
  - { var: "deep", desc: "Deep nesting", type: "boolean", default: "false" }
---

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