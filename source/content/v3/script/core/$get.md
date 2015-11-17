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
| options | object | -- | [Callback options](/script#functions) ||

---code|modifier:split---

```javascript
Wee.$get('key');
Wee.$get('key', 'Fallback');
Wee.$get('key');
Wee.$get('key', 'Fallback', true);
Wee.$get('key');
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