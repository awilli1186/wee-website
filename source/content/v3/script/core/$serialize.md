---
name: $serialize
heading: Serialize object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | object | -- | Object to serialize | ✓ |

---code|type:string|modifier:split---

```javascript
Wee.$serialize({
	key1: 'value 1',
	key2: 'value 2',
	key3: 'value 3'
});
```

```javascript
key1=value+1&key2=value+2&key3=value+3
```

---note---

**Note:** Only the first level of the object and those with string values are serialized.