# Topological Sort in TypeScript

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
    <script src="https://cdn.jsdelivr.net/npm/toposort-ts@1.2.4/build/toposort.min.js"></script>
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
