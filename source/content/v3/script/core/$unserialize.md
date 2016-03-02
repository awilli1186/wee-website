---
name: $unserialize
heading: Convert serialized string back into an object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| str | string | -- | Serialized string | ✔ |

---code|type:string|modifier:split---

```javascript
Wee.$unserialize('key1=123&key2[]=value+1&key2[]=value+2');
```

```javascript
{
	"key1": "123",
	"key2[]": [
		"value 1",
		"value 2"
	]
}
```