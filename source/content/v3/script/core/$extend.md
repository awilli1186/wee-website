---
name: $extend
heading: Extend target object with source object(s)
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| deep | boolean, object | false | Extend nested properties else target object | ✔ |
| target | object | -- | Target/source object | ✔ |
| source | object | -- | Source object ||
| source | object | -- | Additional objects... ||

---doc|label:Clone Object---

If the second argument is an empty object literal, the third object will be cloned.

---code|modifier:split---

```javascript
Wee.$extend(true, {}, {
	key1: 'val1',
	key2: 'val2'
});
```

```javascript
{
	key1: "val1",
	key2: "val2"
}
```

---code|modifier:split|label:Merge Objects---

```javascript
Wee.$extend({
	key1: 'val1',
	key2: 'val2'
}, {
	key2: 'val3',
	key3: 'val4'
});
```

```javascript
{
	key1: "val1",
	key2: "val2",
	key3: "val4"
}
```