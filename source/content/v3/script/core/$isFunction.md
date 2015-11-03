---
name: $isFunction
heading: Determine if value is a function
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | any  | -- | Value to evaluate | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$isFunction({});
Wee.$isFunction('string');
Wee.$isFunction('controller:fn');
Wee.$isFunction(function() {});
```

```javascript
false
false
true
true
```