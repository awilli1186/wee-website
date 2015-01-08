---
name: $removeClass
heading: Removes specified class from specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Class name(s) to remove, or callback function taking the element, index, and existing classname", type: "string, callback", req: true }
---

---doc---

```html
<div class="element modifier"></div>
```

Separate multiple class names with spaces.

```javascript
$('.element').removeClass('modifier element');
```