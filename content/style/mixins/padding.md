---
name: Padding
variables:
- { var: "@value", desc: "Padding value", type: "unit", req: true }
---

---code---

```less
.padding(5);
```

```less
padding: 5rem;
```

---code---

```less
.padding(left; 2);
```

```less
padding-left: 2rem;
```

---code---

```less
.padding(vertical; 2);
```

```less
padding-top: 2rem;
padding-bottom: 2rem;
```

---code---

```less
.padding(horizontal; 2; 3);
```

```less
padding-left: 2rem;
padding-right: 3rem;
```

---code---

```less
.padding(2; 3);
```

```less
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 2rem;
padding-left: 3rem;
```

---code---

```less
.padding(2; 3; 3; 4);
```

```less
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 3rem;
padding-left: 4rem;
```

---table---

| Variable | Type | Default        | Description       | Required |
| -------- | ---- | -------------- | ----------------- | -------- |
| @padding | unit | @bumperPadding | Amount of padding |          |

---code---

```less
.padded(2%);
```

```less
padding-left: 2%;
padding-right: 2%;
```

---code---

```less
.padding(horizontal);
```

```less
padding-left: 6%;
padding-right: 6%;
```