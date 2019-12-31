import MinStack from './minStack';

describe('Test the implementation of stack', () => {
  it('test whether all the functionality are implemented', () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(-1);
    stack.push(0);
    const top = stack.top();
    stack.pop();
    const min = stack.getMin();

    expect(top).toEqual(0);
    expect(min).toEqual(-1);
    expect(stack.length()).toEqual(4);
  });
});
