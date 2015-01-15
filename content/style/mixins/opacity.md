---
name: Opacity
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | --      | Opacity     | &#10003; |

---code---

```less
.opacity(50%);
```

```less
filter: alpha(opacity=50);
opacity: 0.5;
```

---code---

```less
.transparent();
```

```less
filter: alpha(opacity=0);
opacity: 0;
```

---code---

```less
.opaque();
```

```less
filter: alpha(opacity=100);
opacity: 1;
```