var LinkedList = require('./linkedList');

var Graph = module.exports = function() {
  this.adjList = {};
};

Graph.prototype.adjacent = function(vert1, vert2) {

};

Graph.prototype.neighbors = function(vert) {

};

Graph.prototype.add = function(vert1, vert2) {
  if (!this.adjList.hasOwnProperty(vert1.val)) {
    var linkedList = new LinkedList();
    linkedList.add(vert1.val);
    this.adjList[vert1.val] = linkedList;
  }
  if (!this.adjList[vert1.val].contains(vert2.val)) {
    this.adjList[vert1.val].add(vert2.val);
  }
  if (!this.adjList.hasOwnProperty(vert2.val)) {
    var linkedList = new LinkedList();
    linkedList.add(vert2.val);
    this.adjList[vert2.val] = linkedList;
  }
  if (!this.adjList[vert2.val].contains(vert1.val)) {
    this.adjList[vert2.val].add(vert1.val);
  }
};

Graph.prototype.delete = function(vert1, vert2) {

};

Graph.prototype.getVertValue = function(vert) {

};

Graph.prototype.setVertValue = function(vert, val) {

};

Graph.prototype.print = function() {
  for (var vert in this.adjList) {
    this.adjList[vert].print();
  }
};

/*
Graph.prototype.getEdgeValue = function(vert1, vert2) {

};

Graph.prototype.setEdgeValue = function(vert1, vert2, val) {

};
*/
