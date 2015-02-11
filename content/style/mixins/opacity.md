---
name: Opacity
---

---variables---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | --      | Opacity     | ✓ |

---code---

```less
.opacity(50%);
```

```less
filter: alpha(opacity=50);
opacity: 0.5;
```

---code|label:Transparent---

```less
.transparent();
```

```less
filter: alpha(opacity=0);
opacity: 0;
```

---code|label:Opaque---

```less
.opaque();
```

```less
filter: alpha(opacity=100);
opacity: 1;
```