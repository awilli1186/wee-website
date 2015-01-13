---
name: Transitions
variables:
  - { var: "@value", desc: "Advanced transition rules", type: "string", default: "'all 0.2s ease-in-out 0s'" }
---

---code---

```less
.transition('all 4s ease-in 1s');
```

```less
-webkit-backface-visibility: hidden;
-webkit-transition: all 4s ease-in 1s;
transition: all 4s ease-in 1s;
```

---table---

| Variable  | Type    | Default          | Description         | Required |
| --------- | ------- | ---------------- | ------------------- | -------- |
| @property | keyword | all              | Animatable Property |          |
| @duration | unit    | @defaultDuration | Duration            |          |
| @ease     | keyword | ease-in-out      | Timing function     |          |
| @delay    | unit    | 0s               | Delay               |          |

---code---

```less
.transition(all; 2s; ease-in; 0.2s);
```

```less
-webkit-backface-visibility: hidden;
-webkit-transition: all 2s ease-in 0.2s;
transition: all 2s ease-in 0.2s;
```

---code---

```less
.transition-delay(3s);
```

```less
-webkit-transition-delay: 3s;
transition-delay: 3s;
```

---code---

```less
.transition-duration(0.5s);
```

```less
-webkit-transition-duration: 0.5s;
transition-duration: 0.5s;
```