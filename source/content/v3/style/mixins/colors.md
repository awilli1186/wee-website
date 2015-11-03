---
name: Colors
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @baseColor | Color value ||

---code|modifier:split---

```less
.color(#123);
```

```css
color: #123;
```

---code|label:Shortcuts---

```less
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

**Note:** The values for @baseColor, @white, @black, and the grayscale are configurable with variables.less.