---
title: 'CLI'
order: 0
---

# The ODict CLI

At the heart of ODict is its command-line interface (CLI, pronounced "see-ell-eye") which handles the bulk of what ODict is capable of. 

With the ODict CLI you can:
- [**Compile**](cli/compile) XML to a binary dictionary
- [**Convert**](cli/dump) compiled dictionaries _back_ to XML
- [**Index**](cli/index) a dictionary using full-text
- [**Lookup**](cli/lookup) words in a compiled dictionary
- [**Merge**](cli/merge) two dictionaries together
- [**Search**](cli/search) a full-text index of a dictionary
- [**Split**](cli/split) words based on dictionary entries
- [**View**](cli/lexicon) a list of every word in a dictionary

## Installing the CLI

Once you have [Go](https://go.dev) installed, simply run the following command:

```bash
go install github.com/TheOpenDictionary/odict@latest
```

There is a small chance you may have to add the following to your shell configuration if your `GOPATH` is not currently part of your `PATH`:

```bash
export PATH="$(go env GOPATH)/bin:$PATH"
```

You can confirm the installation was successful if the following command spits out a help menu:

```bash
odict --help
```

## Global Flags

| Name      | Alias | Description           | Required? | Default |
| --------- | ----- | --------------------- | --------- | ------- |
| `--quiet` | `-q`  | Only print raw output | ❌         | false   |

