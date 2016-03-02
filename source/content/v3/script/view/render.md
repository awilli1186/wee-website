---
name: Render
heading: Parse data into template string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| template | string | -- | Template string | ✔ |
| data | object | -- | Data object | ✔ |

---code|type:string|modifier:stacked|label:Simple---

```javascript
var template = '{{ #! }}My name is {{ firstName }} {{ lastName }}{{ /! }}',
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```

---code|type:string|modifier:stacked|label:Fallback Values---

```javascript
var template = '{{ #! }}My name is {{ firstName }} {{ lastName||Doe }}{{ /! }}',
	data = {
		firstName: 'John'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Doe"
```

---code|type:string|modifier:stacked|label:Changing Context---

```javascript
var template = '{{ #! }}{{ #child }}{{ #child }}{{ name }}\'s dad is {{ ../name }} and his grandad is {{ $root.name }}.{{ /child }}{{ /child }}{{ /! }}',
	data = {
		name: 'John',
		child: {
		 	name: 'Jimmy',
		 	child: {
		 		name: 'Charlie'
		 	}
		 }
	};

Wee.view.render(template, data);
```

```javascript
"Charlie's dad is Jimmy and his grandad is John."
```

---code|type:string|modifier:stacked|label:Helpers---
   
```javascript
var template = '{{ #! }}My name is {{ firstName }}{{ #lastName|notEmpty }} {{ lastName }}{{ /lastName }}{{ /! }}',
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```

---code|type:string|modifier:stacked|label:Loop Variables---

Within tag pairs there are a handful of variables made available automatically.

* {{ #! }}{{ $key }}{{ /! }} - The key when iterating over an object
* {{ #! }}{{ . }}{{ /! }} - The single currently iterated value
* {{ #! }}{{ # }}{{ /! }} - Zero-based loop index
* {{ #! }}{{ ## }}{{ /! }} - One-based loop index

```javascript
var template = '{{ #! }}{{ #names }}{{ # }} | {{ ## }} | {{ . }} | {{ $key }}<br>{{ /names }}{{ /! }}',
	data = {
		names: {
			'John': 45,
			'Jane': 42,
			'Jimmy': 18,
			'Jenny': 15
		}
	};

Wee.view.render(template, data);
```

```javascript
0 | 1 | 45 | John<br>
1 | 2 | 42 | Jane<br>
2 | 3 | 18 | Jimmy<br>
3 | 4 | 15 | Jenny<br>
```

---code|type:string|modifier:stacked|label:Advanced---

The render method does more than simple variable output. It can traverse as deep into the provided object as you need for multi-level output.

```javascript
var template = '{{ #! }}<p>My Name is {{ firstName }}{{ #lastName|notEmpty }} {{ lastName }}{{ /lastName }}</p>' +
	'{{ #children|notEmpty }}' +
		'<p>My Children are:</p>' +
		'<ul>{{ #children }}' +
			'<li>{{ name }} - {{ age }}</li>' +
		'{{ /children }}</ul>' +
	'{{ else }}' +
		'<p>I have no children.</p>' +
	'{{ /children }}{{ /! }}',
	data = {
		firstName: 'John',
		lastName: 'Smith',
		children: [
			{
				name: 'Judy',
				age: '12'
			},
			{
				name: 'James',
				age: '9'
			}
		]
	};

Wee.view.render(template, data);
```

```html
<p>My Name is John Smith</p>
<p>My Children are:</p>
<ul>
	<li>Judy - 12</li>
	<li>James - 9</li>
</ul>
```