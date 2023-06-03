---
title: 'lookup'
order: 4
---

# lookup

The ODict `lookup` command looks up words in a compiled dictionary.

## Usage

```bash
odict lookup [flags] [dictionary path] [query strings...]
```

## Fallbacks

While `lookup` accepts a list of plain text strings to lookup, you can also specify "fallback" words to return in case an entry for a word cannot be found. This can often times be helpful in case a conjugated form of a word cannot be found, but its base form (lemma) can.

Fallbacks are specified via parentheses. For example, if you are attempting to lookup "threw" but would like to fallback to "throw" if "threw" cannot be found:

```bash
odict lookup eng.odict "threw (throw)"
```

## Output Formats

The `--format` parameter accepts three values: `json`, `xml`, or `pp` (pretty print).

<aside>

### Note

JSON is returned as a two-dimensional array, considering some entries have the potential to be split if `--split` is a value greater than 0. For more info, see [split](./split).

</aside>

## Flags

| Name       | Alias | Description                                                | Required? | Default               |
| ---------- | ----- | ---------------------------------------------------------- | --------- | --------------------- |
| `--split`  | `-s`  | Threshold for [splitting queries](./cli/split)             | ❌         | 0                     |
| `--format` | `-f`  | Output format                                              | ❌         | [pp](#output-formats) |
| `--follow` | `-F`  | Whether to follow entry [aliases](/docs/xml/entry#aliases) | ❌         | `true`                |


## Example

```bash
odict lookup ./eng.odict "excited (excite)"
```