# rehype-wrap-element

> a rehype micro-plugin that wraps an `element` in another `element`

<p>
    <a href="https://github.com/kavin81/rehype-wrap-element/blob/main/LICENSE"><img alt="NPM License" src="https://img.shields.io/npm/l/rehype-wrap-element"></a>
    <a href="https://npmjs.com/rehype-wrap-element"><img alt="NPM Version" src="https://img.shields.io/npm/v/rehype-wrap-element"></a>
</p>

## Table of Contents

-   [installation](#installation)
-   [usage](#usage)
-   [docs](#options)

## installation

```sh
$ npm install rehype-wrap-element
```

```sh
$ yarn add rehype-wrap-element
```

```sh
$ pnpm add rehype-wrap-element
```

## Usage

Example:

> wrapping a `strong` element in a `div` element with a class name `wrapper`

```ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import {
    rehypeWrapElement,
    rehypeWrapElementOptions,
} from "rehype-wrap-element";
import rehypeStringify from "rehype-stringify";

const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeWrapElement, {
        target: "strong",
        wrapper: { element: "div", className: "wrapper" },
    } satisfies rehypeWrapElementOptions)
    .use(rehypeStringify)
    .process("**Hello, World!**");
```

Output:

```html
<div class="wrapper">
    <strong>Hello, World!</strong>
</div>
```

### Options

## Options

The `rehypeWrapElement` function accepts the following options:

### `target` (required)

The target element to be wrapped. It can be either a string representing the element name or an object of type `ElementOptions`.

### `wrapper` (required)

The wrapper element that will be used to wrap the target element. It can be either a string representing the element name or an object of type `ElementOptions`.

## ElementOptions

The `ElementOptions` interface defines the options for wrapping an element. It has the following properties:

-   `element` (required): The name of the element to be used as the wrapper.
-   `className` (optional): The class name to be added to the wrapper element.

## rehypeWrapElementOptions

The `rehypeWrapElementOptions` type is the parameter type for the `rehypeWrapElement` function. It has the following properties:

-   `target` (required): The target element to be wrapped. It can be either a string representing the element name or an object of type `ElementOptions`.
-   `wrapper` (required): The wrapper element that will be used to wrap the target element. It can be either a string representing the element name or an object of type `ElementOptions`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

-   [kavin81](https://github.com/kavin81)

## License

-   MIT license
