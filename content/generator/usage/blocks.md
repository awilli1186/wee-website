---
name: Blocks
heading: Blocks allow you to create and control modular sections of content
---

Within your templates you can create labelled blocks of content with the ability to output them. Content not in a block by default is pushed into the block labeled content.

---code|modifier:stacked|label:Tags---

```
-~-blockName---

Lorem ipsum dolor

-~-blockName---

* Lorem
* Ipsum
* Dolor
```

```html
{{#!}}{{#blocks}}
	{{name}}
	{{output|raw}}
{{/blocks}}{{/!}}
```

---code|label:Appending & Rendering---

By default blocks push into an iterable array of blocks given the same name. If you prefer to concatenate the content use the append filter. The render filter allows outputting the block inline as well as pushing it to the tag pair, useful when generating style guides.

```
-~-blockName|append|render---
```

---code|label:Custom Tags---

You can create custom tags accessible in the blocks loop with the following format. Multiple tags are allowed.

```
-~-blockName|key:value|key2:value2---
```

---note---

**Note:** Due to the parse order of the generator the examples above use leading ```-~-``` instead of the proper ```---```.