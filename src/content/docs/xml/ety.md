---
title: 'ety'
order: 3
---

# ety

The `ety` element represents an [etymology](https://en.wikipedia.org/wiki/Etymology). 

Even without a description, all entries must contain **at least** one etymology element.

## Attributes

| Name          | Description                             | Required? |
| ------------- | --------------------------------------- | --------- |
| `id`          | A unique ID representing this etymology | ❌         |
| `description` | A brief description of the etymology    | ❌         |

## Children

| Element            | Required? |
| ------------------ | --------- |
| [`usage`](./usage) | ✅         |


## Parent

| Element            |
| ------------------ |
| [`entry`](./entry) |
