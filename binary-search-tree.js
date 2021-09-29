// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      if (currentNode === null) {
        this.root = new TreeNode(val);
        return;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }

    search(val, currentNode = this.root) {
      // Your code here
      if (currentNode === null) return false;
      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      }
      if (val > currentNode.val) {
        return this.search(val, currentNode.right);
      } else {
        return true;
      }
    }


    preOrderTraversal(currentNode = this.root) {
      if(currentNode === null) return;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
       if (currentNode === null) return;
       this.inOrderTraversal(currentNode.left);
       console.log(currentNode.val);
       this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
       if (currentNode === null) return;
       this.postOrderTraversal(currentNode.left);
       this.postOrderTraversal(currentNode.right);
       console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      const queue = [this.root];

      while (queue.length) {
        let currentNode = queue.shift();
        console.log(currentNode.val);

        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      const stack = [this.root];

      while (stack.length) {
        let currentNode = stack.pop();
        console.log(currentNode.val);

        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.rigth) stack.push(currentNode.right);
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
