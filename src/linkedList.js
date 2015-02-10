var Node       = require('./node');

var LinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

// adds to tail
LinkedList.prototype.add = function(val) {
  var node = new Node(val);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.remove = function(val) {
  var node = new Node(val);
  var curr = this.head;
  // for single length linked list
  if (curr !== null && curr.next === null) {
    this.head = null;
    this.tail = null;
    return;
  }

  // head is node to be removed
  if (curr.val === val) {
    this.head = this.head.next;
    return;
  }

  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
      if (curr.next === null) {
        this.tail = this.head;
      }
      break;
    }
    curr = curr.next;
  }
};

LinkedList.prototype.length = function() {
  var curr = this.head;
  if (curr === null) {
    return 0;
  } else if (curr.next === null) {
    return 1;
  } else {
    var count = 1;
    while (curr.next !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }
};

LinkedList.prototype.contains = function(val) {
  var curr = this.head;
  if (this.length() === 0) {
    return false;
  }
  if (curr.val === val) {
    return true;
  }
  while (curr.next !== null) {
    curr = curr.next;
    if (curr.val === val) {
      return true;
    }
  }
  return false;
};
