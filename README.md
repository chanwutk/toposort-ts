# Universal Topological Sort

## Supports both JavaScript/TypeScript and HTML imports

[![](https://data.jsdelivr.com/v1/package/npm/toposort-ts/badge)](https://www.jsdelivr.com/package/npm/toposort-ts)

## JavaScript/TypeScript import example

### installation

```bash
npm install toposort-ts
```

### Using `import`

```typescript
import toposort from 'toposort-ts';

const edges: [number, number][] = [
  [1, 2],
  [2, 3],
];

console.log(toposort(edges));
// [1, 2, 3]
```

### Using `require`

```javascript
const toposort = require('toposort-ts');

const edges: [number, number][] = [
  [1, 2],
  [2, 3],
];

console.log(toposort(edges));
// [1, 2, 3]
```

## HTML import example

```html
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/toposort-ts/build/toposort.min.js"></script>
  </head>
  <body>
    <script>
      console.log(
        toposort.toposort([
          [1, 2],
          [2, 3],
        ]),
      );
    </script>
  </body>
</html>
```

## API

this module only export `toposort` function (and as default). Here is its
function signature:

```typescript
function toposort<N extends string | number>(edges: [N, N][]): N[];
```

## Reference

- https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
