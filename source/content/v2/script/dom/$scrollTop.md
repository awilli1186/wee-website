---
name: $scrollTop
heading: Get or set the Y scroll position of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | integer | -- | Top position ||

---code|type:number|modifier:split|label:Get Value---

```javascript
Wee.$scrollTop();
```

```javascript
1560
```

---note---

**Note:** The value returned is a unitless pixel value.

---code|label:Set Value---

```javascript
Wee.$scrollTop('body', 15);
```

---note---

**Note:** Scroll position should be provided as unitless pixel value.