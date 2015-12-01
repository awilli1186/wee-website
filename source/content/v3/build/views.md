---
name: Views
---

If you're using Wee's data-binding, creating views in their own files can alleviate some problems and help keep things organized. Simply drop HTML files into your js/views/load directory and they'll be made available to your script. If you prefer to load the views on-demand keep them in the js/views directory but outside the load sub-folder.

Internally the templates are made available to the apps and the render function using the [addView method](/script/view).