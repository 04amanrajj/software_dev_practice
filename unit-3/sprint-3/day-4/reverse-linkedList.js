const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function reverse(head) {
  let c = head;
  let next = null;
  let last = null;

  while (c) {
    next = c.next;
    c.next = last;
    last = c;
    c = next;
  }
  return last;
}
