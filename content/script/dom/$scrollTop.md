---
name: $scrollTop
heading: Get or set the top scroll position of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | integer | -- | Top position ||

---code|type:number|modifier:split---

```javascript
Wee.$scrollTop();
```

```javascript
1560
```

---note---

**Note:** The value returned is a unitless pixel value.