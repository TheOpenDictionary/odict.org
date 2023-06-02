---
title: 'Go'
order: 0
---

# Go SDK

The best part of ODict being _written_ in Go is that calling it _from_ Go is super easy. 

To use ODict in your project, simply add it via `go get`:

```bash
go get github.com/TheOpenDictionary/odict@latest
```

## Writing dictionaries

```go
import "github.com/TheOpenDictionary/odict/lib/core"

// Write a dictionary from an XML string
core.WriteDictionaryFromXML("<dictionary></dictionary>", "dictionary.odict")

// Write a dictionary from an in-memory dictionary object
dict := core.ReadDictionaryFromPath("dictionary.odict")
core.WriteDictionaryFromExisting("dictionary.odict", dict)

// Compile a dictionary from a given path
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

## Indexing & Searching

