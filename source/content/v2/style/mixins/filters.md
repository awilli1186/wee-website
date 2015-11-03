---
name: Filters
---

---variables|label:Filter---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | -- | Filter rules | ✓ |

---code|modifier:split---

```less
.filter('grayscale(50%)');
```

```css
-webkit-filter: grayscale(50%);
filter: grayscale(50%);
```

---variables|label:Blur---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 2px | Radius ||

---code|modifier:split---

```less
.blur(4px);
```

```css
-webkit-filter: blur(4px);
filter: blur(4px);
```

---variables|label:Brightness---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 0.5 | Multiplier ||

---code|modifier:split---

```less
.brightness(0.8);
```

```css
-webkit-filter: brightness(0.8);
filter: brightness(0.8);
```

---variables|label:Contrast---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 1.5 | Multiplier ||

---code|modifier:split---

```less
.contrast(1.2);
```

```css
-webkit-filter: contrast(1.2);
filter: contrast(1.2);
```

---variables|label:Grayscale---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 1 | Amount ||

---code|modifier:split---

```less
.grayscale();
```

```css
-webkit-filter: grayscale(1);
filter: grayscale(1);
```

---variables|label:Hue Rotate---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 180deg | Angle ||

---code|modifier:split---

```less
.hue-rotate(60deg);
```

```css
-webkit-filter: hue-rotate(60deg);
filter: hue-rotate(60deg);
```

---variables|label:Invert---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 1 | Amount ||

---code|modifier:split---

```less
.invert(20%);
```

```css
-webkit-filter: invert(20%);
filter: invert(20%);
```

---variables|label:Saturate---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 0.5 | Amount ||

---code|modifier:split---

```less
.saturate(200%);
```

```css
-webkit-filter: saturate(200%);
filter: saturate(200%);
```

---variables|label:Sepia---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 0.5 | Amount ||

---code|modifier:split---

```less
.sepia(100%);
```

```css
-webkit-filter: sepia(100%);
filter: sepia(100%);
```

---variables|label:Drop Shadow---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | '1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})' | Drop-shadow rules ||

---code|modifier:split---

```less
.drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');
```

```css
filter: drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | -- | Color | ✓ |
| @x | unit | 1px | X-offset ||
| @y | unit | 1px | Y-offset ||
| @blur | unit | 0 | Blur radius ||

---code|modifier:split---

```less
.drop-shadow(blue; 2px; 4px; 1px);
```

```css
filter: drop-shadow('2px 4px 1px #00f');
```

---code|modifier:split---

```less
.drop-shadow(light; 0.4);
```

```css
filter: drop-shadow('1px 1px 0 rgba(255, 255, 255, 0.4)');
```

---code|modifier:split---

```less
.drop-shadow(dark; 0.8; 2px; 1px; 1px);
```

```css
filter: drop-shadow('2px 1px 1px rgba(0, 0, 0, 0.8)');
```