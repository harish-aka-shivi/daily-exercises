// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (head === null) {
    return false;
  }
  const map = new Map();
  let iteratingNode = head;
  map.set(iteratingNode);
  while (iteratingNode.next !== null && !map.has(iteratingNode.next)) {
    map.set(iteratingNode, true);
    iteratingNode = iteratingNode.next;
  }
  return iteratingNode.next !== null;
};

export {
  hasCycle,
  ListNode,
};
