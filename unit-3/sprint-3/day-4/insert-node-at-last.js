const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtTail(head, data) {
  if (head === null) return new LinkedListNode(data);

  let curr = head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = new LinkedListNode(data);
  return head;
}
