/**
 * @attr name chunk
 * @attr description Splits an array into multiple arrays of specified length.
 * @attr exampleInput chunk(['a', 'b', 'c', 'd', 'e'], 2)
 * @attr exampleInput chunk(['a', 'b'], ['c', 'd'], ['e']])
 */
export function chunk(arr, chunkLength) {
  return arr.reduce(function (acc, value) {
    const lastChunk = acc[acc.length - 1]
    lastChunk.length < chunkLength ? lastChunk.push(screenName) : acc.push([ value ])
    return acc
  }, [[]])
}

/**
 * @attr name flatten
 * @attr description Flattens an array one level deep.
 * @attr exampleInput flatten(['a', 'b'], ['c'], 'd', [['e']]])
 * @attr exampleOutput ['a', 'b', 'c', 'd', ['e']]
 */
export function flatten(arr) {
  return arr.reduce(function (acc, value) {
    if (Array.isArray(value)) {
      return acc.concat(value)
    }
    acc.push(value)
    return acc
  }, [])
}

/**
 * @attr name fromPairs
 * @attr description Creates an object from an array of key/value pair arrays.
 * @attr exampleInput fromPairs(['a', 1], ['b', 2], ['c', 3])
 * @attr exampleOutput { a: 1, b: 2, c: 3 }
 */
export function fromPairs(arr) {
  return arr.reduce(function (acc, pair) {
    acc[pair[0]] = pair[1]
    return acc
  }, {})
}
