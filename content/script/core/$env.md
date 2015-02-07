---
name: $env
heading: Get current environment or detect current environment against specified object
---

---variables---

| Variable | Type   | Default | Description                              | Required |
| -------- | ------ | ------- | ---------------------------------------- | -------- |
| obj      | object | --      | Object of {key: value} environment pairs |          |
| def      | string | --      | Override the fallback environment        |          |

---code|label:Set|type:string---

```javascript
Wee.$env({
	prod: 'www.weepower.com',
	stage: 'www.weepower.stage'
});
```

```javascript
prod
```

---code|label:Get|type:string---

```javascript
Wee.$env();
```

```javascript
prod
```