---
name: $attr
heading: Get attribute of first element or set matched elements attribute with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "a", desc: "Attribute to get or set or an object", type: "string, object", req: true }
  - { var: "b", desc: "Value to assign to attribute", type: "string" }
---

```html
<a class="element" href="http://www.weepower.com">Link</a>
```

---code|label:Get---

```javascript
Wee.$attr('.element', 'href');
```

```html
http://www.weepower.com
```