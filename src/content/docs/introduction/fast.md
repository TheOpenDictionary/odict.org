---
title: How is ODict so fast?
order: 4
---

# How is ODict so fast?

You may find yourself wondering – just how _is_ ODict so fast? ODict uses the marvelous [FlatBuffers](https://github.com/google/flatbuffers) serialization library from Google, which allows us to store data in a well-formed, structured structured binary schema. In this schema, we can assign fields that acts as _lookup keys_ – in this case, headwords. 

A dictionary's entries are sorted by their keys and rapidly retrieved using a [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) on the serialized buffer. This means we don't even have to have to deserialize the entire dictionary and load it into memory before finding words!

For more information on the file specification, [see here](../reference/specification).