---
name: Bound
heading: Get currently bound events to optional specified element, event, and function
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | Specific [Wee selection](/script/core#core) ||
| evt | string | -- | Specific event name ||
| fn | function | -- | Specific callback ||

---doc---

By default bound will return all bound events.

---code|type:array|modifier:split---

```javascript
Wee.events.bound();
```

```javascript
[Object, Object, ...]
```

---code|type:array|modifier:split|label:Element---

```javascript
Wee.events.bound('ref:element');
```

```javascript
[Object, Object, ...]
```

---code|type:array|modifier:split|label:Element Event---

```javascript
Wee.events.bound('ref:element', 'click');
```

```javascript
[Object, Object, ...]
```