---
name: $position
heading: Get the position of a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
---

---code---

```javascript
Wee.$position('.element');
```

```javascript
{
    top: 100,
    left: 100
}
```