/**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(x)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
*/

/**
 * initialize your data structure here.
 */
const MinStack = function MinStack() {
  this.list = [];
  this.min = +Infinity;
};

/**
   * @param {number} x
   * @return {void}
   */
MinStack.prototype.push = function push(x) {
  this.list.push(x);
  this.min = x < this.min ? x : this.min;
};

/**
   * @return {void}
   */
MinStack.prototype.pop = function pop() {
  this.list.pop();
  this.recalculateMin();
};

MinStack.prototype.recalculateMin = function () {
  let min = +Infinity;
  this.list.forEach((item) => {
    min = item < min ? item : min;
  });
  this.min = min;
};

/**
   * @return {number}
   */
MinStack.prototype.top = function top() {
  if (this.list.length === 0) {
    return null;
  }
  return this.list[this.list.length - 1];
};

/**
   * @return {number}
   */
MinStack.prototype.getMin = function getMin() {
  return this.min;
};

MinStack.prototype.length = function length() {
  return this.list.length;
};

export default MinStack;
