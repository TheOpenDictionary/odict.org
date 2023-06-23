---
title: 'WASM'
order: 6
---

# Web Assembly (WASM)

<aside>

### Contents

- [Installing](#installing)
- [Limitations](#limitations)
- [Reading dictionaries](#reading-dictionaries)
- [Writing dictionaries](#writing-dictionaries)
- [Performing lookups](#performing-lookups)
- [Splitting entries](#splitting-entries)
- [Listing all headwords](#listing-all-headwords)

</aside>

## Installing 

Unless you need to run ODict inside a browser environment, it is advisable to use the [Node SDK](./node) instead. WASM is notoriously much slower than native code, so just keep that in mind. That said, the WASM library is designed to work in Node environments as well as browsers.

To install the WASM SDK, just use your JavaScript favorite package manager:

```bash
# Node
npm install @theopendictionary/wasm
# Yarn
yarn add @theopendictionary/wasm
# PNPM
pnpm install @theopendictionary/wasm
```

## Limitations

For browser environments, you will need to manually expose and specify the full path to the hosted WASM file using the `initializeWASM` method. 

For example, if you are using [Vite](https://vitejs.dev), you can use the [assetsInclude configuration option](https://vitejs.dev/config/shared-options.html#assetsinclude) to expose the WASM file from the `node_modules` directory:

```typescript
export default defineConfig({
  assetsInclude: ['./node_modules/@theopendictionary/wasm/dist/odict.wasm'],
});
```

Then specify the endpoint in code:

```typescript
import { initializeWASM } from '@theopendictionary/wasm';

initializeWASM("http://localhost:1234/odict.wasm");
```

It's also important to note that due to the browser's limited ability to interface with the local file system, features such as [searching](../cli/search) and [indexing](../cli/index) are unavailable.

## Reading dictionaries

```typescript
import { Dictionary } from '@theopendictionary/wasm';

// Open the file picker
const fileHandles: FileSystemHandle[] = await window.showOpenFilePicker(options);

// Get the first file selected
const file: FileSystemHandle = await fileHandle[0].getFile();

// Read the file as an array buffer
const content: ArrayBuffer = await file.arrayBuffer();

// Pass the buffer directly to ODict
// We need to specify a dictionary name as the first argument so ODict knows how to cache this data
// In Node, you can just read an array buffer directly from a local file via the `fs` module
const dictionary: Dictionary = await Dictionary.load("eng", allContent[0]);
```

## Writing dictionaries

```typescript
import { Dictionary } from '@theopendictionary/wasm';

// Compile the provided XML to an array buffer
const buf: Dictionary = await Dictionary.compile("<dictionary></dictionary>");

// Load the buffer as a dictionary with a given name
const dict: Dictionary = await Dictionary.load("eng", buf);
```

## Performing lookups

```typescript
import { Dictionary, type Entry } from 'theopendictionary';

// dict is a pre-loaded dictionary
const entries: Entry[][] = dict.lookup(["lemonade", { word: "ran", fallback: "run" });
```

## Splitting entries

```typescript
import { Dictionary, type Entry } from "theopendictionary";

// dict is a pre-loaded dictionary
const entries: Entry[] = await dict1.split("hotdog", 3);
```

## Listing all headwords

```typescript
import { Dictionary } from "theopendictionary";

// dict is a pre-loaded dictionary
const headwords: string[] = await dict.lexicon();
```

