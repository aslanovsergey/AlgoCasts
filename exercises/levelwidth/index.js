// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const array = [1];
  let levelNodes = root.children;

  while (levelNodes.length) {
    array.push(levelNodes.length);
    const newLevelNodes = [];
    for (const node of levelNodes) {
      newLevelNodes.push(...node.children);
    }

    levelNodes = newLevelNodes
  }

  return array;
}

module.exports = levelWidth;
