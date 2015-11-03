---
name: $scrollLeft
heading: Get or set the X scroll position of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | window | Target selection ||
| value | integer | -- | Left position ||

---code|type:number|modifier:split|label:Get Value---

```javascript
Wee.$scrollLeft();
```

```javascript
0
```

---note---

**Note:** The value returned is a unitless pixel value.

---code|label:Set Value---

```javascript
Wee.$scrollLeft(15);
```

---note---

**Note:** Scroll position should be provided as unitless pixel value.