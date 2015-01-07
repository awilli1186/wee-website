---
name: $eq
heading: Get indexed node of specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "i", desc: "Index of the element", type: "number", req: true }
---

```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

---code---

```javascript
Wee.$eq('li', 0);
```

```html
<li>List item 1</li>
```