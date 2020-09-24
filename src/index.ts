export function toposort<N extends string | number>(edges: [N, N][]) {
  const indegree = new Map<N, number>();
  const children = new Map<N, N[]>();

  edges.forEach(([parent, child]) => {
    !indegree.has(parent) && indegree.set(parent, 0);
    indegree.set(child, (indegree.get(child) ?? 0) + 1);
    !children.has(parent) && children.set(parent, []);
    children.get(parent)?.push(child);
  });

  const queue: N[] = [];
  let queueHead = 0;
  indegree.forEach((degree, id) => degree === 0 && queue.push(id));

  const ret: N[] = [];
  while (queue.length > queueHead) {
    const head = queue[queueHead++];
    ret.push(head);

    (children.get(head) ?? [])
      .map(id => (indegree.set(id, (indegree.get(id) ?? 0) - 1), id))
      .filter(id => indegree.get(id) === 0)
      .forEach(id => queue.push(id));
  }

  return ret;
}
