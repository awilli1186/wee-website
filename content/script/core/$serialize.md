---
name: $serialize
heading: Serialize specified object
---

---table---

| Variable | Type   | Default | Description                        | Required |
| -------- | ------ | ------- | ---------------------------------- | -------- |
| obj      | object | --      | Object to serialize (single level) | &#10003; |

---code---

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

---code---

```javascript
Wee.$serialize({
	'key': 'value',
	'key2': 'value2'
});
```

```javascript
key=value&key2=value2
```