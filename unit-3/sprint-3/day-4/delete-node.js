const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function deleteNode(head, position) {
  let c = head;

  while (c) {
    c = c.next;
    position--;
    if (position == 1) {
      c.next = c.next.next;
    }
  }
  if (head == null) {
    return -1;
  }
  return head;
}
