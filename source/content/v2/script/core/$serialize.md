---
name: $serialize
heading: Serialize object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | object | -- | Object to serialize | ✔ |

---code|type:string|modifier:split---

```javascript
Wee.$serialize({
	key1: 'value1',
	key2: 'value2',
	key3: 'value3'
});
```

```javascript
key1=value1&key2=value2&key3=value3
```

---note---

**Note:** Only the first level of the object and those with string values are serialized.