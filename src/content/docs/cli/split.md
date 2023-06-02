---
title: 'split'
order: 7
---

# split

The ODict `split` command splits a word based on its definable parts. Its behavior is equivalent to running `lookup` with a split threshold greater than 0.


## Example

Say we are trying to lookup the definition for the English word "hotdog". Perhaps our dictionary isn't very good and there is no definition for "hotdog", but there _are_ definitions for "hot" and "dog". We could pass a splitting threshold of 3 to the CLI and get definitions for both words.

```bash
odict lookup ./eng.odict "hotdog" # No results
odict lookup -s 3 ./eng.odict "hotdog" # Prints definitions for "hot" and "dog"
```

The splitting threshold determines the maximum length of the substrings to find. If we passed a threshold of 2, there is a high likelihood we wouldn't get _any_ definitions back, as it would only be looking for definitions of substrings two characters or less ("ho", "ot", etc.).


## Usage

```bash
odict split [flags] [dictionary path] [search term]
```

## Flags

| Name          | Alias | Description                                | Required? | Default |
| ------------- | ----- | ------------------------------------------ | --------- | ------- |
| `--threshold` | `-t`  | The maximum length of definable substrings | ❌         | 2       |

