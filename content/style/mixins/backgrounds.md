---
name: Backgrounds
variables:
  - { var: "@value", desc: "Background rules", type: "string, keyword", req: true }
---

---code---

```less
.background('url("bg.png") #00f no-repeat');
```

```less
background: url("bg.png") #00f no-repeat;
```

---table---

| Variable | Type  | Default         | Description      | Required |
| -------- | ----- | --------------- | ---------------- | -------- |
| @color   | color | @bodyBackground | Background color |          |

---code---

```less
.background(#00f);
```

```less
background: #00f;
```

---table---

| Variable  | Type            | Default | Description      | Required |
| --------- | --------------- | ------- | ---------------- | -------- |
| @color    | color           | --      | Background color | &#10003; |
| @filename | string          | --      | Image file       | &#10003; |

---code---

```less
.background(#00f; 'bg.png');
```

```less
background: #0000ff url('../img/bg.png');
```

---table---

| Variable  | Type            | Default | Description      | Required |
| --------- | --------------- | ------- | ---------------- | -------- |
| @color    | color           | --      | Background color | &#10003; |
| @filename | string          | --      | Image file       | &#10003; |
| @repeat   | string, keyword | --      | Repeat           | &#10003; |

---code---

```less
.background(#00f; 'bg.png'; no-repeat);
```

```less
background: #0000ff url('../img/bg.png') no-repeat;
```

---table---

| Variable  | Type  | Default | Description    | Required |
| --------- | ----- | ------- | -------------- | -------- |
| @color    | color | --      | Color          | &#10003; |
| @opacity  | unit  | --      | Opacity        | &#10003; |
| @fallback | color | @color  | Fallback color |          |

---code---

```less
.background(#00f; 0.2; #fff);
```

```less
background-color: #fff;
background-color: rgba(0, 0, 255, 0.2);
```

---table---

| Variable  | Type            | Default   | Description         | Required |
| --------- | --------------- | --------- | ------------------- | -------- |
| @color    | color           | --        | Color               | &#10003; |
| @filename | string          | --        | Image file          | &#10003; |
| @x        | unit            | --        | Horizontal position | &#10003; |
| @y        | unit            | 0         | Vertical position   |          |
| @repeat   | string, keyword | no-repeat | Repeat              |          |

---code---

```less
.background(blue; 'bg.png'; 10%; 15%);
```

```less
background: #0000ff url('../img/bg.png') 10% 15% no-repeat;
```

---table---

| Variable  | Type  | Default         | Description        | Required |
| --------- | ----- | --------------- | ------------------ | -------- |
| @opacity  | unit  | @defaultOpacity | Background opacity |          |
| @fallback | color | white           | Fallback color     |          |

---code---

```less
.background(light; 0.5);
```

```less
background-color: #ffffff;
background-color: rgba(255, 255, 255, 0.5);
```

---table---

| Variable  | Type  | Default         | Description        | Required |
| --------- | ----- | --------------- | ------------------ | -------- |
| @opacity  | unit  | @defaultOpacity | Background opacity |          |
| @fallback | color | black           | Fallback color     |          |

---code---

```less
.background(dark; 0.8; #222);
```

```less
background-color: #222222;
background-color: rgba(0, 0, 0, 0.8);
```

---table---

| Variable | Type  | Default         | Description      | Required |
| -------- | ----- | --------------- | ---------------- | -------- |
| @color   | color | @bodyBackground | Background color |          |

---code---

```less
.background-color(blue);
```

```less
background-color: #00f;
```

---table---

| Variable  | Type   | Default | Description | Required |
| --------- | ------ | ------- | ----------- | -------- |
| @filename | string | --      | Image file  | &#10003; |

---code---

```less
.background-image('bg.png');
```

```less
background-image: url('../img/bg.png');
```

---table---

| Variable  | Type    | Default | Description | Required |
| --------- | ------- | ------- | ----------- | -------- |
| @filename | string  | --      | Image       | &#10003; |
| @repeat   | keyword | --      | Repeat      | &#10003; |

---code---

```less
.background-image('bg.png'; no-repeat);
```

```less
background-image: url('../img/bg.png');
background-repeat: no-repeat;
```

---table---

| Variable  | Type   | Default | Description | Required |
| --------- | ------ | ------- | ----------- | -------- |
| @filename | string | --      | Image       | &#10003; |
| @width    | unit   | auto    | Width       |          |
| @height   | unit   | auto    | Height      |          |

---code---

```less
div {
    .background-image(retina; 'bg.png');
}
```

```less
div {
    background-image: url('../img/bg.png');
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/bg-2x.png');
        background-size: auto auto;
    }
}
```