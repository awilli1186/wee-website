---
name: Structure
---

The heart of the code living in an module should exist inside of the core directory. Ideally, modules should be abstracted enough that they are highly reusable. That reusable content should be in core. Beyond permanent modifications by the original author, the core directory should be left alone. Any site specifics should be specified in the top level js and css directories.