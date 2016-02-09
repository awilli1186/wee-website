---
name: $concat
heading: Concatenate values into global storage
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference or value | ✔ |
| value | any | -- | Storage value or prepend value ||
| prepend | boolean | false | Prepend value to storage ||

---code|type:array|modifier:split---

```javascript
Wee.$concat('key', 1);
Wee.$concat('key', [2, 3], true);
```

```javascript
[2, 3, 1]
```