// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root1) => {
  const traversalArr = [];

  const traversal = (root) => {
    if (root === null) {
      return;
    }
    const left = traversal(root.left);
    if (left) {
      traversalArr.push(left.val);
    }
    traversalArr.push(root.val);
    const right = traversal(root.right);
    if (right) {
      traversalArr.push(right.val);
    }
  };

  traversal(root1);
  return traversalArr;
};

export {
  TreeNode,
  inorderTraversal,
};
