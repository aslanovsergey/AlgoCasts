// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  data;
  next;
}

class LinkedList {
  constructor() {
    this.list = [];
  }

  head = null;

  insertFirst(data) {
    let newHeadNode;

    if (this.list.length) {
      const currentHead = this.getFirst();
      newHeadNode = new Node(data, currentHead);
    } else {
      newHeadNode = new Node(data);
    }
    this.head = newHeadNode;
    this.list = [newHeadNode, ...this.list];
  }

  size() {
    return this.list.length;
  }

  getFirst() {
    // return this.list.find((n) => !this.list.some((sn) => sn.next === n));
    return this.head;
  }

  getLast() {
    return this.list.find((n) => n.next == null);
  }

  clear() {
    this.list = [];
    this.head = null;
  }

  removeFirst() {
    const currentHead = this.getFirst();
    const currentHeadIndex = this.list.indexOf(currentHead);
    this.head = currentHead.next;
    this.list.splice(currentHeadIndex, 1);
  }

  removeLast() {
    const lastNode = this.getLast();
    const lastNodeIndex = this.list.indexOf(lastNode);
    this.list.splice(lastNodeIndex, 1);
    if (!this.list.length) {
      this.head = null;
    } else {
      const newLastNode = this.list.find((n) => n.next === lastNode);
      newLastNode.next = null;
    }
  }

  insertLast(data) {
    const currentLastNode = this.getLast();
    const newLastNode = new Node(data);
    if (currentLastNode) {
      currentLastNode.next = newLastNode;
    }

    this.list.push(newLastNode);
  }

  getAt(index) {
    return this.list[index] ? this.list[index] : null;
  }

  removeAt(index) {
    this.list.splice(index, 1);
  }

  insertAt(data, index) {
    const newNode = new Node(data);

    if (index < this.list.length) {
      const currentNode = this.list[index];
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.list.splice(index, 0, newNode);

    if (this.list.length == 1) {
      this.head = newNode;
    }
  }

  forEach(fn) {
    for (let index = 0; index < this.list.length; index++) {
      const item = this.list[index];
      fn(item);
    }
  }

  *[Symbol.iterator]() {
    for (const node of this.list) {
        yield node;
    }
  }
}

module.exports = { Node, LinkedList };
