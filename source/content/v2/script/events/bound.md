---
name: Bound
heading: Get currently bound events to optional specified element, event, and function
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection ||
| event | string | -- | Specific event name ||
| fn | [function](/script/#functions) | -- | Specific callback ||

---doc---

By default bound will return all bound events.

---code|type:array|modifier:split---

```javascript
Wee.events.bound();
```

```javascript
[Object, Object, ...]
```

---code|type:array|modifier:split|label:Selection---

```javascript
Wee.events.bound('ref:element');
```

```javascript
[Object, Object, ...]
```

---code|type:array|modifier:split|label:Selection Event---

```javascript
Wee.events.bound('ref:element', 'click');
```

```javascript
[Object, Object, ...]
```