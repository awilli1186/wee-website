---
name: $isObject
heading: Determine if specified argument is an object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any  | -- | Value to evaluate | &#10003; |

---code|type:boolean|modifier:split---

```javascript
Wee.$isObject({});
Wee.$isObject('string');
```

```javascript
true
false
```