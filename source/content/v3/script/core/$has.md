---
name: $has
heading: Check if storage criteria is set
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference | ✓ |
| value | any | -- | Storage key or value ||

---code|type:boolean|modifier:split|label:Key---

```javascript
Wee.$set('key', {
	key1: 'Don'
});
Wee.$has('key.key1');
```

```javascript
true
```

---code|type:boolean|modifier:split|label:Value---

```javascript
Wee.$set('key', [1, 2, 3]);
Wee.$has('key', 4);
```

```javascript
false
```