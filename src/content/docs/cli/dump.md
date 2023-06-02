---
title: 'dump'
order: 2
---

# dump

The ODict `dump` command accepts a path to a compiled dictionary file and writes it back out to either an [ODXML](/docs/xml) file or an SQL dump.

## Usage

```bash
$ odict dump [flags] [path to a compiled dictionary] [path to desired output file]
```

## Output Formats

The `dump` command can output to a number of different output formats, including SQL. 

The acceptable formats are as follows:
- `xml`
- `postgres`
- `sqlite`
- `mysql`
- `sqlserver`

## Flags

| Name       | Alias | Description               | Required? |
| ---------- | ----- | ------------------------- | --------- |
| `--format` | `-f`  | The desired output format | ✅         |

## Example

```bash
$ odict dump -f xml ./eng.odict ./eng.xml 
$ odict dump -f sqlite ./fra.odict ./fra.sql 
```