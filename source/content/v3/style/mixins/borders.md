---
name: Borders
---

---variables|label:Border---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | '1px solid #404040' | Border rules | ✓ |

---code|modifier:split---

```less
.border('2px dotted #00f');
```

```css
border: 2px dotted #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@lighterGray](/style/variables#grayscale) | Color ||
| @value | unit | 1px | Size ||
| @style | keyword | solid | Style ||

---code|modifier:split---

```less
.border(red; 4px; dotted);
```

```css
border: 4px dotted #f00;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @opacity | integer | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Opacity ||
| @value | unit | 1px | Width ||
| @style | keyword | solid | Border style ||
| @fallback | color | [@black](/style/variables#color) = #000 | Fallback color ||

---code|modifier:split---

```less
.border(dark; 40%; 2px);
```

```css
border: 2px solid #000000;
border: 2px solid rgba(0, 0, 0, 0.4);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side preset | ✓ |
| @color | color | [@lighterGray](/style/variables#grayscale) = @darkestGray | Color ||
| @value | unit | 1px | Width ||
| @style | keyword | solid | Style ||

---code|modifier:split---

```less
.border(top; blue);
```

```css
border-top: 1px solid #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side preset | ✓ |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @opacity | integer | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Color ||
| @value | unit | 1px | Width ||
| @style | keyword | solid | Style ||
| @fallback | color | [@white](/style/variables#colors) = #fff, [@black](/style/variables#colors) = #000 | Fallback color ||

---code|modifier:split---

```less
.border(top; light; 50%; 3px; dotted);
```

```css
border: 3px dotted #ffffff;
border: 3px dotted rgba(255, 255, 255, 0.5);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✓ |
| @color | color | [@lighterGray](/style/variables#grayscale) = @darkestGray | Color ||
| @value | unit | 1px | Width ||
| @style | keyword | solid | Style ||


---code|modifier:split---

```less
.border(horizontal; red; 2px; dotted);
```

```css
border-left: 2px dotted #ff0000;
border-right: 2px dotted #ff0000;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✓ |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @opacity | integer | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Opactiy ||
| @value | unit | 1px | Width ||
| @style | keyword | solid | Style ||

---code|modifier:split---

```less
.border(vertical; dark; 0.4);
```

```css
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
border-top: 1px solid rgba(0, 0, 0, 0.4);
border-bottom: 1px solid rgba(0, 0, 0, 0.4);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @top | unit | -- | Top size | ✓ |
| @right | unit | -- | Right size ||
| @bottom | unit | -- | Bottom size ||
| @left | unit | -- | Left size ||
| @color | color | [@lighterGray](/style/variables#grayscale) = @darkestGray | Color ||
| @style | keyword | solid | Style ||

---code|modifier:split---

```less
.border(1px; 3px; 4px; 2px; blue; dotted);
```

```css
border-bottom: 4px dotted #00f;
border-left: 2px dotted #00f;
border-right: 3px dotted #00f;
border-top: 1px dotted #00f;
```

---variables|label:Border Image---

| Variable | Type | Default | Description | Required |
| -- | --| -- | -- | -- |
| @filename | string | -- | Name of file | ✓ |
| @slice | unit | 100% | Slice offset ||
| @width | unit | 1 | Border width ||
| @outset | unit | 0 | Extend beyond border box ||
| @repeat | keyword | stretch | Match size of border ||

---code|modifier:stacked---

```less
.border-image('border.png');
```

```css
-webkit-border-image: url('../img/border.png') 100% 1 0 stretch;
border-image: url('../img/border.png') 100% 1 0 stretch;
```

---variables|label:Border Color, Style &amp; Width---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color, @style, @width | color, keyword, unit | -- | Color, style, or width | ✓ |

---code|modifier:split---

```less
.border-color(blue);
```

```css
border-color: #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side presets | ✓ |
| @color, @style, @width | color, keyword, unit | -- | Color, style, or width | ✓ |

---code|modifier:split---

```less
.border-color(top; blue);
```

```css
border-top-color: #00f;
```

---code|modifier:split---

```less
.border-style(dotted);
```

```css
border-style: dotted;
```

---code|modifier:split---

```less
.border-style(right; dotted);
```

```css
border-right-style: dotted;
```

---code|modifier:split---

```less
.border-width(4px);
```

```css
border-width: 4px;
```

---code|modifier:split---

```less
.border-width(bottom; 4px);
```

```css
border-bottom-width: 4px;
```