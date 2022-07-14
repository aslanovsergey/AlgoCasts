// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(child) {
    const indexOfChild = this.children.indexOf(child);
    this.children.splice(indexOfChild, 1);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (this.root) {
      fn(this.root);
      let levelNodes = this.root.children || [];
      while (levelNodes.length) {
        const nextLevelChildren = [];
        for (const node of levelNodes) {
          fn(node);
          if (node.children.length) {
            nextLevelChildren.push(...node.children);
          }
        }
        levelNodes = nextLevelChildren;
      }
    }
  }

  traverseDF(fn) {
    if (this.root) {
      fn(this.root);
      applyToChildrenRecursive(this.root.children);
    }

    function applyToChildrenRecursive(children) {
      for (const childNode of children) {
        fn(childNode);
        if (childNode.children.length) {
          applyToChildrenRecursive(childNode.children);
        }
      }
    }
  }
}

module.exports = { Tree, Node };
