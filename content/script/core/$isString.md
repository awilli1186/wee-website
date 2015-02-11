---
name: $isString
heading: Determine if value is a string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any  | -- | Value to evaluate | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$isString({});
Wee.$isString('string');
```

```javascript
false
true
```