---
name: $removeClass
heading: Removes specified class from specified element
---

---variables---

| Variable | Type              | Default | Description                                                                            | Required |
| -------- | ----------------- | ------- | -------------------------------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                                                    | &#10003; |
| val      | string, callback  | --      | Class name(s) to remove, or callback taking the element, index, and existing classname | &#10003; |

---doc---

```html
<div class="element modifier"></div>
```

Separate multiple class names with spaces.

```javascript
$('.element').removeClass('modifier element');
```