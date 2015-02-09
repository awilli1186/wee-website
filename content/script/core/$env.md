---
name: $env
heading: Get current environment or detect current environment against specified object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | object | -- | Environment rules ||
| def | string | "local" | Default environment ||

---doc|label:Set---

The key values can either be strings for a direct match or a [functions](/script/#functions) for more complex evaluation. If a function is provided the response should be a boolean. If no match is found the default environment value is used.

---code|type:string|modifier:split---

```javascript
Wee.$env({
	prod: 'www.weepower.com',
	stage: 'stage.weepower.com'
});
```

```javascript
"prod"
```

---code|type:string|modifier:split|label:Get---

```javascript
Wee.$env();
```

```javascript
"prod"
```