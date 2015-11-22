---
name: $push
heading: Push value into global array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Reference to push the value into | ✔ |
| a | string, any | -- | Storage value or key for value | ✔ |
| b | any | -- | Storage value ||

---code---

```javascript
Wee.$push('key', 'Success');
Wee.$push('key', 'Success 2');

Wee.$get('key');
Wee.$get('key', 0);
```

```javascript
["Success", "Success 2"]
Success
```