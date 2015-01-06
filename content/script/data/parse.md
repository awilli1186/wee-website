---
name: Parse
heading: Parse specified data into specified template string
variables:
  - { var: "str", desc: "Template string",type: "string", req: true }
  - { var: "obj", desc: "Object data available to parse", type: "object", req: true}
  - { var: "opt", desc: "Parse options below", type: "object"}
options:
  - { var: "encode", desc: "Encode markup to output raw",type: "boolean", default: "false"}
---

---doc---

The parsing engine allows you to access attributes at any level of the object in dot notation such as ```top.second.third```. If a match is not found it will be replaced with an empty string. Optionally you can pass a fallback in the format of ```top.second.third || Fallback```.

---code|label:Nested Object---

```javascript
Wee.data.parse('Hello name.first name.last', {
	name: {
		first: 'Matthew',
		last: 'Wallace'
	}
});
```

```html
Hello Matthew Wallace
```

---code|label:Fallback---

```javascript
Wee.data.parse('You have {{count || 0}} items in your cart', {
	empty: true
});
```

```html
You have 0 items in your cart
```