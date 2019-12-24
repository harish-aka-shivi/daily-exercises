import { addTwoNumbers, ListNode } from './addTwoNumbers';

describe('Solve add two numbers', () => {
  it('solve the following test cases', () => {
    const l1 = new ListNode(3);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(8);

    const l2 = new ListNode(8);

    const solutionHead = addTwoNumbers(l1, l2);

    expect(solutionHead.val).toBe(1);
    expect(solutionHead.next.val).toBe(5);
    expect(solutionHead.next.next.val).toBe(8);
  });
});
