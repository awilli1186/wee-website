---
name: $empty
heading: Remove child nodes from specified element
variables:
  - { var: "sel", desc: "Element to empty", type: "selector, element", req: true }
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
Wee.$empty('ul');
```

```html
<ul></ul>
```