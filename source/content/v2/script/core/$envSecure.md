---
name: $envSecure
heading: Determine if the current environment is secured over HTTPS
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| url | string | current url | URL to evaluate ||

---code|type:boolean|modifier:split---

```javascript
Wee.$envSecure();
```

```javascript
true
```