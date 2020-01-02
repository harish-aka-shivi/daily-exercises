const Stack = function Stack() {
  this.list = [];
};

Stack.prototype.push = function push(x) {
  this.list.push(x);
};

Stack.prototype.pop = function pop() {
  return this.list.pop();
};

Stack.prototype.top = function top() {
  if (this.list.length === 0) {
    return null;
  }
  return this.list[this.list.length - 1];
};


Stack.prototype.size = function size() {
  return this.list.length;
};

Stack.prototype.toString = function toString() {
  this.list.toString();
};

Stack.prototype.forEach = function forEach(cb1) {
  this.list.slice(0).reverse().forEach(cb1);
};

/**
   * Initialize your data structure here.
   */
const MyQueue = function () {
  this.stack = new Stack();
};

/**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
MyQueue.prototype.pop = function () {
  const copyStack = new Stack();

  this.stack.forEach(() => {
    copyStack.push(this.stack.pop());
  });

  const topItem = copyStack.pop();

  copyStack.forEach(() => {
    this.stack.push(copyStack.pop());
  });
  return topItem;
};

/**
   * Get the front element.
   * @return {number}
   */
MyQueue.prototype.peek = function () {
  const copyStack = new Stack();
  this.stack.forEach(() => {
    copyStack.push(this.stack.pop());
  });
  const topItem = copyStack.pop();
  copyStack.push(topItem);
  copyStack.forEach(() => {
    this.stack.push(copyStack.pop());
  });
  return topItem;
};

/**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
MyQueue.prototype.empty = function empty() {
  return this.stack.size() === 0;
};

/**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */

export default MyQueue;
