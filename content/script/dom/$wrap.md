---
name: $wrap
heading: Wrap HTML around specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "html", desc: "HTML or callback taking the element and index", type: "string, callback", req: true }
---

---code---

```javascript
Wee.$wrap('.element', '<div></div>');
```

```html
<div>
    <div class="element"></div>
</div>
```