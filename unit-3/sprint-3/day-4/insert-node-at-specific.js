const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  let node = new LinkedListNode(data);
  let c = head;

  if (position === 0) {
    node.next = c;
    head = node;
    return head;
  }
  while (c) {
    c = c.next;
    position--;

    if (position == 1) {
      node.next = c.next;
      c.next = node;
    }
  }
  return head;
}
