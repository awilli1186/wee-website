---
name: Content
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | ' ' | Content ||
| @font | string, keyword | false | Font family ||

---code|modifier:split---

```less
.content(text);
```

```css
content: 'text';
```

---code|modifier:split---

```less
.content(example; Georgia);
```

```css
content: 'example';
font-family: Georgia;
```

---variables|label:Prefix, Suffix & Bookends---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | '-' | Content ||
| @margin | unit | 0.5em | Left or right margin ||
| @font | string, keyword | false | Font family ||
| @color | color | false | Font color ||

---code|modifier:split---

```less
.prefix();
```

```css
:before {
    content: '-';
    margin-right: 0.5em;
}
```

---code|modifier:split---

```less
.suffix('text'; 1em; Georgia; blue);
```

```css
:after {
    content: 'text';
    margin-left: 1em;
    font-family: Georgia;
    color: #0000ff;
}
```

---code|modifier:split---

```less
.bookends();
```

```css
:before {
    content: '-';
    margin-right: 0.5em;
}
:after {
    content: '-';
    margin-left: 0.5em;
}
```