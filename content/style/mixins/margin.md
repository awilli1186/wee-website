---
name: Margin
variables:
  - { var: "@value", desc: "Margin value", type: "unit", req: true }
---

---code---

```less
.margin(5);
```

```less
margin: 5rem;
```

---code---

```less
.margin(left; 2);
```

```less
margin-left: 2rem;
```

---code---

```less
.margin(vertical; 2);
```

```less
margin-top: 2rem;
margin-bottom: 2rem;
```

---code---

```less
.margin(horizontal; 2; 3);
```

```less
margin-left: 2rem;
margin-right: 3rem;
```

---code---

```less
.margin(2; 3);
```

```less
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 2rem;
margin-left: 3rem;
```

---code---

```less
.margin(2; 3; 3; 4);
```

```less
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 3rem;
margin-left: 4rem;
```