---
name: $trigger
heading: Execute matching observed callbacks
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference | ✔ |

---code|type:string|modifier:split---

```javascript
Wee.$observe('key', function() {
	console.log('Success');
});
Wee.$trigger('key');
```

```javascript
Success
```