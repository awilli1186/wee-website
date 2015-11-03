---
name: $extend
heading: Extend target object with source object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| deep | boolean, object | false | Deep nesting ||
| target | object | -- | Target object ||
| source | object | -- | Source object | ✓ |
| source | object | -- | Additional object ||

---doc|label:Clone Object---

In this deep instance the first parameter is true. If the second argument is an empty object literal, the third object will be cloned.

---code|modifier:split---

```javascript
var obj = {
	key1: 'val1',
	key2: 'val2'
};

Wee.$extend(true, {}, obj);
```

```javascript
{
	key1: "val1",
	key2: "val2"
}
```

---code|modifier:split|label:Merge Objects---

```javascript
var obj = {
		key1: 'val1',
		key2: 'val2'
	},
	obj2 = {
		key2: 'val3',
		key3: 'val4'
	};

Wee.$extend(obj, obj2);
```

```javascript
{
	key1: "val1",
	key2: "val2",
	key3: "val4"
}
```