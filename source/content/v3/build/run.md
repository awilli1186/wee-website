---
name: Run
heading: Command line tasks for building your project
---

This command compiles and minifies all assets once.

```bash
wee run
```

---code|label:Static Server---

Running this will continuously compile your CSS and JavaScript changes, launch a local web server, serve static HTML from the public directory, and reload as necessary.

```bash
wee run:static
```

---code|label:Local Server---

When serving dynamic content, you'll probably need to run something like [Vagrant](https://www.vagrantup.com), [MAMP](http://www.mamp.info) (Mac), or [EasyPHP](http://www.easyphp.org) (Windows). This task uses the [wee.json](/build/config#general) settings and proxies to your local server. As with the "static" command, Wee continuously compiles changes and injects them into your browser.

```bash
wee run:local
```