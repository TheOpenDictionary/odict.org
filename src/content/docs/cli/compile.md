---
title: 'compile'
order: 2
---

# compile

The ODict `compile` command accepts a path to an [ODict XML](/docs/xml) (ODXML) file and outputs a compiled `.odict` file.

## Usage

```bash
odict compile [flags] [path to XML dictionary]
```

## Flags

| Name       | Alias | Description             | Required? | Default                            |
| ---------- | ----- | ----------------------- | --------- | ---------------------------------- |
| `--output` | `-o`  | The desired output path | ❌         | The current directory and filename |

## Example

```bash
# Both of these will generate eng.odict in the current directory
odict compile ./eng.xml 
odict compile -o ./eng.odict ./eng.xml
```