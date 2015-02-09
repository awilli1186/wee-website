---
name: $isFunction
heading: Determine if specified argument is a function
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any  | -- | Value to evaluate | &#10003; |

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