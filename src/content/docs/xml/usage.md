---
title: 'usage'
order: 4
---

# usage

The `usage` element represents a word usage (often called a [sense](https://en.wikipedia.org/wiki/Word_sense)). Usages are typically associated with a specific [part of speech](https://en.wikipedia.org/wiki/Part_of_speech), such as a noun, verb, or adjective.

## Attributes

| Name  | Description                                                                | Required? | Default |
| ----- | -------------------------------------------------------------------------- | --------- | ------- |
| `pos` | The [part of speech tag](../reference/pos) associated with this word usage | ❌         | `un`    |

## Children

| Element                      | Required? |
| ---------------------------- | --------- |
| [`definition`](./definition) | ❌         |
| [`group`](./group)           | ❌         |

## Parent

| Element        |
| -------------- |
| [`ety`](./ety) |
