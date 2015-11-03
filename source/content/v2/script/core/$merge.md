---
name: $merge
heading: Merge source array into target array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | array | -- | Target array | ✓ |
| source | array | -- | Source array | ✓ |
| unique | boolean | false | Remove duplicates ||

---code|type:array|modifier:split---

```javascript
var arr1 = [1, 2, 3],
arr2 = [4, 5, 6];

Wee.$merge(arr1, arr2);
```

```javascript
[1, 2, 3, 4, 5, 6]
```