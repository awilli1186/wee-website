---
name: $serializeForm
heading: Serialize input values from first matching form selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |

---code|modifier:split---

```javascript
Wee.$serializeForm('ref:element');
```

```javascript
"inputName=value&inputName2=value2"
```