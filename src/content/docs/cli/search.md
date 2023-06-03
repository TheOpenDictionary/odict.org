---
title: 'search'
order: 6
---

# search

The ODict `search` command indexes the provided dictionary (if an index does not already exist) and performs a full-text search on its definitions and headwords using [bleve](https://github.com/blevesearch/bleve). For now, `search` only prints out a JSON result.

## Usage

```bash
odict search [flags] [dictionary path] [search term]
```

## Flags

| Name      | Alias | Description                                                  | Required? | Default |
| --------- | ----- | ------------------------------------------------------------ | --------- | ------- |
| `--index` | `-i`  | Re-indexes the dictionary                                    | ❌         | `false` |
| `--exact` | `-e`  | Search only headwords (works the same as [lookup](./lookup)) | ❌         | `false` |

## Example

```bash
odict search -i ./eng.odict "a person of interest"
```