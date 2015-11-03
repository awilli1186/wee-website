---
name: Display
---

---code|modifier:split|label:Hidden---

```less
.hidden();
```

```css
visibility: hidden;
```

---code|modifier:split|label:Visible---

```less
.visible();
```

```css
visibility: visible;
```

---variables|label:Block---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @width | unit | -- | Width | ✓ |
| @height | unit | -- | Height ||

---code|modifier:split---

```less
.block(4; 3);
```

```css
display: block;
width: 4rem;
height: 3rem;
```

---variables|label:Spaced---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @margin | unit | @blockMarginBottom | Bottom margin ||

---code|modifier:split---

```less
.spaced(0.5);
```

```css
margin-bottom: 0.5rem;
```

---variables|label:Spaced Block---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @margin | unit | @blockMarginBottom | Bottom margin ||
| @width | unit | -- | Width ||
| @height | unit | -- | Height ||

---code|modifier:split---

```less
.spaced-block(0.5; 2; 4);
```

```css
display: block;
margin-bottom: 0.5rem;
width: 2rem;
height: 4rem;
```

---variables|label:Box-Sizing---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @val | keyword | border-box | Box-sizing value ||

---code|modifier:split---

```less
.box-sizing(content-box);
```

```css
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
```

---code|modifier:split|label:Border-Box---

```less
.border-box();
```

```css
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
```

---code|modifier:split|label:Content-Box---

```less
.content-box();
```

```css
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
```