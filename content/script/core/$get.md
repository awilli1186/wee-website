---
name: $get
heading: Get public variable with optional default
---

<div class="variables">

Variable | Type | Default | Description | Required
-------- | ---- | ------- | ----------- | --------
key | string | &ndash; | Reference to stored value | ✓
def | any | &ndash; | Default value if the key doesn't exist ||
set | boolean | false | If the value doesn't exist should the default be permanently set ||
opt | object | &ndash; | Callback options ||

</div>

<div class="code">

```javascript
Wee.$get('key');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback');
Wee.$get('anotherKey');
Wee.$get('anotherKey', 'Fallback', true);
Wee.$get('anotherKey');
```

```html
Success
undefined
Fallback
undefined
Fallback
Fallback
```

</div>