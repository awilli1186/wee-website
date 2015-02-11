---
name: Text Shadows
---

---variables---

| Variable | Type            | Default                                      | Description       | Required |
| -------- | --------------- | -------------------------------------------- | ----------------- | -------- |
| @value   | string, keyword | '1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})' | Text shadow rules |          |

---code---

```less
.text-shadow('2px 1px 0 #000');
```

```less
text-shadow: 2px 1px 0 #000;
```

---variables---

| Variable | Type    | Default | Description       | Required |
| -------- | ------- | ------- | ----------------- | -------- |
| inner    | keyword | --      | Inner preset      |          |
| @color   | color   | --      | Shadow color      | ✓ |
| @x       | value   | 1px     | Horizontal offset |          |
| @y       | value   | 1px     | Vertical offset   |          |
| @blur    | value   | 0       | Blur distance     |          |

---code---

```less
.text-shadow(blue; 4px; 3px; 2px);
```

```less
text-shadow: 4px 3px 2px #00f;
```

---code---

```less
.text-shadow(inner; blue);
```

```less
text-shadow: -1px -1px 0 #00f;
```

---variables---

| Variable         | Type    | Default         | Description          | Required |
| ---------------- | ------- | --------------- | -------------------- | -------- |
| inner            | keyword | --              | Inner preset         |          |
| light, dark      | keyword | --              | Light or dark preset | ✓ |
| @value, @opacity | number  | @defaultOpacity | Opacity              |          |
| @x               | unit    | 1px             | Horizontal offset    |          |
| @y               | unit    | 1px             | Vertical offset      |          |
| @blur            | unit    | 0               | Blur                 |          |

---code---

```less
.text-shadow(light; 0.4);
```

```less
text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.4);
```

---code---

```less
.text-shadow(inner; dark; 50%);
```

```less
text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5);
```