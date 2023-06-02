---
title: 'merge'
order: 5
---

# merge

The ODict `merge` merges two compiled dictionaries together. 

`merge` uses the [mergo](https://github.com/imdario/mergo) library behind-the-scenes, which unfortunately features a rather naive algorithm which might result in certain entries or word usages being overwritten. 

Its original intended use was to expand one dictionary by "importing" the entries from another.

## Usage

```bash
odict merge [path to compiled dictionary] [path to compiled dictionary] [output path]
```

## Example

```bash
odict merge eng.odict eng-extended.odict eng-full.odict
```