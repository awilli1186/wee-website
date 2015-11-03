---
name: URI
heading: Get currently bound URI values or set URI data with a specified string or value object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | string, object | -- | Object parameters below ||

---variables|label:Value Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| hash | string | -- | Hash value ||
| path | string | -- | Relative path ||
| query | object | -- | Query string object ||

---doc|label:Get---

Based on ```https://www.weepower.com/script/routes?success=yes#uri``` the following object would be returned.

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

---code|label:Set String---

The set method accepts either an absolute URL, a relative path, or just a #hash.

```javascript
Wee.routes.uri('/another/page');
```

---code|label:Set Object---

Only the properties you wish to update should be provided. They will be merged into the current values.

```javascript
Wee.routes.uri({
    hash: 'uri',
    path: '/script/routes',
    query: {
        success: 'yes'
    }
});
```

---note---

**Note:** Setting the URI only updates the internal reference. It doesn't navigate the page.