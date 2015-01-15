---
name: Borders
variables:
  - { var: "@value", desc: "Advanced border rules", type: "string, keyword", default: "'1px solid #404040'"}
---

---code---

```less
.border('2px dotted #00f');
```

```less
border: 2px dotted #00f;
```

---table---

| Variable | Type    | Default    | Description  | Required |
| -------- | ------- | ---------- | ------------ | -------- |
| @color   | color   | @baseColor | Color        |          |
| @value   | unit    | 1px        | Size         |          |
| @style   | keyword | solid      | Style        |          |

---code---

```less
.border(red; 4px; dotted);
```

```less
border: 4px dotted #f00;
```

---code---

```less
.border(dark; 40%; 2px);
```

```less
border: 2px solid #000000;
border: 2px solid rgba(0, 0, 0, 0.4);
```

---code---

```less
.border(top; light; 50%; 3px; dotted);
```

```less
border: 3px dotted #ffffff;
border: 3px dotted rgba(255, 255, 255, 0.5);
```

---code---

```less
.border(horizontal; red; 2px; dotted);
```

```less
border-left: 2px dotted #ff0000;
border-right: 2px dotted #ff0000;
```

---code---

```less
.border(vertical; dark; 0.4);
```

```less
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
border-top: 1px solid rgba(0, 0, 0, 0.4);
border-bottom: 1px solid rgba(0, 0, 0, 0.4);
```

---table---

| Variable | Type     | Default    | Description | Required |
| -------- | -------- | ---------- | ----------- | -------- |
| @top     | unit     | --         | Top size    | &#10003;        |
| @right   | unit     | --         | Right size  |          |
| @bottom  | unit     | --         | Bottom size |          |
| @left    | unit     | --         | Left size   |          |
| @color   | color    | @baseColor | Color       |          |
| @style   | keyword  | solid      | Style       |          |

---code---

```less
.border(1px; 3px; 4px; 2px; blue; dotted);
```

```less
border-bottom: 4px dotted #00f;
border-left: 2px dotted #00f;
border-right: 3px dotted #00f;
border-top: 1px dotted #00f;
```

---table---

| Variable  | Type    | Default | Description              | Required |
| --------- | --------| ------- | ------------------------ | -------- |
| @filename | string  | --      | Name of file             | &#10003;        |
| @slice    | unit    | 100%    | Slice offset             |          |
| @width    | unit    | 1       | Border width             |          |
| @outset   | unit    | 0       | Extend beyond border box |          |
| @repeat   | keyword | stretch | Match size of border     |          |

---code---

```less
.border-image('border.png');
```

```less
-webkit-border-image: url('../img/border.png') 100% 1 0 stretch;
border-image: url('../img/border.png') 100% 1 0 stretch;
```

---code---

```less
.border-color(blue);
```

```less
border-color: #00f;
```

---code---

```less
.border-color(top; blue);
```

```less
border-top-color: #00f;
```

---code---

```less
.border-style(dotted);
```

```less
border-style: dotted;
```

---code---

```less
.border-style(right; dotted);
```

```less
border-right-style: dotted;
```

---code---

```less
.border-width(4px);
```

```less
border-width: 4px;
```

---code---

```less
.border-width(bottom; 4px);
```

```less
border-bottom-width: 4px;
```