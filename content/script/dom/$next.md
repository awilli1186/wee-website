---
name: $next
heading: Get the next sibling of a specified element
variables:
  - { var: "sel", desc: "Sibling element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector or callback", type: "selector, callback" }
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
Wee.$next('.first');
```

```html
<li class="second"></li>
```