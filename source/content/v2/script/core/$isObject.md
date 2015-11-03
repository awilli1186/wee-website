---
name: $isObject
heading: Determine if value is an object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | any  | -- | Value to evaluate | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$isObject({});
Wee.$isObject('string');
```

```javascript
true
false
```