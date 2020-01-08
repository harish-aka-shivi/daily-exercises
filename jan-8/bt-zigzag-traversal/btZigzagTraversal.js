
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  const resultMap = {};

  const traversal = (node, level) => {
    if (!node) {
      return;
    }
    const nodeVal = node.val;

    if (resultMap[level]) {
      resultMap[level].push(nodeVal);
    } else {
      resultMap[level] = [nodeVal];
    }

    traversal(node.left, level + 1);
    traversal(node.right, level + 1);
  };

  traversal(root, 0);

  const resultArr = [];
  const keys = Object.keys(resultMap);
  for (const key of keys) {
    if (parseInt(key, 10) % 2 === 0) {
      resultArr.push(resultMap[key]);
    } else {
      resultArr.push(resultMap[key].reverse());
    }
  }
  return resultArr;
};

export {
  TreeNode,
  zigzagLevelOrder,
};
