---
title: 'alias'
order: 1
---

# alias

The `alias` is a parent command for managing dictionary aliases. Dictionary paths can be aliased to human-readable names for easier management. These aliases are stored in `~/.odict/aliases.json`.

## add

The `add` command adds a new dictionary alias and will error if an existing alias with the provided name already exists.

### Usage

```bash
odict alias add [name] [dictionary path]
```

### Flags

| Name         | Description                                                                                                                | Required? |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- |
| `--no-index` | By default, all aliased dictionaries are indexed. This flag will skip initially indexing when the `add` command is called. | ❌         |

### Example

```bash
odict alias add wikieng ./wikieng.odict
```

---

## list

The `list` command lists all stored aliased dictionaries.

### Usage

```bash
odict alias list
```

---

## remove

The `remove` command removes a dictionary alias and will error if an alias with the provided name does not exist.

### Usage

```bash
odict alias remove [name]
```

### Example

```bash
odict alias remove wikieng
```

---

## set

The `set` command is similar to [add](#add), but will additionally update the alias with the provided name if it already exists instead of erroring.

### Usage

```bash
odict alias set [name] [dictionary path]
```

### Flags

| Name         | Description                                                                                                                | Required? |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- |
| `--no-index` | By default, all aliased dictionaries are indexed. This flag will skip initially indexing when the `set` command is called. | ❌         |

### Example

```bash
odict alias set wikieng ./wikieng.odict
```