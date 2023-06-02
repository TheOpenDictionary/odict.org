---
title: 'lookup'
order: 4
---

# lookup

The ODict `lookup` command looks up words in a compiled dictionary.

## Usage

```bash
$ odict lookup [flags] [path to a compiled dictionary] [query strings...]
```

## Query Strings

## Output Formats

## Flags

| Name       | Alias | Description                                                | Required? | Default               |
| ---------- | ----- | ---------------------------------------------------------- | --------- | --------------------- |
| `--split`  | `-s`  | Threshold for how to [split queries](./cli/split)          | ❌         | 0                     |
| `--format` | `-f`  | Output format                                              | ❌         | [pp](#output-formats) |
| `--follow` | `-F`  | Whether to follow entry [aliases](/docs/xml/entry#aliases) | ❌         | `true`                |

## Example

```bash
$ odict lookup ./eng.odict "excited (excite)"
```