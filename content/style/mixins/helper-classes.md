---
name: Helper Classes
---

---code|label:Container---

```less
.container();
```

```less
display: block;
margin-left: auto;
margin-right: auto;
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
max-width: 1280px;
min-width: 260px;
padding-left: 6%;
padding-right: 6%;
```

---code|label:Float Image---

```less
.img-left();
```

```less
float: left;
margin-top: 0.32em;
margin-right: 2rem;
margin-bottom: 2rem;
```

---code---

```less
.img-right();
```

```less
float: right;
margin-top: 0.32em;
margin-bottom: 2rem;
margin-left: 2rem;
```

---code|label:JavaScript Hide---

```less
.js-hide();
```

```less
display: none !important;
```