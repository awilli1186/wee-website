---
name: Content
---

---table---

| Variable | Type            | Default | Description | Required |
| -------- | --------------- | ------- | ----------- | -------- |
| @value   | string, keyword | ' '     | Content     |          |
| @font    | string, keyword | false   | Font family |          |

---code---

```less
.content(text);
```

```less
content: 'text';
```

---code---

```less
.content(example; georgia);
```

```less
content: 'example';
font-family: georgia;
```

---table|label:Prefix, Suffix &amp; Bookends---

| Variable | Type            | Default | Description | Required |
| -------- | --------------- | ------- | ----------- | -------- |
| @value   | string, keyword | '-'     | Content     |          |
| @margin  | unit            | 0.5em   | Margin      |          |
| @font    | string, keyword | false   | Font family |          |
| @color   | color           | false   | Font color  |          |

---code---

```less
.prefix();
```

```less
:before {
    content: '-';
    margin-right: 0.5em;
}
```

---code---

```less
.suffix('text'; 1em; Georgia; blue);
```

```less
:after {
    content: 'text';
    margin-left: 1em;
    font-family: Georgia;
    color: #0000ff;
}
```

---code---

```less
.bookends();
```

```less
:before {
    content: '-';
    margin-right: 0.5em;
}
:after {
    content: '-';
    margin-left: 0.5em;
}

```