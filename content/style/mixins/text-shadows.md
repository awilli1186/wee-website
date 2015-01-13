---
name: Text Shadows
variables:
  - { var: "@value", desc: "Advanced text shadow rules", type: "string, keyword", default: "'1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})'" }
---

---code---

```less
.text-shadow('2px 1px 0 #000');
```

```less
text-shadow: 2px 1px 0 #000;
```

---code---

```less
.text-shadow(none);
```

```less
text-shadow: none;
```

---code---

```less
.text-shadow();
```

```less
text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
```

---table---

| Variable | Type  | Default | Description       | Required |
| -------- | ----- | ------- | ----------------- | :------: |
| @color   | color | --      | Shadow color      | ✓        |
| @x       | value | 1px     | Horizontal offset |          |
| @y       | value | 1px     | Vertical offset   |          |
| @blur    | value | 0       | Blur distance     |          |

---code---

```less
.text-shadow(blue);
```

```less
text-shadow: 1px 1px 0 #00f;
```

---code---

```less
.text-shadow(rgba(0, 0, 0, 0.6); 4px; 3px; 2px);
```

```less
text-shadow: 4px 3px 2px rgba(0, 0, 0, 0.6);
```

---code---

```less
.text-shadow(inner; blue);
```

```less
text-shadow: -1px -1px 0 #00f;
```

---code---

```less
.text-shadow(light; 0.4);
```

```less
text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.4);
```

---code---

```less
.text-shadow(inner; light; 40%);
```

```less
text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4);
```

---code---

```less
.text-shadow(dark; 0.5);
```

```less
text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5):
```

---code---

```less
.text-shadow(inner; dark; 50%);
```

```less
text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5);
```