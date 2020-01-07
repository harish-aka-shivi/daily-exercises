import MyQueue from './queueUsingStack';

describe('Should implement stack using queue', () => {
  it('pass the following test cases', () => {
    const queue = new MyQueue();
    queue.push(0);
    queue.push(1);
    queue.push(2);
    const peek = queue.peek();
    const pop = queue.pop();
    const pop2 = queue.pop();
    const peek2 = queue.peek();

    expect(peek).toEqual(0);
    expect(pop).toEqual(0);
    expect(pop2).toEqual(1);
    expect(peek2).toEqual(2);
  });
});
