// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if ((min != null && node.data <= min) || (max != null && node.data >= max)) {
    return false;
  }

  let leftSideResult = true;
  let rightSideResult = true;

  if (node.left) {
    leftSideResult = validate(node.left, min, node.data);
  }

  if (node.right) {
    rightSideResult = validate(node.right, node.data, max);
  }

  return !leftSideResult || !rightSideResult ? false : true;
}

module.exports = validate;
