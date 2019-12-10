import ListNode from './listNode';

// linked list for numbers only
class LinkedList {
  constructor() {
    this.head = null;
  }

  // add node in linked list using value;
  addNode(value) {
    const node = new ListNode();
    node.value = value;
    node.next = null;

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      let tempNode = this.head.next;
      while (tempNode !== null) {
        currentNode = tempNode;
        tempNode = tempNode.next;
      }
      tempNode = node;
      currentNode.next = tempNode;
    }
  }

  toString() {
    let iterNode = this.head;
    let linkedListStringRepresentation = '';
    while (iterNode !== null) {
      linkedListStringRepresentation += `${iterNode.value}`;
      if (iterNode.next !== null) {
        linkedListStringRepresentation += '=>';
      }
      iterNode = iterNode.next;
    }
    return linkedListStringRepresentation;
  }
}

export default LinkedList;
