---
name: $offset
heading: Get the offset of a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
---

---code---

```javascript
Wee.$offset('body');
```

```javascript
{
    top: 0,
    left: 0
}
```