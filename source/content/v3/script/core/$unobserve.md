---
name: $unobserve
heading: Remove callback from data storage change
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference ||

---code|label:Remove All---

```javascript
Wee.$unobserve();
```

---code|label:Remove Single---

```javascript
Wee.$unobserve('key.nested');
```