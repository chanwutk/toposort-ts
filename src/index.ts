export default function toposort<N>(edges: [N, N][]) {
  const indegrees = new Map<N, number>();
  const graph = new Map<N, N[]>();

  edges.forEach(([parent, child]) => {
    !indegrees.has(parent) && indegrees.set(parent, 0);
    indegrees.set(child, (indegrees.get(child) ?? 0) + 1);
    !graph.has(parent) && graph.set(parent, []);
    graph.get(parent)?.push(child);
  });

  const queue: N[] = [];
  let queueHead = 0;
  indegrees.forEach((indegree, node) => !indegree && queue.push(node));

  const sorted: N[] = [];
  while (queue.length > queueHead) {
    const head = queue[queueHead++];
    sorted.push(head);

    (graph.get(head) ?? []).forEach(id => {
      indegrees.set(id, (indegrees.get(id) ?? 0) - 1);
      indegrees.get(id) === 0 && queue.push(id);
    });
  }

  return sorted;
}
