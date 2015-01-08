---
name: $wrapInner
heading: Wrap HTML around the content of specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "html", desc: "HTML or callback function taking the element and index", type: "string, callback", req: true }
---

```html
<div>Lorem ipsum</div>
```

---code---

```javascript
Wee.$wrapInner('div', '<p></p>');
```

```html
<div>
    <p>Lorem ipsum</p>
</div>
```