---
name: $merge
heading: Merge specified array with specified source array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| arr | array | -- | Target array| &#10003; |
| arr2 | array | -- | Source array| &#10003; |
| dup | boolean | false | Remove duplicates ||

---code|type:array|modifier:split---

```javascript
var arr1 = [1, 2, 3],
arr2 = [4, 5, 6];

Wee.$merge(arr1, arr2);
```

```javascript
[1, 2, 3, 4, 5, 6]
```