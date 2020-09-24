type GetID<Node, Id extends string | number> = (node: Node) => Id;

export function toposort<Node, Id extends string | number>(
  edges: [Node, Node][],
  getId: GetID<Node, Id>,
) {
  const inDegrees = new Map<Id, number>();
  const childrenList = new Map<Id, Set<Id>>();

  edges.forEach(([parent, child]) => {
    const parentId = getId(parent);
    const childId = getId(child);
    inDegrees.set(childId, (inDegrees.get(childId) ?? 0) + 1);
    if (!childrenList.has(parentId)) childrenList.set(parentId, new Set());
    childrenList.get(parentId)?.add(childId);
  });

  const queue: Id[] = [];
  let queueHead = 0;
  inDegrees.forEach((degree, id) => degree === 0 && queue.push(id));

  const ret: Id[] = [];
  while (queue.length > queueHead) {
    const head = queue[queueHead++];
    ret.push(head);

    const children = childrenList.get(head);
    [...(children ?? [])]
      .map((id) => (inDegrees.set(id, (inDegrees.get(id) ?? 0) - 1), id))
      .filter((id) => inDegrees.get(id) === 0)
      .forEach((id) => queue.push(id));
  }

  return ret;
}
