---
name: $isFunction
heading: Determine if specified argument is a function
---

---variables---

| Variable | Type | Default | Description       | Required |
| -------- | ---- | ------- | ----------------- | -------- |
| obj      | any  | --      | Value to evaluate | &#10003; |

---code---

```javascript
Wee.$isFunction({});
Wee.$isFunction('string');
Wee.$isFunction(function() {});
```

```javascript
false
false
true
```