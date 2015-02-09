---
name: $isString
heading: Determine if specified argument is a string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any  | -- | Value to evaluate | &#10003; |

---code|type:boolean|modifier:split---

```javascript
Wee.$isString({});
Wee.$isString('string');
```

```javascript
false
true
```