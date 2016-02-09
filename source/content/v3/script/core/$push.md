---
name: $push
heading: Push value into global array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference or value | ✔ |
| value | any | -- | Storage value or prepend value ||
| prepend | false | -- | Prepend value to storage ||

---code---

```javascript
Wee.$push('key', 'Success');
Wee.$push('key', 'Success 2');

Wee.$get('key');
Wee.$get('key.0');
```

```javascript
["Success", "Success 2"]
Success
```