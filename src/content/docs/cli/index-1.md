---
title: 'index'
order: 6
slug: cli/index
---

# index

The ODict `index` command creates an on-disk, full-text index of a specified dictionary using [bleve](https://github.com/blevesearch/bleve). Once indexed, the full text of the dictionary (definitions and headwords) can be searched via the [`search`](./search) command.

**This command will overwrite the index if one already exists on disk for the provided dictionary.**

## Usage

```bash
odict index [path to dictionary]
```

## Example

```bash
odict index eng.odict
```