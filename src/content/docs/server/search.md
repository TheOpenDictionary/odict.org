---
title: search
order: 2
---

# search

`/search` allows you to perform full text searches over a dictionary. Dictionaries must be [indexed](../cli/index) before this endpoint is used, otherwise it will throw an error. It is equivalent to the [search](../cli/search) CLI command. Results are returned only as JSON.

## Example Usage

```bash
curl "http://localhost:5005/search?dictionary=wikieng&query=dog"
```

## Parameters

| Name         | Description                                                                                             | Default Value | Optional?                                    |
| ------------ | ------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| `dictionary` | The alias of the dictionary to use (added via [dictionaries add](../cli/dictionaries#add)).             |               | Only if a single dictionary is being served. |
| `query`      | The query to lookup. Unlike [`lookup`](./lookup), you can only specify this parameter once per request. |               | ❌                                            |
 