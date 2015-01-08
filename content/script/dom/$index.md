---
name: $index
heading: Get the sibling index of a specified element
variables:
  - { var: "sel", desc: "Sibling element", type: "selector, element", req: true }
---

```html
<ul>
    <li></li>
    <li></li>
    <li class="last"></li>
</ul>
```

---code---

```javascript
Wee.$index('.last');
```

```javascript
2
```