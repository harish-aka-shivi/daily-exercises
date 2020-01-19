
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


const inorder = (root, arr) => {
  if (root === null) {
    return;
  }

  const left = inorder(root.left, arr);
  if (left) {
    arr.push(left.val);
  }
  arr.push(root.val);
  const right = inorder(root.right, arr);
  if (right) {
    arr.push(right.val);
  }
};

const mergeTwoSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const resultArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      resultArray.push(arr2[j]);
      j += 1;
    } else {
      resultArray.push(arr1[i]);
      i += 1;
    }
  }
  while (i < arr1.length) {
    resultArray.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    resultArray.push(arr2[j]);
    j += 1;
  }

  return resultArray;
};

/**
   * @param {TreeNode} root1
   * @param {TreeNode} root2
   * @return {number[]}
   */
const getAllElements = (root1, root2) => {
  const arr1 = [];
  const arr2 = [];

  inorder(root1, arr1);
  inorder(root2, arr2);
  return mergeTwoSortedArray(arr1, arr2);
};

export {
  TreeNode,
};
export default getAllElements;
