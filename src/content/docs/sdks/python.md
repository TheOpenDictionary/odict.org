---
title: 'Python'
order: 5
---

# Python

<aside>

### Contents

- [Installing](#installing)
- [Limitations](#limitations)
- [Reading \& writing dictionaries](#reading--writing-dictionaries)
- [Performing lookups](#performing-lookups)
- [Indexing \& searching](#indexing--searching)
- [Listing all headwords](#listing-all-headwords)

</aside>

## Installing 

The Python SDK can be installed via any pip-based package manager:

```bash
# PIP
pip install theopendictionary
# Poetry
poetry add theopendictionary
```

## Limitations

As of this writing, the Python SDK is missing the following functionality:

- Support for splitting (both via [`split`](../cli/split) and [`lookup`](../cli/lookup))
- Support for [`merge`](../cli/merge)
- Support for `exact` flag for [`search`](../cli/search)

## Reading & writing dictionaries

```python 
from theopendictionary import Dictionary

# Compile from an XML path
dict1 = Dictionary.compile("dictionary.xml");

# Write XML directly to a compiled dictionary
dict2 = Dictionary.write("<dictionary></dictionary>", "dictionary.odict");
```

## Performing lookups

```python
from theopendictionary import Dictionary

# Load the dictionary from disk
dict = Dictionary("dictionary.odict")

# Lookup entries
entries = dict.lookup("ran (run)", "excited (excite)", follow = True)
```

## Indexing & searching

```python
from theopendictionary import Dictionary

# Load the dictionary from disk
dict = Dictionary("dictionary.odict")

# Index the dictionary
dict.index();

# Re-index and search the dictionary
entries = dict.search("run", index = True)
```

## Listing all headwords

```python
from theopendictionary import Dictionary

# Load the dictionary from disk
dict = Dictionary("dictionary.odict")

# List all the headwords
headwords = dict.lexicon()
```

