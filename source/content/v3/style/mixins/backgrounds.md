---
name: Backgrounds
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | -- | Background rules | ✔ |

---code|modifier:split---

```less
.background(transparent);
.background('url("bg.png") #00f no-repeat');
```

```css
background: transparent;
background: url("bg.png") #00f no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@bodyBackground](/style/variables#base) = @white | Background color ||
| @filename | string | -- | Image file ||
| @repeat | string, keyword | -- | Image repeat ||

---code|modifier:split---

```less
.background(#00f);
.background(#00f; 'bg.png');
.background(#00f; 'bg.png'; no-repeat);
```

```css
background: #00f;
background: #00f url('../img/bg.png');
background: #00f url('../img/bg.png') no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Background color | ✔ |
| @opacity | unit | -- | Background opacity | ✔ |
| @fallback | color | [@color](/style/variables#colors) | Fallback background color ||

---code|modifier:split---

```less
.background(#00f; 0.2);
```

```css
background-color: #00f;
background-color: rgba(0, 0, 255, 0.2);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Background color | ✔ |
| @filename | string | -- | Image file | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Image repeat ||

---code|modifier:split---

```less
.background(#00f; 'bg.png'; 10%; 15%);
```

```css
background: #00f url('../img/bg.png') 10% 15% no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | preset | -- | Light or dark | ✔ |
| @opacity | unit | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Background opacity ||
| @fallback | color | #fff, #000 | Fallback background color ||

---code|modifier:split---

```less
.background(light; 50%);
```

```css
background-color: #fff;
background-color: rgba(255, 255, 255, 0.5);
```

---variables|label:Background Color---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@bodyBackground](/style/variables#base) = @white | Background color ||

---code|modifier:split---

```less
.background-color(blue);
```

```css
background-color: #00f;
```

---variables|label:Background Image---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Image file | ✔ |

---code|modifier:split---

```less
.background-image(bg.png);
```

```css
background-image: '../img/bg.png';
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✔ |
| @repeat | keyword | -- | Image repeat ||

---code|modifier:split---

```less
.background-image('bg.png'; no-repeat);
```

```css
background-image: url('../img/bg.png');
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✔ |
| @filename | string | -- | Image file | ✔ |
| @width | unit | auto | Size or width ||
| @height | unit | auto | Height ||

---code|modifier:split---

```less
.selector {
    .background-image(retina; 'bg.png'; 10px);
}
```

```css
.selector {
    background-image: url('../img/bg.png');
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/bg-2x.png');
        background-size: 10px auto;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||

---code|modifier:split---

```less
.background-image('bg.png'; 10px);
```

```css
background-image: url('../img/bg.png');
background-position: 10px 0;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✔ |
| @filename | string | -- | Image file | ✔ |
| @width | unit | -- | Width | ✔ |
| @height | unit | -- | Height | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Image repeat ||

---code|modifier:stacked---

```less
.selector {
	.background-image(retina; 'bg.png'; 4rem; 3rem; 10px);
}
```

```css
.selector {
    background-image: url('../img/bg.png');
    background-position: 10px 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/bg-2x.png');
        background-size: 4rem 3rem;
    }
}
```

---note---

**Note:** The value of the retina filename suffix is set by the `@retinaSuffix` [variable](/style/variables#images).

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | 0 | Vertical offset | ✔ |
| @repeat | keyword | no-repeat | Image repeat | ✔ |
| @attachment | keyword | -- | Image attachment | ✔ |

---code|modifier:split---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed);
```

```css
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | preset | -- | Retina | ✔ |
| @filename | string | -- | Image file | ✔ |
| @width | unit | -- | Width value | ✔ |
| @height | unit | -- | Height value | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | -- | Vertical offset | ✔ |
| @repeat | keyword | -- | Image repeat | ✔ |
| @attachment | keyword | -- | Attachment value | ✔ |

---code|modifier:split---

```less
.selector {
    .background-image(retina; 'bg.png'; 4rem; 3rem; 10px; 8px; no-repeat; fixed);
}
```

```css
.selector {
    background-attachment: fixed;
    background-image: url('../img/bg.png');
    background-position: 10px 8px;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/bg-2x.png');
        background-size: 4rem 3rem;
    }
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | -- | Vertical offset | ✔ |
| @repeat | keyword | -- | Repeat | ✔ |
| @attachment | keyword | -- | Attachment value | ✔ |
| @size | unit | -- | Size | ✔ |

---code|modifier:split---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed; 40);
```

```css
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
background-size: 40rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @filename | string | -- | Image file | ✔ |
| @x | unit | -- | Horizontal offset | ✔ |
| @y | unit | -- | Vertical offset | ✔ |
| @repeat | keyword | -- | Repeat | ✔ |
| @attachment | keyword | -- | Attachment value | ✔ |
| @width | unit | -- | Width | ✔ |
| @height | unit | -- | Height | ✔ |

---code|modifier:split---

```less
.background-image('bg.png'; 10px; 8px; no-repeat; fixed; 400px; 300px);
```

```css
background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
background-size: 400px 300px;
```

---variables|label:Background Gradient---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@gray](/style/variables#grayscale) = lighten(#000, 65%) | Fallback color ||
| @start | color | rgba(0, 0, 0, 0.8) | Starting color ||
| @end | color | rgba(0, 0, 0, 0.2) | Ending color ||
| @angle | integer | 180 | Angle ||

---code|modifier:split---

```less
.background-gradient(blue; green; yellow; 90);
```

```css
background-color: #00f;
background: -webkit-linear-gradient(0deg, #008000, #ff0);
background: linear-gradient(90deg, #008000, #ff0);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @gray | Fallback color ||
| @spread | percentage | -- | Color range | ✔ |
| @angle | integer | 180 | Angle ||

---code|modifier:split---

```less
.background-gradient(blue; 15%; 90);
```

```css
background-color: #00f;
background: -webkit-linear-gradient(0deg, #4d4dff, #0000b3);
background: linear-gradient(90deg, #4d4dff, #0000b3);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d4dff', endColorstr='#0000b3', GradientType=0);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✔ |
| @start | integer | 0 | Starting opacity ||
| @end | integer | 1 | Ending opacity ||
| @angle | integer | 180 | Angle ||

---code|modifier:split---

```less
.background-gradient(dark);
```

```css
background-color: rgba(0, 0, 0, 0);
background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2));
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
```

---variables|label:Background Attachment---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | keyword | -- | Attachment value | ✔ |

---code|modifier:split---

```less
.background-attachment(scroll);
```

```css
background-attachment: scroll;
```

---variables|label:Background Position---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||

---code|modifier:split---

```less
.background-position(10px; 5px);
```

```css
background-position: 10px 5px;
```

---variables|label:Background Repeat---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | keyword | -- | Repeat value | ✔ |

---code|modifier:split---

```less
.background-repeat(repeat);
```

```css
background-repeat: repeat;
```

---variables|label:Background Size---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @size | unit | -- | Size value | ✔ |

---code|modifier:split---

```less
.background-size(3rem);
```

```css
background-size: 3rem;
```

---variables|label:Background Clip---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | border-box | Clip value ||

---code|modifier:split---

```less
.background-clip();
```

```css
background-clip: border-box;
```

---variables|label:Sprite---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Background color | ✔ |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code|modifier:split---

```less
.sprite(blue);
```

```css
background: #00f url('../img/sprite.png') 0 0 no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✔ |
| @color | color | -- | Background color | ✔ |
| @width | unit | auto | Width ||
| @height | unit | auto | Height ||
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code|modifier:split---

```less
.selector {
    .sprite(retina; blue);
}
```

```css
.selector {
    background: #0000ff url('../img/sprite.png') 0 0 no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
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

---code|modifier:split---

```less
.sprite();
```

```css
background-image: url('../img/sprite.png');
background-position: 0 0;
background-repeat: no-repeat;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| retina | keyword | -- | Retina preset | ✔ |
| @x | unit | 0 | Horizontal offset ||
| @y | unit | 0 | Vertical offset ||
| @width | unit | @retinaSpriteWidth | Width ||
| @height | unit | @retinaSpriteHeight | Height ||
| @repeat | keyword | no-repeat | Repeat ||
| @filename | string | @spriteFilename | Image file ||

---code|modifier:split---

```less
.selector {
    .sprite(retina);
}
```

```css
.selector {
    background-image: url('../img/sprite.png');
    background-position: 0 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/sprite-2x.png');
        background-size: auto auto;
    }
}
```

---note---

**Note:** All image paths are relative to the @imagePath variable which defaults to "../img". It can be overridden in variables.less.