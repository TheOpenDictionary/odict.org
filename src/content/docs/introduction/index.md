---
title: "Getting Started"
order: 0
---

# A Quick Introduction

The Open Dictionary Project (abbreviated ODict for short) is an open-source file format for extremely fast, offline retrieval of lexical data such as etymologies, senses, and word definitions. Similar projects in the space include [StarDict](https://en.wikipedia.org/wiki/StarDict), [DICT](https://en.wikipedia.org/wiki/DICT) and [XDXF](https://en.wikipedia.org/wiki/XDXF).

ODict attempts to improve upon these existing solutions by offering a format that is:

- ⚡ **Fast**. Entry lookups take less than 1s and don't require indexing.
- 🧠 **Easy**. ODict files are written using dead-simple XML and compiled to binary.
- 🤏 **Tiny**. A single dictionary can store thousands of entries and stay under 1MB.
- 📦 **Portable**. ODict is a single executable written in Go that can run almost anywhere.

The ODict Project features a command-line compiler and processor as well as Go, Java, Python and JavaScript SDKs for interfacing with compiled dictionary files.
