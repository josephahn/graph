var Node       = require('./node');
var LinkedList = require('./linkedList');

var Graph = module.exports = function() {
  this.adjList = {};
};

Graph.prototype.adjacent = function(vert1, vert2) {

};

Graph.prototype.neighbors = function(vert) {

};

Graph.prototype.add = function(vert1, vert2) {
  var node1 = new Node(vert1.val);
  var node2 = new Node(vert2.val);
  if (!this.adjList.hasOwnProperty(vert1.val)) {
    var linkedList = new LinkedList();
    this.adjList[vert1.val] = linkedList;
  }
  if (!this.adjList[vert1.val].contains(node2.val)) {
    this.adjList[vert1.val].add(node2);
  }

  if (!this.adjList.hasOwnProperty(vert2.val)) {
    var linkedList = new LinkedList();
    this.adjList[vert2.val] = linkedList;
  }
  if (!this.adjList[vert2.val].contains(node1.val)) {
    this.adjList[vert2.val].add(node1);
  }
};

Graph.prototype.delete = function(vert1, vert2) {

};

Graph.prototype.getVertValue = function(vert) {

};

Graph.prototype.setVertValue = function(vert, val) {

};

Graph.prototype.print = function() {
  for (var headVal in this.adjList) {
    var result = headVal + ' -> ';
    var node = this.adjList[headVal].head;
    while (node !== null && node.hasOwnProperty('next')) {
      result += node.val + ' -> ';
      node = node.next;
    }
    result += 'NULL';
    console.log(result);
  }
};

/*
Graph.prototype.getEdgeValue = function(vert1, vert2) {

};

Graph.prototype.setEdgeValue = function(vert1, vert2, val) {

};
*/
