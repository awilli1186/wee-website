---
name: $env
heading: Get current environment or detect current environment against specified object
variables:
- { var: "obj", desc: "Object of {key: value} environment pairs", type: "object" }
- { var: "def", desc: "Override the fallback environment", type: "string", default: "local" }
---

---doc---

### Set

---code|type:string---

```javascript
Wee.$env({
	prod: 'www.weepower.com',
	stage: 'www.weepower.stage'
});
```

```html
prod
```

---doc---

### Get

---code|type:string---

```javascript
Wee.$env();
```

```html
prod
```