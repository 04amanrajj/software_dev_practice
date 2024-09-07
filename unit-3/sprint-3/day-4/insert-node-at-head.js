const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtHead(head, data) {
  if (head === null) return new LinkedListNode(data);
  let c = new LinkedListNode(data);
  c.next = head;
  head = c;
  return head;
}
