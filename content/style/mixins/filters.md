---
name: Filters
---

---table|label:Filter---

| Variable | Type            | Default | Description  | Required |
| -------- | --------------- | ------- | ------------ | -------- |
| @value   | string, keyword | --      | Filter rules | &#10003; |

---code---

```less
.filter('grayscale(50%)');
```

```less
-webkit-filter: grayscale(50%);
filter: grayscale(50%);
```

---table|label:Blur---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 2px     | Radius      |          |

---code---

```less
.blur(4px);
```

```less
-webkit-filter: blur(4px);
filter: blur(4px);
```

---table|label:Brightness---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 0.5     | Multiplier  |          |

---code---

```less
.brightness(0.8);
```

```less
-webkit-filter: brightness(0.8);
filter: brightness(0.8);
```

---table|label:Contrast---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 1.5     | Multiplier  |          |

---code---

```less
.contrast(1.2);
```

```less
-webkit-filter: contrast(1.2);
filter: contrast(1.2);
```

---table|label:Grayscale---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 1       | Amount      |          |

---code---

```less
.grayscale();
```

```less
-webkit-filter: grayscale(1);
filter: grayscale(1);
```

---table|label:Hue Rotate---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 180deg  | Angle       |          |

---code---

```less
.hue-rotate(60deg);
```

```less
-webkit-filter: hue-rotate(60deg);
filter: hue-rotate(60deg);
```

---table|label:Invert---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 1       | Amount      |          |

---code---

```less
.invert(20%);
```

```less
-webkit-filter: invert(20%);
filter: invert(20%);
```

---table|label:Saturate---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 0.5     | Amount      |          |

---code---

```less
.saturate(200%);
```

```less
-webkit-filter: saturate(200%);
filter: saturate(200%);
```

---table|label:Sepia---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 0.5     | Amount      |          |

---code---

```less
.sepia(100%);
```

```less
-webkit-filter: sepia(100%);
filter: sepia(100%);
```

---table|label:Drop Shadow---

| Variable | Type            | Default                                      | Description       | Required |
| -------- | --------------- | -------------------------------------------- | ----------------- | -------- |
| @value   | string, keyword | '1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})' | Drop-shadow rules |          |

---code---

```less
.drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');
```

```less
filter: drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');
```

---table---

| Variable | Type  | Default | Description | Required |
| -------- | ----- | ------- | ----------- | -------- |
| @color   | color | --      | Color       | &#10003;        |
| @x       | unit  | 1px     | X-offset    |          |
| @y       | unit  | 1px     | Y-offset    |          |
| @blur    | unit  | 0       | Blur radius |          |

---code---

```less
.drop-shadow(blue; 2px; 4px; 1px);
```

```less
filter: drop-shadow('2px 4px 1px #00f');
```

---code---

```less
.drop-shadow(light; 0.4);
```

```less
filter: drop-shadow('1px 1px 0 rgba(255, 255, 255, 0.4)');
```

---code---

```less
.drop-shadow(dark; 0.8; 2px; 1px; 1px);
```

```less
filter: drop-shadow('2px 1px 1px rgba(0, 0, 0, 0.8)');
```