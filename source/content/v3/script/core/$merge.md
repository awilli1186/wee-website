---
name: $merge
heading: Extend object into global storage
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference or merge object | ✔ |
| obj | any | -- | Storage value or prepend value ||
| prepend | boolean | false | Prepend value to storage ||

---code|type:array|modifier:split---

```javascript
Wee.$merge('key', {
	key1: 'value'
});
Wee.$merge('key', {
	key2: 'value2'
});
```

```javascript
{
	key1: "value",
	key2: "value"
}
```