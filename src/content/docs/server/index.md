---
title: Server
order: 0
---

# Server

Since ODict 1.16, you can serve ODict files directly via a simple REST service. To start serving a single dictionary file, you can pass the file to the `odict serve` command:

```bash
odict serve my-dictionary.odict
```

If you omit the file path, each request will require you pass a `dictionary` parameter which specifies the [`alias`](./cli/alias) of the dictionary to use.

```bash
odict serve 
```

You can also specify a port via the `--port` command:

```bash
odict serve --port 8080
```

_Note that the `dictionary` parameter cannot be used if you specify a file path._