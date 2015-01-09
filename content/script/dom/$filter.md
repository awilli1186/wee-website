---
name: $filter
heading: Return a subset of elements based on a specified filter from a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector or callback taking the element and index", type: "selector, callback", req: true }
  - { var: "opt", desc: "Callback arguments", type: "object" }
---

```html
<ul>
    <li class="first"></li>
    <li class="second"></li>
</ul>
```

---code---

```javascript
Wee.$filter('li', '.second');
```

```html
<li class="second"></li>
```