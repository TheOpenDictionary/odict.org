---
title: File Specification
order: 3
---

# File Specification

The format of compiled dictionaries is relatively straightforward, as it mainly consists of ODict's [Flatbuffer schema](https://github.com/TheOpenDictionary/odict/blob/main/flatbuffers/schema.fbs).

However, addition header information still exists at the beginning of the file. The table below illustrates the full breakdown of a compiled .odict file, in the order in which the values are written to the file.

All values written in Little Endian byte order.

| Name           | Type      | Bytes    | Description                                                                                                                    |
| -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Signature      | `char[6]` | 6        | Signature for the ODict format. Assertions fail if this signature is missing. Should always be `ODICT`.                        |
| Version        | `ushort`  | 2        | Represents the major version of ODict with which the file was created.                                                         |
| Content Length | `long`    | 8        | Size (in bytes) of the compressed content to read. Used in assertions to validate file length.                                 |
| Content        | `[]byte`  | Variable | [Snappy](https://github.com/google/snappy)-compressed FlatBuffer object. Must be decompressed by Snappy before it can be used. |

A design decision was made to keep the structural data of the ODict format as a cross-platform [Flatbuffers](https://google.github.io/flatbuffers/) schema as opposed to simply encoding a
Go struct so that the format could be used by anyone, even without necessarily using any of the core ODict libraries.