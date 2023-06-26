---
title: Contributing
order: 1
---

# Contributing to ODict

The Open Dictionary Project happily welcomes contributions! To contribute to ODict, you should probably be familiar with either [Go](https://go.dev), [Node.js](https://nodejs.org/), [Python](https://www.python.org/), [Kotlin](kotlinlang.org) or some combination of the four.

## Installing the right tools

Before you start, you'll need to have the [asdf](https://asdf-vm.com) version manager installed as well as a recent version of [git](https://git-scm.com). Fortunately, both are pretty straightforward to install.

<div align="center">

[Install asdf](https://asdf-vm.com/guide/getting-started.html)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Install git](https://git-scm.com/downloads)

</div>

## Getting the code

To get started, you'll need to clone the repository:

```bash
git clone git@github.com:TheOpenDictionary/odict.git
```

Once the repository is cloned, go ahead and `cd` into the directory from your terminal.

## Installing the toolchain

Once you're in the root of the directory, run the following to install all required `asdf` plugins:

```bash
cut -d' ' -f1 .tool-versions | sort \
  | comm -23 - <(asdf plugin-list | sort) \
  | join -a1 - <(asdf plugin list all) \
  | xargs -t -L1 asdf plugin add
```

If you run into any issues running this command, you can install each plugin manually:

```bash
asdf plugin add golang
asdf plugin add python
asdf plugin add poetry
asdf plugin add gradle
asdf plugin add kotlin
asdf plugin add java
asdf plugin add nodejs
asdf plugin add just
asdf plugin add flatc
```

Finally, install all required tools via:

```
asdf install
```

## Building the project

ODict leverages the Rust-based [`just`](https://just.systems/man/en) command runner as a language-agnostic way to run scripts. To run a script for a specific target, follow the format:

```bash
just [target] [script]
```

For example, to build the Kotlin project:

```bash
just jvm build
```