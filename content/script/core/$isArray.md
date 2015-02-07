---
name: $isArray
heading: Determine if specified argument is array
---

---variables---

| Variable | Type | Default | Description       | Required |
| -------- | ---- | ------- | ----------------- | -------- |
| obj      | any  | --      | Value to evaluate | &#10003; |

---code---

```javascript
Wee.$isArray(['sring']);
Wee.$isArray('string');
```

```javascript
true
false
```