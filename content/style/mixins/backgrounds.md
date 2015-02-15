---
name: Backgrounds
---

---variables|label:Background---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | -- | Background rules | ✓ |

---code---

```less
.background('url("bg.png") #00f no-repeat');
```

```less
background: url("bg.png") #00f no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @bodyBackground | Background color ||

---code---

```less
.background(#00f);
```

```less
background: #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Background color ||
| @filename | string | -- | Image file ||
| @repeat | string, keyword | -- | Image repeat ||

---code---

```less
.background(#00f; 'bg.png'; no-repeat);
```

```less
background: #0000ff url('../img/bg.png') no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Color | ✓ |
| @opacity | unit | -- | Opacity | ✓ |
| @fallback | color | @color | Fallback color ||

---code---

```less
.background(#00f; 0.2; #fff);
```

```less
background-color: #fff;
background-color: rgba(0, 0, 255, 0.2);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Color | ✓ |
| @filename | string | -- | Image file | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Image repeat ||

---code---

```less
.background(blue; 'bg.png'; 10%; 15%);
```

```less
background: #0000ff url('../img/bg.png') 10% 15% no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @opacity | unit | @defaultOpacity | Background opacity ||
| @fallback | color | white, dark | Fallback color ||

---code---

```less
.background(light; 0.5);
```

```less
background-color: #ffffff;
background-color: rgba(255, 255, 255, 0.5);
```

---variables|label:Background Color---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @bodyBackground | Background color ||

---code---

```less
.background-color(blue);
```

```less
background-color: #00f;
```

---variables|label:Background Image---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Background image value | ✓ |

---code---

```less
.background-image(none);
```

```less
background-image: none;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✓ |
| @repeat | keyword | -- | Image repeat ||

---code---

```less
.background-image('bg.png'; no-repeat);
```

```less
background-image: url('../img/bg.png');
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✓ |
| @filename | string | -- | Image file | ✓ |
| @width | unit | auto | Size or width ||
| @height | unit | auto | Height ||

---code---

```less
div {
    .background-image(retina; 'bg.png'; 10px);
}
```

```less
div {
    background-image: url('../img/bg.png');
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/bg-2x.png');
        background-size: 10px auto;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||

---code---

```less
.background-image('bg.png'; 10px);
```

```less
background-image: url('../img/bg.png');
background-position: 10px 0;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✓ |
| @filename | string | -- | Image file | ✓ |
| @width | unit | -- | Width | ✓ |
| @height | unit | -- | Height | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Image repeat ||

---code---

```less
div {
    .background-image(retina; 'bg.png'; 4rem; 3rem; 10px);
}
```

```less
div {
    background-image: url('../img/bg.png');
    background-position: 10px 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/bg-2x.png');
        background-size: 4rem 3rem;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | -- | Vertical offset | ✓ |
| @repeat | keyword | -- | Repeat | ✓ |
| @attachment | keyword | -- | Repeat | ✓ |

---code---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed);
```

```less
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✓ |
| @filename | string | -- | Image file | ✓ |
| @width | unit | -- | Width | ✓ |
| @height | unit | -- | Height | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | -- | Vertical offset | ✓ |
| @repeat | keyword | -- | Image repeat | ✓ |
| @attachment | keyword | -- | Attachment value | ✓ |

---code---

```less
div {
    .background-image(retina; 'bg.png'; 4rem; 3rem; 10px; 8px; no-repeat; fixed);
}
```

```less
div {
    background-attachment: fixed;
    background-image: url('../img/bg.png');
    background-position: 10px 8px;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/bg-2x.png');
        background-size: 4rem 3rem;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | -- | Vertical offset | ✓ |
| @repeat | keyword | -- | Repeat | ✓ |
| @attachment | keyword | -- | Attachment value | ✓ |
| @size | unit | -- | Size | ✓ |

---code---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed; 400px);
```

```less
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
background-size: 400px;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✓ |
| @x | unit | -- | Horizontal offset | ✓ |
| @y | unit | -- | Vertical offset | ✓ |
| @repeat | keyword | -- | Repeat | ✓ |
| @attachment | keyword | -- | Attachment value | ✓ |
| @width | unit | -- | Width | ✓ |
| @height | unit | -- | Height | ✓ |

---code---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed; 400px; 300px);
```

```less
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
background-size: 400px 300px;
```

---variables|label:Background Gradient---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @gray | Fallback color ||
| @start | color | rgba(0, 0, 0, 0.8) | Starting color ||
| @end | color | rgba(0, 0, 0, 0.2) | Ending color ||
| @angle | integer | 180 | Angle ||

---code---

```less
.background-gradient(blue; green; yellow; 90);
```

```less
background-color: #00f;
background: -webkit-linear-gradient(0deg, #008000, #ff0);
background: linear-gradient(90deg, #008000, #ff0);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @gray | Fallback color ||
| @spread | percentage | -- | Color range | ✓ |
| @angle | integer | 180 | Angle ||

---code---

```less
.background-gradient(blue; 15%; 90);
```

```less
background-color: #00f;
background: -webkit-linear-gradient(0deg, #4d4dff, #0000b3);
background: linear-gradient(90deg, #4d4dff, #0000b3);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d4dff', endColorstr='#0000b3', GradientType=0);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @start | integer | 0 | Starting opacity ||
| @end | integer | 1 | Ending opacity ||
| @angle | integer | 180 | Angle ||

---code---

```less
.background-gradient(dark);
```

```less
background-color: rgba(0, 0, 0, 0);
background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2));
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
```

---variables|label:Background Attachment---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | keyword | -- | Attachment value | ✓ |

---code---

```less
.background-attachment(scroll);
```

```less
background-attachment: scroll;
```

---variables|label:Background Position---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||

---code---

```less
.background-position(10px; 5px);
```

```less
background-position: 10px 5px;
```

---variables|label:Background Repeat---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | keyword | -- | Repeat value | ✓ |

---code---

```less
.background-repeat(repeat);
```

```less
background-repeat: repeat;
```

---variables|label:Background Size---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @size | unit | -- | Size value | ✓ |

---code---

```less
.background-size(3rem);
```

```less
background-size: 3rem;
```

---variables|label:Background Clip---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | border-box | Clip value ||

---code---

```less
.background-clip();
```

```less
background-clip: border-box;
```

---variables|label:Sprite---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Background color | ✓ |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code---

```less
.sprite(blue);
```

```less
background: #00f url('../img/sprite.png') 0 0 no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✓ |
| @color | color | -- | Background color | ✓ |
| @width | unit | auto | Width ||
| @height | unit | auto | Height ||
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code---

```less
div {
    .sprite(retina; blue);
}
```

```less
div {
    background: #0000ff url('../img/sprite.png') 0 0 no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/sprite-2x.png');
        background-size: auto auto;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code---

```less
.sprite();
```

```less
background-image: url('../img/sprite.png');
background-position: 0 0;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✓ |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @width | unit | @retinaSpriteWidth | Width ||
| @height | unit | @retinaSpriteHeight | Height ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code---

```less
div {
    .sprite(retina);
}
```

```less
div {
    background-image: url('../img/sprite.png');
    background-position: 0 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    div {
        background-image: url('../img/sprite-2x.png');
        background-size: auto auto;
    }
}
```