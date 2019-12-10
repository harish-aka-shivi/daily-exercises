import LinkedList from './linkedList';

describe('test linked list', () => {
  test('should verify operations on linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);

    list.addNode(5);
    expect(list.head.value).toBe(5);

    list.addNode(10);
    expect(list.head.next.value).toBe(10);

    expect(list.toString()).toBe('5=>10');
  });
});
