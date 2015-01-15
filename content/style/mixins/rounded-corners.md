---
name: Rounded Corners
variables:
  - { var: "@value", desc: "Size of radius", type: "unit", default: "3px" }
---

---code---

```less
.rounded(3);
```

```less
background-clip: border-box;
border-radius: 3rem;
```

---code---

```less
.rounded();
```

```less
background-clip: border-box;
border-radius: 3px;
```

---code---

```less
.rounded(top);
```

```less
background-clip: border-box;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
```

---code---

```less
.rounded(right; 5);
```

```less
background-clip: border-box;
border-top-right-radius: 5rem;
border-bottom-right-radius: 5rem;

```

---code---

```less
.rounded(bottom; left);
```

```less
background-clip: border-box;
border-bottom-left-radius: 3px;
```

---code---

```less
.rounded(top; right; 4);
```

```less
background-clip: border-box;
border-top-right-radius: 4rem;
```

---code---

```less
.rounded(2px; 3rem; 4px; 5px);
```

```less
background-clip: border-box;
border-top-left-radius: 2px;
border-top-right-radius: 3rem;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 5px;
```