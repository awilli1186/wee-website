---
name: $extend
heading: Extend target object with source object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | object | -- | Target object ||
| source | object | -- | Source object | ✔ |
| deep | boolean | false | Deep nesting ||

---doc|label:Clone Object---

If the first argument is an empty object literal, the second object will be cloned.

---code|modifier:split---

```javascript
var obj = {
	key1: 'val1',
	key2: 'val2'
};

Wee.$extend({}, obj, true);
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