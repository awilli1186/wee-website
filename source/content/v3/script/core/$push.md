---
name: $push
heading: Push value into global array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference | ✓ |
| value | any | -- | Storage value | ✓ |
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