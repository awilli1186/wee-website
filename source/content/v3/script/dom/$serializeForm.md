---
name: $serializeForm
heading: Serialize input values from first matching form selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| json | boolean | false | Concert to JSON ||

---code|modifier:split|label:Standard---

```javascript
Wee.$serializeForm('ref:element');
```

```javascript
"inputName=value&inputName2=value2"
```

---code|modifier:split|label:JSON---

```javascript
Wee.$serializeForm('ref:element', true);
```

```javascript
{
	"inputName": "value",
	"inputName2": "value2"
}
```