---
name: Colors
variables:
  - { var: "@color", desc: "Color value", type: "color", default: "@baseColor" }
---

---code---

```less
.color(#123);
```

```less
color: #123;
```

---code---

```less
.white();
```

```less
color: #fff;
```

---doc---

```less
.lightestGray();
.lighterGray();
.lightGray();
.gray();
.darkGray();
.darkerGray();
.darkestGray();
.black();
```