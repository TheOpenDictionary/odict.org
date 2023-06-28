---
title: 'dump'
order: 3
---

# dump

The ODict `dump` command accepts a compiled dictionary path file and writes the dictionary back out to either an [ODXML](/docs/xml) file or an SQL dump.

## Usage

```bash
odict dump [flags] [dictionary path] [path to desired output file]
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
odict dump -f xml ./eng.odict ./eng.xml 
odict dump -f sqlite ./fra.odict ./fra.sql 
```