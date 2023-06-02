---
title: 'Go'
order: 1
---

# Go SDK

The best part of ODict being _written_ in Go is that calling it _from_ Go is super easy. 

To use ODict in your project, simply add it via `go get`:

```bash
go get github.com/TheOpenDictionary/odict@latest
```

Most of the options you see referenced in method calls below are the same options available in the [CLI](../cli).

## Reading & writing dictionaries

```go
import "github.com/TheOpenDictionary/odict/lib/core"

// Write a dictionary from an XML string
core.WriteDictionaryFromXML("<dictionary></dictionary>", "dictionary.odict")

// Read a dictionary into memory and write it to a new path
dict := core.ReadDictionaryFromPath("dictionary.odict")
core.WriteDictionaryFromExisting("new.odict", dict)

// Compile a dictionary from an XML file
core.CompileDictionary("dictionary.xml", "dictionary.odict")
```

## Performing lookups

```go
import (
  "github.com/TheOpenDictionary/odict/lib/core"
  "github.com/TheOpenDictionary/odict/lib/types"
)

// Read a dictionary into memory
dict := core.ReadDictionaryFromPath("dictionary.odict")

// Look up entries
var entries []types.Entry = core.Lookup(
  core.LookupRequest{
    Dictionary: dict,
    Queries:    []string{"dog", "cat"},
    Split:      2,
    Follow:     false,
  },
)
```

## Indexing & searching

```go
import (
  "github.com/TheOpenDictionary/odict/lib/search"
  "github.com/TheOpenDictionary/odict/lib/types"
)

dict := core.ReadDictionaryFromPath("dictionary.odict")

# Perform a full-text index of the dictionary
search.Index(
  search.IndexRequest{
    Dictionary: dict,
    Overwrite:  true,
    Quiet:      true,
  },
)

# Perform a full-text search
var entries []types.Entry = search.SearchDictionary(
  // Here we need to use string() seeing Id() is a buffer object from Flatbuffers
  string(dict.Id()),
  // Our search term
  "run", 
  // This sets exact=false
  false
)
```

## Splitting entries

```go
import (
  "github.com/TheOpenDictionary/odict/lib/core"
  "github.com/TheOpenDictionary/odict/lib/types"
)

var entries []types.Entry = core.Split(
  SplitRequest{
    Dictionary: dict1,
    Query:      "hotdog",
    Threshold:  3,
  },
)
```

## Merging dictionaries

```go
import (
  "github.com/TheOpenDictionary/odict/lib/core"
  "github.com/TheOpenDictionary/odict/lib/types"
)

dict1 := core.ReadDictionaryFromPath("dictionary1.odict")
dict2 := core.ReadDictionaryFromPath("dictionary2.odict")

var merged types.DictionaryRepresentable = MergeDictionaries(dict1, dict2)
```

