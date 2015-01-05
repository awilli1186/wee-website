---
name: $get
heading: Get public variable with optional default
variables:
  - { var: "key", desc: "Reference to stored value", type: "string", req: true }
  - { var: "def", desc: "Default value if the key doesn't exist", type: "any" }
  - { var: "set", desc: "If the value doesn't exist should the default be permanently set", default: "false", type: "boolean" }
  - { var: "opt", desc: "Callback options", type: "object" }
---

---code---

```javascript
Wee.$get('key');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback', true);
Wee.$get('anotherKey');
```

```html
Success
null
Fallback
null
Fallback
Fallback
```