---
title: 'JVM'
order: 3
---

# JVM

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

The ODict JVM SDK can be used with any JVM-based, including Java, Kotlin, Scala, and more. Unfortunately, the library has not yet been published to Maven. 

For now, you can refer to the [Contribution Guidelines](../reference/contributing) to learn how to build the library from source.

The examples below are in Kotlin, but the API is the same across all languages.

## Limitations

As of this writing, the JVM SDK is missing the following functionality:

- Support for splitting via [`split`](../cli/split)
- Support for [`merge`](../cli/merge)
- Support for `exact` flag for [`search`](../cli/search)

## Reading & writing dictionaries

```kotlin
import org.odict.*

// Compile dictionary from an XML path
val dict1: Dictionary = Dictionary.compile("dictionary.xml")

// Write XML directly to a compiled dictionary
val dict2: Dictionary = Dictionary.write("<dictionary></dictionary>", "dictionary.odict")
```

## Performing lookups

```kotlin
import org.odict.*

// Load the dictionary from disk
val dict = Dictionary("dictionary.odict");

// Lookup entries, following aliases and splitting entries with a threshold of 2 characters
val entries: List<List<Entry>> = dict1.lookup("someone (somebody)", "once", follow = true, split = 2);
```

## Indexing & searching

```kotlin
import org.odict.*

// Load the dictionary from disk
val dict = Dictionary("dictionary.odict");

// Index the dictionary
dict1.lexicon();

// Re-index and search the dictionary
val entries: List<Entry> = dict1.search("told", "me", index = true);
```

## Listing all headwords

```kotlin
import org.odict.*

// Load the dictionary from disk
val dict = Dictionary("dictionary.odict");

// List all headwords
val headwords: List<String> = dict1.lexicon();
```
