---
name: $isObject
heading: Determine if specified argument is an object
---

---variables---

| Variable | Type | Default | Description       | Required |
| -------- | ---- | ------- | ----------------- | -------- |
| obj      | any  | --      | Value to evaluate | &#10003; |

---code---

```javascript
Wee.$isObject({});
Wee.$isObject('string');
```

```javascript
true
false
```