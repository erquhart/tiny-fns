# tiny-fns

A microscopic zero-dep library of immutable helper functions that probably didn't need to be written.

## usage

```bash
npm install tiny-fns
```

```js
import { flatten } from 'tiny-fns'

flatten([['a'], ['b']])
```

## docs

#### [**`chunk`**](https://github.com/erquhart/tiny-fns/blob/master/tiny-fns.js#L1-L13) ([try it](https://runkit.com/erquhart/tiny-fns-chunk))

Splits an array into multiple arrays of specified length.

```js
chunk(['a', 'b', 'c', 'd', 'e'], 2)

// -> [['a', 'b'], ['c', 'd'], ['e']]
```

#### [**`flatten`**](https://github.com/erquhart/tiny-fns/blob/master/tiny-fns.js#L15-L29) ([try it](https://runkit.com/erquhart/tiny-fns-flatten))

Flattens an array one level deep.

```js
flatten([['a', 'b'], ['c'], 'd', [['e']]])

// -> ['a', 'b', 'c', 'd', ['e']]
```

#### [**`fromPairs`**](https://github.com/erquhart/tiny-fns/blob/master/tiny-fns.js#L31-L42) ([try it](https://runkit.com/erquhart/tiny-fns-frompairs))

Creates an object from an array of key/value pair arrays.

```js
fromPairs([['a', 1], ['b', 2], ['c', 3]])

// -> { a: 1, b: 2, c: 3 }
```

#### [**`mapKeys`**](https://github.com/erquhart/tiny-fns/blob/master/tiny-fns.js#L44-L66) ([try it](https://runkit.com/erquhart/tiny-fns-mapkeys))

Creates a new object by mapping keys of an existing object.

```js
mapKeys({ a: 1, b: 2, c: 3 }, key => `${key}${key}`)

// -> { aa: 1, bb: 2, cc: 3 }
```