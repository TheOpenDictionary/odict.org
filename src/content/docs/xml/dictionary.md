---
title: 'dictionary'
order: 1
---

# dictionary

The `dictionary` element is the root element of all ODict dictionaries. Every ODXML file should have exactly one. 

## Attributes

| Name   | Description                              | Required? |
| ------ | ---------------------------------------- | --------- |
| `id`   | A unique ID representing the dictionary  | ❌         |
| `name` | A human-readable name for the dictionary | ❌         |

## Children

| Element            | Required? |
| ------------------ | --------- |
| [`entry`](./entry) | ✅         |