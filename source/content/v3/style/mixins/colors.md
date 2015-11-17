---
name: Colors
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@baseColor](/style/variables#base) = @darkestGray | Color value ||

---code|modifier:split---

```less
.color(blue);
```

```css
color: #00f;
```

---code|label:Shortcuts---

```less
.primary();
.secondary();
.tertiary();
.white();
.lightestGray();
.lighterGray();
.lightGray();
.gray();
.darkGray();
.darkerGray();
.darkestGray();
.black();
```

---note---

**Note:** The values for all the above colors are configurable with [variables.less](/style/variables).