---
name: $index
heading: Get the sibling index of a specified element
---

---table---

| Variable | Type              | Default | Description     | Required |
| -------- | ----------------- | ------- | --------------- | -------- |
| sel      | selector, element | --      | Sibling element | &#10003; |

---doc---

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