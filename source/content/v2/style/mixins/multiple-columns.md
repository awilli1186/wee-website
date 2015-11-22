---
name: Multiple Columns
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| @count | integer | 2 | Column width ||
| @gap | unit | -- | Column gap ||
| @style | keyword | @gridColumns | Column rule style ||
| @width | unit | @gridMargin | Column width ||

---code|modifier:split---

```less
.columns(3; 2);
```

```css
-moz-column-count: 3;
-webkit-column-count: 3;
column-count: 3;
-moz-column-gap: 2rem;
-webkit-column-gap: 2rem;
column-gap: 2rem;
```

---variables|label:Column Count---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| @value | integer | -- | Column count | ✔ |

---code|modifier:split---

```less
.columns-count(2);
```

```css
-moz-column-count: 2;
-webkit-column-count: 2;
column-count: 2;
```

---variables|label:Column Gap---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| @value | unit | -- | Column gap width | ✔ |

---code|modifier:split---

```less
.columns-gap(1);
```

```css
-moz-column-gap: 1rem;
-webkit-column-gap: 1rem;
column-gap: 1rem;
```

---variables|label:Column Style---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| @value | keyword | -- | Column rule style | ✔ |

---code|modifier:split---

```less
.columns-style(dotted);
```

```css
-moz-column-rule-style: dotted;
-webkit-column-rule-style: dotted;
column-rule-style: dotted;
```

---variables|label:Column Width---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| @value | integer | -- | Column width | ✔ |

---code|modifier:split---

```less
.columns-width(20);
```

```css
-moz-column-rule-width: 20rem;
-webkit-column-rule-width: 20rem;
column-rule-width: 20rem;
```