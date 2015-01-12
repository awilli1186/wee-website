---
name: Box Shadows
variables:
  - { var: "@value", desc: "Advanced box shadow rules", type: "string, keyword", default: "'1px 1px 0 0 rgba(0, 0, 0, @{defaultOpacity})'" }
---

---code---

```less
.shadow('2px 1px 1px 1px #000');
```

```less
box-shadow: 2px 1px 1px 1px #000;
```

---table---

| Variable | Type  | Default | Description       | Required |
| -------- | ----- | ------- | ----------------- | :------: |
| @color   | color | black   | Shadow color      | ✓        |
| @x       | value | 1px     | Horizontal offset |          |
| @y       | value | 1px     | Vertical offset   |          |
| @blur    | value | 0       | Blur distance     |          |
| @spread  | value | 0       | Shadow size       |          |

---code---

```less
.shadow(blue);
```

```less
box-shadow: 1px 1px 0 0 #00f;
```

---code---

```less
.shadow(inner; blue);
```

```less
box-shadow:inset 1px 1px 0 0 #00f;
```

---code---

```less
.shadow(light; 50%);
```

```less
box-shadow:1px 1px 0 0 rgba(255,255,255,.5);
```

---code---

```less
.shadow(dark, 50%);
```

```less
box-shadow:1px 1px 0 0 rgba(0,0,0,.5);
```