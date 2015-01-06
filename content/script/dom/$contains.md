---
name: $contains
heading: Determine if specified parent element contains specified child element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
  - { var: "child", desc: "Child element", type: "selector, element", req: true }
---

---code|type:boolean---

```javascript
Wee.$contains('body', '.element');
```

```html
true
```