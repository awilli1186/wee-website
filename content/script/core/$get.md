---
name: $get
heading: Get public variable with optional default
---

---variables---

| Variable | Type    | Default | Description                                                      | Required |
| -------- | ------- | ------- | ---------------------------------------------------------------- | -------- |
| key      | string  | --      | Reference to stored value                                        | &#10003; |
| def      | any     | --      | Default value if the key doesn't exist                           |          |
| set      | boolean | false   | If the value doesn't exist should the default be permanently set |          |
| opt      | object  | --      | Callback options                                                 |          |

---code---

```javascript
Wee.$get('key');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback', true);
Wee.$get('anotherKey');
```

```javascript
Success
null
Fallback
null
Fallback
Fallback
```