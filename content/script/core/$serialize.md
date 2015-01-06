---
name: $serialize
heading: Serialize specified object
variables:
  - { var: "obj", desc: "Object to serialize (single level)", type: "object", req: true }
---

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