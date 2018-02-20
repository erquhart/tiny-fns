# tiny-fns

Tiny little functions that are just so tiny.

## usage

```bash
npm install tiny-fns
```

```js
import { flatten } from 'tiny-fns'

flatten([['a'], ['b']])
```

## docs

[**`chunk`**](https://github.com/erquhart/tiny-fns/blob/master/index.js#L1-L13) ([try it](https://runkit.com/erquhart/tiny-fns-chunk)
Splits an array into multiple arrays of specified length.

```js
chunk(['a', 'b'], ['c', 'd'], ['e']])

// -> undefined
```

[**`flatten`**](https://github.com/erquhart/tiny-fns/blob/master/index.js#L15-L29) ([try it](https://runkit.com/erquhart/tiny-fns-flatten)
Flattens an array one level deep.

```js
flatten(['a', 'b'], ['c'], 'd', [['e']]])

// -> ['a', 'b', 'c', 'd', ['e']]
```

[**`fromPairs`**](https://github.com/erquhart/tiny-fns/blob/master/index.js#L31-L42) ([try it](https://runkit.com/erquhart/tiny-fns-fromPairs)
Creates an object from an array of key/value pair arrays.

```js
fromPairs(['a', 1], ['b', 2], ['c', 3])

// -> { a: 1, b: 2, c: 3 }
```