---
name: Make
heading: Quickly scaffold core Wee structures
---

---variables|label:Controller---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | camelCase controller name | ✔ |

---code---

```bash
wee make:controller --name=controllerName
```

---variables|label:Module---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | camelCase module name | ✔ |
| author | string | -- | Module author ||
| autoload | boolean | true | Autoload toggle ||
| extension | boolean | false | Extension toggle ||
| website | string | -- | Website reference ||
| description | string | -- | Internal module description ||

---code---

```bash
wee make:module --name=moduleName --extension=true
```

---variables|label:Test---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Title Cased test name | ✔ |

---code---

```bash
wee make:test --name="Test Name"
```