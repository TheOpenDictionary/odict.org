---
title: lookup
order: 1
---

# lookup

`/lookup` allows you to perform dictionary lookups via headwords. It is equivalent to the [lookup](../cli/lookup) CLI command. Results are returned only as JSON.

## Example Usage

```bash
curl "http://localhost:5005/lookup?dictionary=wikieng&query=dog&query=cat"
```

## Parameters

| Name         | Description                                                                                 | Default Value | Optional?                                    |
| ------------ | ------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| `dictionary` | The alias of the dictionary to use (added via [dictionaries add](../cli/dictionaries#add)). |               | Only if a single dictionary is being served. |
| `query`      | The query to lookup. You can pass this parameter multiple times.                            |               | ❌                                            |
| `follow`     | Whether to follow [entry aliases](../xml/entry#aliases).                                    | false         | ✅                                            |
| `split`      | The split threshold. See the [split command](../cli/split).                                 | 0             | ✅                                            |
 