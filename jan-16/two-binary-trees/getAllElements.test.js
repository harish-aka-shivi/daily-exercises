import getAllElements, { TreeNode } from './getAllElements';

describe('getAllElements', () => {
  it('should pass the following test case', () => {
    const getTree1 = () => {
      const root = new TreeNode();
      root.val = 4;
      const l1 = new TreeNode();
      l1.val = 2;
      const r1 = new TreeNode();
      r1.val = 10;
      const l2 = new TreeNode();
      l2.val = 1;
      const l3 = new TreeNode();
      l3.val = 3;
      const r2 = new TreeNode();
      r2.val = 9;
      const r3 = new TreeNode();
      r3.val = 11;
      root.left = l1;
      root.right = r1;
      l1.left = l2;
      l1.right = l3;
      r1.left = r2;
      r1.right = r3;
      return root;
    };

    const getTree2 = () => {
      const root = new TreeNode();
      root.val = 4;
      const l1 = new TreeNode();
      l1.val = 2;
      const r1 = new TreeNode();
      r1.val = 6;
      const l2 = new TreeNode();
      l2.val = 1;
      const l3 = new TreeNode();
      l3.val = 3;
      const r2 = new TreeNode();
      r2.val = 5;
      const r3 = new TreeNode();
      r3.val = 7;
      root.left = l1;
      root.right = r1;
      l1.left = l2;
      l1.right = l3;
      r1.left = r2;
      r1.right = r3;
      return root;
    };
    expect(getAllElements(getTree1(), getTree2())).toEqual(
      [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 9, 10, 11],
    );
  });
});
