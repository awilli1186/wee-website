---
name: $index
heading: Get the zero-based index of a matching selection relative to it's siblings
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

```html
<ul>
    <li></li>
    <li></li>
    <li class="js-last"></li>
</ul>
```

---code|type:number|modifier:split---

```javascript
Wee.$index('.js-last');
```

```javascript
2
```