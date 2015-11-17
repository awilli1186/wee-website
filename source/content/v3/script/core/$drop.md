---
name: $drop
heading: Remove key or value from global array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference | ✓ |
| value | any | -- | Storage key or value | ✓ |
| prepend | boolean | false | Prepend value to storage ||

---code|type:array|modifier:split|label:Key---

```javascript
Wee.$set('key', {
	key1: 'Don',
	key2: 'Draper'
});
Wee.$drop('key.key2');
```

```javascript
{
	key1: 'Don'
}
```

---code|type:array|modifier:split|label:Value---

```javascript
Wee.$set('key', [1, 2, 3]);
Wee.$drop('key', 2);
```

```javascript
[1, 3]
```