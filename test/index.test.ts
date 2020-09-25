import toposort from '../src/index';

test('empty', () => expect(toposort([]).length).toBe(0));

function correctOrder<N extends string | number>(edges: [N, N][], result: N[]) {
  edges.forEach(([parent, child]) =>
    expect(
      result.findIndex(d => d === parent) < result.findIndex(d => d === child),
    ).toBeTruthy(),
  );
}

test('small', () => {
  const edges: [number, number][] = [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
  ];

  correctOrder(edges, toposort(edges));
});

test('small string', () => {
  const edges: [string, string][] = [
    ['5', '2'],
    ['5', '0'],
    ['4', '0'],
    ['4', '1'],
    ['2', '3'],
    ['3', '1'],
  ];

  correctOrder(edges, toposort(edges));
});
