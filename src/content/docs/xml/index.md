---
title: 'XML'
order: 0
---

# ODict XML (ODXML)

ODict's markup language, abbreviated ODXML, is an XML-based language for writing ODict dictionaries. ODict XML files are compiled to binary via the CLI's [`compile`](./cli/compile) command.

An example ODXML file might look like this:

```xml
<dictionary name="English Wikipedia">
  <entry term="lexicography">
    <ety description="From lexico- (prefix meaning ‘speech; words’) + -graphy (suffix meaning ‘something written about a specified subject’).">
      <usage pos="n">
          <definition value="The art or craft of compiling, writing, and editing dictionaries.">
            <example>He studied lexicography in college.</example>
          </definition>
      </usage>
    </ety>
  </entry>
</dictionary>
```

ODXML is designed with readability and simplicity in mind. While not currently as comprehensive as established standards in the field such as [TEI](https://en.wikipedia.org/wiki/TEI) and [XDXF](https://en.wikipedia.org/wiki/XDXF), ODXML is a living standard and subject to extension and improvement. There is currently no official way to upgrade legacy dictionaries written and compiled with an older ODict version.

This section will walk you through the different elements and attributes found in the ODXML schema.