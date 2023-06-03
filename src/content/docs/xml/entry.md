---
title: 'entry'
order: 2
---

# entry

The `entry` element represents a definable term in a dictionary. You may also see entries referred to as [headwords](https://en.wiktionary.org/wiki/headword). 

## Aliases

Entries can link to other entries via the `see` attribute (short for "see also"). For example, a user looking up the word "angered" might be interested in also reading the entry for "angry".

`see` can also be used to fully alias entries to other entries. For example, if you wish "running" to redirect to the entry for "run":

```xml
<entry term="running" see="run" />
```

To follow these redirects from the command-line, pass the `-F` or `--follow` flag to the [`lookup`](../cli/lookup) command.

## Attributes

| Name            | Description                                                      | Required? |
| --------------- | ---------------------------------------------------------------- | --------- |
| `term`          | The case-sensitive word this entry defines                       | ✅         |
| `pronunciation` | An IPA, romanization, or other pronunciation guide for this word | ❌         |
| `see`           | A related entry or alias                                         | ❌         |

## Children

| Element        | Required? |
| -------------- | --------- |
| [`ety`](./ety) | ✅         |

## Parent

| Element                      |
| ---------------------------- |
| [`dictionary`](./dictionary) |

