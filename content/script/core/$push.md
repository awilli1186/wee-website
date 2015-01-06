---
name: $push
heading: Push specified value into public array
variables:
  - { var: "key", desc: "Reference to push the value into", type: "string", req: true }
  - { var: "a", desc: "Storage value or key for value", type: "string, any", req: true }
  - { var: "b", desc: "Storage value", type: "any" }
---

---code---

```javascript
Wee.$push('key', 'Success');
Wee.$push('key', 'Success 2');

Wee.$get('key');
Wee.$get('key', 0);
```

```javascript
["Success", "Success 2"]
Success
```