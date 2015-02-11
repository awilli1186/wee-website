---
name: $get
heading: Get global variable
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference ||
| fallback | any | null | Default value if not set ||
| set | boolean | false | Set default permanently ||
| options | object | -- | [Callback options](/script/#functions) ||

---code|modifier:split---

```javascript
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback', true);
Wee.$get('anotherKey');
```

```javascript
null
Fallback
null
Fallback
Fallback
```

---code|type:object|modifier:split|label:Get All---

```javascript
Wee.$get();
```

```javascript
{object}
```