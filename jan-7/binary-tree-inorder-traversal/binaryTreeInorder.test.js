import { TreeNode, inorderTraversal } from './binaryTreeInorder';

describe('should traverse a tree inorder', () => {
  it('should pass the following test case', () => {
    const root = new TreeNode();
    root.val = 1;
    const l1 = new TreeNode();
    l1.val = 2;
    const r1 = new TreeNode();
    r1.val = 3;
    const l2 = new TreeNode();
    l2.val = 4;
    const l3 = new TreeNode();
    l3.val = 5;
    const r2 = new TreeNode();
    r2.val = 6;
    const r3 = new TreeNode();
    r3.val = 7;
    root.left = l1;
    root.right = r1;
    l1.left = l2;
    l1.right = l3;
    r1.left = r2;
    r1.right = r3;

    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});
