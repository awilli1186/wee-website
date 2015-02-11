---
name: $prev
heading: Get the unique previous sibling of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Simple---

```javascript
Wee.$prev();
```

---code|label:Filtered---

```javascript
Wee.$prev('.class');
```