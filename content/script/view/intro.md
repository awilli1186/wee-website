---
name: View
heading: Templating
intro: true
global:
  seoTitle: View
  seoDesc:
---

Templating starts with a data object. This object includes any values needed by your template.

```javascript
var data = {
    firstName: "John",
    lastName: "Smith",
    age: 30
}
```

Values from the data object are accessed inside of the template by using tags.

```javascript
var template = "Hello, my name is [[firstName]].";
```