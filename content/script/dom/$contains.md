---
name: $contains
heading: Determine if specified parent element contains specified child element
---

---variables---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| sel      | selector, element | --      | Parent element | &#10003; |
| child    | selector, element | --      | Child element  | &#10003; |

---code|type:boolean---

```javascript
Wee.$contains('.parent', '.child');
```

```html
true
```