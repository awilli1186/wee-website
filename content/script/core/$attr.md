---
name: $attr
heading: Get attribute of first element or set matched elements attribute with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "key", desc: "Attribute to get or set", type: "string", req: true }
  - { var: "val", desc: "Value to assign to attribute", type: "string" }
---

---code|label:Get---

```html
<a class="element" href="http://www.weepower.com">Link</a>
```

```html
http://www.weepower.com
```