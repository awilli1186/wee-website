---
name: $inArray
heading: Determine if specified element belongs to specified array
variables:
  - { var: "obj", desc: "Source array", type: "array", req: true }
  - { var: "el", desc: "Specified value to check for", type: "any", req: true }
---

---code---

```javascript
var arr = [
'value',
'value2',
'value3'
];

Wee.$inArray('value');
Wee.$inArray('value2');
Wee.$inArray('value4');
```

```javascript
0
1
false
```