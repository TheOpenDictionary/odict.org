---
title: Quickstart
order: 2
---

# Quickstart

Welcome to ODict! This should tutorial will get you up and running with your first dictionary. By the end of this quickstart, you'll know how to run ODict, write your own dictionaries, compile them, and look up words!

Let's get started.

## Install ODict

Until we can better cross-compile the ODict binary, the best way to install ODict is directly from [Go](https://go.dev/). Make sure you have [installed the latest version of Go](https://go.dev/doc/install), then just run the following in your terminal:

```bash
$ go install github.com/TheOpenDictionary/odict@latest
```

There is a small chance you may have to add the following to your shell configuration if your `GOPATH` is not currently part of your `PATH`:

```bash
export PATH="$(go env GOPATH)/bin:$PATH"
```

You can ensure ODict is installed by running the following command:

```bash
$ odict --help
```

## Writing your first dictionary

Open up your favorite text editor and paste the following XML into a file called `mydictionary.xml`:

```xml
<dictionary name="My First Dictionary">
  <entry term="hello">
    <ety>
      <usage pos="intj">
          <definition value="Hello world!">
            <example>All programmers greet each other by announcing "Hello world!"</example>
          </definition>
      </usage>
    </ety>
  </entry>
</dictionary>
```

So, what's happening here?

- We are defining our top-level [**dictionary**](/docs/xml/dictionary) with a `<dictionary>` tag. There should only ever be one of these per file.
- We are defining an [**entry**](/docs/xml/entry) for the term "hello". The `term` attribute is case-sensitive and used to look up words once the dictionary is compiled.
- Our entry contains an [**etymology**](/docs/xml/ety) (abbreviated `ety`). [Etymologies](https://en.wikipedia.org/wiki/Etymology) refer to the origin of a word (such as _example_ stemming from the Latin word _eximere_, meaning "to take out"). Every `entry` needs at least one etymology.
- Inside the etymology are [**usages**](/docs/xml/usage). Usages, often referred to a [word senses](https://en.wikipedia.org/wiki/Word_sense), refer to the usage of a word. For example, "run" can be used as both a noun and a verb ("I just came back from a <u>run</u>" vs. "walk, don't <u>run</u>"). Usages can specify a [part-of-speech](/docs/xml/usage#part-of-speech) (POS) tag. In this case, we are specifying that "hello" is an interjection (`intj`).
- Usages contain [**definitions**](/docs/xml/definition). Definitions are the meanings of words, as associated with their part-of-speech. In this case, we're defining "hello" to be short for "Hello world!".
- Lastly, definitions can contain [**examples**](/docs/xml/example) to illustrate how you might use a word in a sentence.

Now that we have our dictionary file written, let's compile it!

## Compiling your dictionary

Compiling your new dictionary is super straightforward – it's just one command. 

Open your terminal in your current directory, and run the following:

```bash
$ odict compile mydictionary.xml
```

You'll notice you now have a new file in your directory: `mydictionary.odict`. Congrats, you just compiled your first dictionary!

## Looking up words

Now comes the fun part – looking up words. To look up words in your compiled dictionary, just run the following command:

```bash
$ odict lookup mydictionary.odict "hello"
```

You should now see something that looks like the following in your terminal:

<img src="/terminal.svg" width="700" class="mx-auto shadow-lg" />

For a more machine readable format, you can even output JSON by adding `-f json` right after `lookup`:

```bash
$ odict lookup -f json mydictionary.odict "hello"
```

Woo-hoo! You did it. Give yourself a good pat on the back!

Next, you can learn how to read dictionaries using the official ODict [SDKs](/docs/sdks) or do more cool things with the [CLI](/docs/cli)! 
