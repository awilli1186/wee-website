---
name: $extend
heading: Extend specified object with specified source object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | object | -- | Target object ||
| src | object | -- | Source object | &#10003; |
| deep | boolean | false | Deep nesting ||

---code|modifier:split|label:Clone Object---

```javascript
var obj = {
	key1: 'val1',
	key2: 'val2'
};

Wee.$extend({}, obj);
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