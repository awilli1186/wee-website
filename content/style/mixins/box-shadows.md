---
name: Box Shadows
variables:
  - { var: "@value", desc: "Advanced box shadow rules", type: "string, keyword", default: "'1px 1px 0 0 rgba(0, 0, 0, @{defaultOpacity})'" }
---

---code---

```less
.shadow('3px 2px 1px 0 #000');
```

```less
box-shadow: 3px 2px 1px 0 #000;
```

---code---

```less
.shadow(none);
```

```less
box-shadow: none;
```

---code---

```less
.shadow();
```

```less
box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);
```

---table---

| Variable | Type  | Default | Description       | Required |
| -------- | ----- | ------- | ----------------- | :------: |
| @color   | color | --      | Shadow color      | &#10003;        |
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
.shadow(rgba(0, 0, 0, 0.6); 4px; 3px; 2px; 2px;);
```

```less
box-shadow: 4px 3px 2px 2px rgba(0, 0, 0, 0.6);
```

---code---

```less
.shadow(inner; blue);
```

```less
box-shadow: inset 1px 1px 0 0 #00f;
```

---code---

```less
.shadow(light; 0.4);
```

```less
box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.4);
```

---code---

```less
.shadow(inner; light; 40%);
```

```less
box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.4);
```

---code---

```less
.shadow(dark; 0.5);
```

```less
box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);
```

---code---

```less
.shadow(inner; dark; 50%);
```

```less
box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.5);
```