---
name: $diff
heading: Generate a delta from two objects
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| a | object | -- | Original object | ✓ |
| b | object | -- | Compared object | ✓ |

---code|type:object|modifier:split---

```javascript
Wee.$diff({
	key1: 'Don',
	key2: true,
	key3: {
		nested: true
	}
}, {
	key1: 'Don',
	key3: {
		nested: false
	},
	key4: 'new'
});
```

```javascript
{
	key1: {
		after: "Don",
		before: "Don",
		type: "-"
	},
	key2: {
		after: undefined,
		before: true,
		type: "d"
	},
	key3: {
		nested: {
			after: false,
			before: true,
			type: "u"
		}
	},
	key4: {
		after: "new",
		before: undefined,
		type: "c"
	}
}
```