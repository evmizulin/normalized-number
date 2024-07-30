# normalized-number

Rescales a number (min-max normalization). [Read more on wikipedia](https://en.wikipedia.org/wiki/Feature_scaling#Rescaling_%28min-max_normalization%29)

# Features

-   works in browser and nodejs
-   ts support
-   super tiny
-   dependencies free

# Installation

```bash
npm i normalized-number
```

# Usage

```ts
normalizedNumber({
    sourceValue: 50,
    sourceRange: [0, 100],
    targetRange: [0, 1],
}); // 0.5

normalizedNumber({
    sourceValue: 2,
    sourceRange: [1, 3],
    targetRange: [4, 6],
}); // 5
```

# License

MIT
