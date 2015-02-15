---
name: Transitions
---

---variables|label:Transition---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string | 'all 0.2s ease-in-out 0s' | Transition rules | ✓ |

---code---

```less
.transition('all 4s ease-in 1s');
```

```less
-webkit-backface-visibility: hidden;
-webkit-transition: all 4s ease-in 1s;
transition: all 4s ease-in 1s;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @property | keyword | all | Animatable Property ||
| @duration | seconds | @defaultDuration | Duration ||
| @ease | keyword | ease-in-out | Timing function ||
| @delay | seconds | 0s | Delay ||

---code---

```less
.transition(all; 2s; ease-in; 0.2s);
```

```less
-webkit-backface-visibility: hidden;
-webkit-transition: all 2s ease-in 0.2s;
transition: all 2s ease-in 0.2s;
```

---variables|label:Transition Delay---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @delay | seconds | 1s | Delay value ||

---code---

```less
.transition-delay(3s);
```

```less
-webkit-transition-delay: 3s;
transition-delay: 3s;
```

---variables|label:Transition Duration---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @duration | seconds | @defaultDuration | Duration value ||

---code---

```less
.transition-duration(0.5s);
```

```less
-webkit-transition-duration: 0.5s;
transition-duration: 0.5s;
```