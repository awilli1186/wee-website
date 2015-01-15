---
name: Animation
variables:
  - { var: "@arguments", desc: "Animation rules", type: "keyword", req: true }
---

---code---

```less
.animation(name 4s linear 0s 1);
```

```less
-webkit-animation: name 4s linear 0s 1;
animation: name 4s linear 0s 1;
```