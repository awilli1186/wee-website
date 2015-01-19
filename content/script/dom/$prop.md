---
name: $prop
heading: Get property of specified element or set property with specified value
---

---table---

| Variable | Type              | Default | Description                                                                 | Required |
| -------- | ----------------- | ------- | --------------------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                                         | &#10003; |
| a        | string, object    | --      | Property name or object of properties                                       | &#10003; |
| b        | string, callback  | --      | Property value or callback taking the element, index, and existing property |          |

---code|label:Get|type:string---

```javascript
Wee.$prop('a', 'href');
```

```javascript
https://www.weepower.com/
```

---doc|label:Set---

```javascript
Wee.$prop('a', {
    'href': 'https://www.weepower.com/'
});
```