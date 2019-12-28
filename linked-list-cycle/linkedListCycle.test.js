import { ListNode, hasCycle } from './linkedListCycle';

describe('Find whether a Linked list has a cycle', () => {
  it('should give right result for following cases', () => {

    const head = new ListNode(1);
    const two = new ListNode(2);
    const three = new ListNode(3);
    const four = new ListNode(4);

    const ll1Head = head;
    head.next = two;
    two.next = three;
    three.next = two;

    const ll2Head = new ListNode(5);
    ll2Head.next = four;
    four.next = null;

    expect(hasCycle(ll1Head)).toEqual(true);
    expect(hasCycle(ll2Head)).toEqual(false);
  });
});
