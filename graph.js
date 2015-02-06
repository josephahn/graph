var Graph = function() {

};

Graph.prototype.adjacent = function(vert1, vert2) {

};

Graph.prototype.neighbors = function(vert) {

};

Graph.prototype.add = function(vert1, vert2) {
  
};

Graph.prototype.delete = function(vert1, vert2) {

};

Graph.prototype.getNodeValue = function(vert) {

};

Graph.prototype.setNodeValue = function(vert, val) {

};

/*
Graph.prototype.getEdgeValue = function(vert1, vert2) {

};

Graph.prototype.setEdgeValue = function(vert1, vert2, val) {

};
*/

var Vertex = function(val) {
  this.val = val;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

// adds to tail
LinkedList.prototype.add = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.remove = function(node) {
  var curr = this.head;
  // for single length linked list
  if (curr !== null && curr.next === null) {
    this.head = null;
    this.tail = null;
    return;
  }

  // head is node to be removed
  if (curr.val === node.val) {
    this.head = this.head.next;
    return;
  }

  while(curr.next !== null) {
    if (curr.next.val === node.val) {
      curr.next = curr.next.next;
      if (curr.next === null) {
        this.tail = this.head;
      }
      break;
    }
    curr = curr.next;
  }
};
