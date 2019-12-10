/* eslint-disable no-param-reassign */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

const getLinkedListNodesArray = (head) => {
  const nodeArray = [];
  let node = head;
  while (node.next !== null) {
    nodeArray.push(node.val);
    node = node.next;
  }
  return nodeArray;
};

// const createLinkedList = (values) => {
//   values.re
// };

export {
  deleteNode,
  getLinkedListNodesArray,
};
