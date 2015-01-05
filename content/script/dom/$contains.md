---
name: $contains
heading: Determine if specified parent element contains specified child element
variables:
  - { var: "sel", desc: "Parent element", type: "element, selector", req: true }
  - { var: "child", desc: "Child element", type: "element, selector", req: true }
---

---code---

```javascript
Wee.$contains('body', '.element');
```

```html
true
```