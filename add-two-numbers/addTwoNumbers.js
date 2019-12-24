
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let l1Temp = l1;
  let l2Temp = l2;

  const sumTemp = l1Temp.val + l2Temp.val;
  let carried = Math.floor(sumTemp / 10);
  const remainderTemp = sumTemp % 10;

  const head = new ListNode(remainderTemp);
  let previousNode = head;

  l1Temp = l1Temp.next;
  l2Temp = l2Temp.next;

  while (l1Temp !== null || l2Temp !== null) {
    let remainderTens = 0;
    if (l1Temp !== null) {
      remainderTens += l1Temp.val;
    }
    if (l2Temp !== null) {
      remainderTens += l2Temp.val;
    }
    remainderTens += carried;
    carried = Math.floor(remainderTens / 10);
    const newRemainderTens = remainderTens % 10;
    const newListNode = new ListNode(newRemainderTens);
    previousNode.next = newListNode;
    previousNode = newListNode;
    l1Temp = l1Temp ? l1Temp.next : null;
    l2Temp = l2Temp ? l2Temp.next : null;
  }


  if (carried > 0) {
    const listNodeFinal = new ListNode(carried);
    previousNode.next = listNodeFinal;
  }
  return head;
};

export default addTwoNumbers;
