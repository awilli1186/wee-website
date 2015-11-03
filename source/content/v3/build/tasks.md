---
name: Tasks
description: Command line tasks for compiling your project
---

---code|label:Default---

Simply run ```node wee run``` from the command line to build your project once. This compiles and minifies all assets.

```bash
node wee run
```

---code|label:Static Server---

Running ```node wee run:static``` will continuously compile your CSS and JavaScript changes on the fly, launch a local web server, serve the static HTML files in the specified project root, and reload as necessary.

```bash
node wee run:static
```

---code|label:Local Server---

For more advanced needs, you will probably need to run your own local server to serve PHP and/or MySQL with something like [MAMP](http://www.mamp.info/) (OS X) or [EasyPHP](http://www.easyphp.org/) (Windows). In that case you would use the ```node wee run:local``` command. This uses the proxy settings you have specified in [wee.json](/build/config#general) and proxy to your local web server. As with the "static" command, Wee will continuously watch and compile your changes as you make them and reload your browser as necessary.

```bash
node wee run:local
```
---code|label:Validate---
 
Validate the current projects JavaScript source against defined standards. [Read more](/build/validation) about validation.

```bash
node wee validate
```

---code|label:Generate---

This task will generate the static site on demand. [Read more](/generator) about static generation.

```bash
node wee run:generate
```

---code|label:Update---

The update task will notify you if there is a newer version of Wee available.

```bash
node wee update
```