---
name: $serialize
heading: Serialize specified object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | object | -- | Object to serialize | &#10003; |

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