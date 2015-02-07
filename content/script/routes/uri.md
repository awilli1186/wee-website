---
name: URI
heading: Get currently bound URI values or set URI data with a specified string or value object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | --| ------- | -- | -- |
| val | string, object | -- | Object parameters below ||

---variables|label:Value Object---

| Variable | Type | Default | Description | Required |
| -------- | ------ | ------- | ----------- | -------- |
| path | string | -- | Current relative path ||
| query| object | -- | Current relative querystring object ||
| hash | string | -- | Current hash value ||

---doc|label:Get---

Based on <code>https://www.weepower.com/script/routes?success=yes#uri</code> the following object would be returned.

---code|type:object|modifier:split---

```javascript
Wee.routes.uri();
```

```javascript
{
	hash: "uri",
	path: "/script/routes",
	query: {
		success: "yes"
	}
}
```

---doc|label:Set---

The set method accepts either an absolute URL, a relative path, or just a #hash.

---code|modifier:split---

```javascript
Wee.routes.uri('/another/page');
```

```javascript
{
	hash: "",
	path: "/another/page",
	query: {}
}
```

---note---

<b>Note:</b> Setting the URI only updates the internal reference. It doesn't navigate the page.