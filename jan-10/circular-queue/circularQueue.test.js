import CircularQueue from './circularQueue';

describe('Implementation of Ring buffer', () => {
  it('should correctly implement the circular queue', () => {
    const queue = new CircularQueue(6);
    const isEmpty1 = queue.isEmpty();
    const enqueueResult = queue.enQueue(6);
    const rear1 = queue.Rear();
    const front1 = queue.Front();
    const enqueueResult2 = queue.enQueue(7);
    const front2 = queue.Front();
    const rear2 = queue.Rear();
    const enqueueResult3 = queue.enQueue(8);
    const dequeResult1 = queue.deQueue();
    const front3 = queue.Front();
    const rear3 = queue.Rear();
    queue.enQueue(9);
    queue.enQueue(10);
    queue.enQueue(11);
    queue.enQueue(12);
    const enqueRes4 = queue.enQueue(12);

    expect(isEmpty1).toBe(true);
    expect(enqueueResult).toBe(true);
    expect(rear1).toBe(6);
    expect(front1).toBe(6);
    expect(enqueueResult2).toBe(true);
    expect(front2).toBe(6);
    expect(rear2).toBe(7);
    expect(enqueueResult3).toBe(true);
    expect(dequeResult1).toBe(true);
    expect(front3).toBe(7);
    expect(rear3).toBe(8);
    expect(enqueRes4).toBe(false);
  });
});
