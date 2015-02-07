---
name: $attr
heading: Get attribute of first element or set matched elements attribute with specified value
---

---variables---

| Variable | Type              | Default | Description                          | Required |
| -------- | ----------------- | ------- | ------------------------------------ | -------- |
| sel      | selector, element | --      | Selector or element                  | &#10003; |
| a        | string, object    | --      | Attribute to get or set or an object | &#10003; |
| b        | string            | --      | Value to assign to attribute         |          |

---doc---

```html
<a class="element" href="http://www.weepower.com">Link</a>
```

---code|label:Get---

```javascript
Wee.$attr('.element', 'href');
```

```html
http://www.weepower.com
```