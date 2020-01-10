/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class CircularQueue {
  constructor(k) {
    this.queue = [];
    this.maxSize = k;
  }

  /**
     * Insert an element into the circular queue. Return true if the operation is successful.
     * @param {number} value
     * @return {boolean}
     */
  enQueue(value) {
    const len = this.queue.length;
    // if full delete the last item and
    if (this.isFull()) {
      return false;
    }
    const newLen = this.queue.push(value);
    return newLen > len;
  }

  /**
     * Delete an element from the circular queue. Return true if the operation is successful.
     * @return {boolean}
     */
  deQueue() {
    if (this.queue.length === 0) {
      return false;
    }
    this.queue = this.queue.slice(1);
    return true;
  }

  /**
     * Get the front item from the queue.
     * @return {number}
     */
  Front() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue[0];
  }

  /**
     * Get the last item from the queue.
     * @return {number}
     */
  Rear() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue[this.queue.length - 1];
  }

  /**
     * Checks whether the circular queue is empty or not.
     * @return {boolean}
     */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
     * Checks whether the circular queue is full or not.
     * @return {boolean}
     */
  isFull() {
    return this.queue.length === this.maxSize;
  }
}

export default CircularQueue;
