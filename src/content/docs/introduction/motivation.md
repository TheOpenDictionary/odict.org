---
title: "Motivation"
---

# Motivation

A question that often gets asked when discussing ODict is "why?". Why build a new dictionary file format when so many others exist? It's a fair question, so let's dig into it.

## A Bit of History

Way back in the 1980s, a group of academics launched the [Text Encoding Initiative](https://en.wikipedia.org/wiki/Text_Encoding_Initiative) (TEI), a well-defined XML format used to represent a sorts of lexical data, from prose, to poetry, to, you guessed it – dictionaries. The main goal? Encode lexical data in a structured, machine-readable manner.

Shortly thereafter, during the 1990s, the [DICT](https://en.wikipedia.org/wiki/DICT) protocol emerged as a uniform way for network-based dictionary clients to all access the same dictionary data. The protocol revolved around the DICT file format, a format that stores lexical data in _both_ a `.dict` file and a corresponding `.index` file (to index the dictionary's headwords). DICT files are compiled from the text-based [Jargon File](https://en.wikipedia.org/wiki/Jargon_File) format (which dates all the way back to 1975!). Like ODict, the fact that DICT dictionaries are compiled means headwords can easily be looked up from their index.

Move forward a few years and the DICT format is amplified by new contender in the dictionary space – [StarDict](https://en.wikipedia.org/wiki/StarDict). Introduced in 2003, StarDict was one of the first free, widely-available GUI tools for interfacing with DICT dictionaries. Shortly thereafter, similar software followed, such as [GoldenDict](http://goldendict.org/) and [FireDict](https://tuxor1337.frama.io/firedict). StarDict (and by proxy DICT) dictionaries continue to be very popular and widely adopted, as most modern dictionary applications continue to support them.

In more recent years, there has been a shift from managing lexical data through file formats to managing it in the cloud via systems like [OntoLex](https://en.wikipedia.org/wiki/OntoLex). Lexical data is stored as [Linguistic Linked Open Data](https://en.wikipedia.org/wiki/Linguistic_Linked_Open_Data), interconnected graphs queryable through an SQL-like language called [SPARQL](https://en.wikipedia.org/wiki/SPARQL). Projects such as [Dbnary](http://kaiko.getalp.org/about-dbnary/) have come out of such efforts. There is no doubt a place for systems like OntoLex in the linguistic ecosystem, though it isn't really a strong contender to ODict.

## So... why ODict?

A lot has happened in the world of lexicography over the past thirty years. Surprisingly, most of the technologies described above are still in use. [FreeDict](https://freedict.org) still authors all their dictionaries using TEI. [WikDict](https://www.wikdict.com) offers [all of its dictionaries](https://download.wikdict.com/dictionaries/stardict/) for download in the StarDict format.

At its core, ODict was developed to solve a single use-case at [Linguistic](https://linguistic.io): allow access to structured lexical data in an offline-first way. The existing solutions explored didn't cut it. Let's look at why.

### TEI, TermBase eXchange & Others

TEI isn't the only XML-based format for storing lexical data. There's also [TermBase eXchange](https://en.wikipedia.org/wiki/TermBase_eXchange) (2002), [TEI Lex-0](https://dariah-eric.github.io/lexicalresources/pages/TEILex0/TEILex0.html) (2020), and [XDXF](https://en.wikipedia.org/wiki/XDXF) (2006). These formats do a really good job at storing lexical data in the most comprehensive way possible. There's only one caveat: they're text-based. In order to perform word lookups, you'll still need to process the data, index it, and store it somewhere. They only solved half of the problem for us.

### DICT & StarDict

DICT is great because it not only allows you to easily author dictionaries, but compile and query them as well. Unfortunately, the source format from which dictionaries are authored, Jargon, is extremely basic. Originally designed to record the technical jargon of computer programmers, Jargon Files would allow you to effectively record a headword and its "definition". The way most DICT-based dictionary programs get around this limitation is by storing definitions as HTML. The HTML can then be styled to display definitions however the programmer wants. This ultimately means that StarDict (and related) dictionaries store no consistently structured data. The HTML stored in each "definition" varies by author and source.

### Enter ODict

We wanted to address these limitations. We set out to build a format that was:

- Easier to write than TEI
- Compilable to a single file (no extra `.index` files)
- Structured by default
- Portable and small, with no extra overhead of database systems like SQLite

The result? The Open Dictionary Project.

Ready to get started? Check out our [Quickstart](/docs/introduction/quickstart).
