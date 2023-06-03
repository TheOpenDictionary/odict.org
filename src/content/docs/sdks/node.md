---
title: 'Node'
order: 4
---

# Node

<aside>

### Contents

- [Installing](#installing)
- [Limitations](#limitations)
- [Reading \& writing dictionaries](#reading--writing-dictionaries)
- [Performing lookups](#performing-lookups)
- [Indexing \& searching](#indexing--searching)
- [Splitting entries](#splitting-entries)
- [Listing all headwords](#listing-all-headwords)

</aside>

## Installing 

The Node SDK does not bundle the ODict CLI, so make sure you have it [installed first](/docs/cli#installing-the-cli). Node invokes ODict as a child process in service mode, then passes it instructions via inter-process communication.

Once you have the CLI installed, you can install the Node SDK via `npm` or your favorite Node package manager:

```bash
# Node
npm install theopendictionary
# Yarn
yarn add theopendictionary
# PNPM
pnpm install theopendictionary
```

## Limitations

As of this writing, the Node SDK is missing the following functionality:

- Support for [`merge`](../cli/merge)


## Reading & writing dictionaries

```typescript
import { Dictionary } from 'theopendictionary';

// Compile from an XML path
const dict1 = await Dictionary.compile("dictionary.xml", "dictionary.odict");

// Write XML directly to a compiled dictionary
const dict2 = await Dictionary.write("<dictionary></dictionary>", "dictionary.odict");
```

## Performing lookups

```typescript
import { Dictionary, type Entry } from 'theopendictionary';

// Load the dictionary from disk with a default splitting threshold of 3
const dict = new Dictionary("dictionary.odict", { defaultSplitThreshold: 3 });

// Lookup a single word
const entries: Entry[][] = await dict.lookup(
  { 
    word: "ran", 
    fallback: "run" 
  }, 
  // You can specify lookup options via a second parameter
  { 
    split: 0, 
    follow: false 
  }
);

// Lookup multiple words
const multiEntries: Entry[][] = await dict.lookup(
  [
    { 
      word: "ran", 
      fallback: "run" 
    },
    { 
      word: "excited", 
      fallback: "excite" 
    },
  ]
  // When no options are specified, `split` defaults to the 
  // `defaultSplitThreshold` and `follow` defaults to `false`
);
```

## Indexing & searching

```typescript
import { Dictionary, type Entry } from 'theopendictionary';

// Load the dictionary from disk
const dict = new Dictionary("dictionary.odict");

// Index the dictionary
await dict.index();

// Search the dictionary
const entries: Entry[][] = await dict.search(
  "run", 
  // When not specified, both `force` and `exact` 
  // default to `false`
  {
    force: false, // Forces a re-index
    exact: true  // Search only by headword
  }
);
```

## Splitting entries

```typescript
import { Dictionary, type Entry } from "theopendictionary";

// Load the dictionary from disk
const dict = new Dictionary("dictionary.odict");

// Split "hotdog" into "hot" and "dog"
const entries: Entry[] = await dict1.split("hotdog", 3);
```

## Listing all headwords

```typescript
import { Dictionary } from "theopendictionary";

// Load the dictionary from disk
const dict = new Dictionary("dictionary.odict");

// List all headwords
const headwords: string[] = await dict1.lexicon();
```

