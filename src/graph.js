var LinkedList = require('./linkedList');

var Graph = module.exports = function() {
  this.adjList = {};
};

Graph.prototype.adjacent = function(val1, val2) {
  return this.adjList[val1].contains(val2);
};

Graph.prototype.neighbors = function(val) {

};

Graph.prototype.add = function(val1, val2) {
  if (!this.adjList.hasOwnProperty(val1)) {
    var linkedList = new LinkedList();
    linkedList.add(val1);
    this.adjList[val1] = linkedList;
  }
  if (!this.adjList[val1].contains(val2)) {
    this.adjList[val1].add(val2);
  }
  if (!this.adjList.hasOwnProperty(val2)) {
    var linkedList = new LinkedList();
    linkedList.add(val2);
    this.adjList[val2] = linkedList;
  }
  if (!this.adjList[val2].contains(val1)) {
    this.adjList[val2].add(val1);
  }
};

Graph.prototype.delete = function(val1, val2) {
  this.adjList[val1].remove(val2);
  this.adjList[val2].remove(val1);
};

Graph.prototype.setVertValue = function(oldVal, newVal) {

};

Graph.prototype.print = function() {
  for (var vert in this.adjList) {
    this.adjList[vert].print();
  }
};

/*
Graph.prototype.getEdgeValue = function(val1, val2) {

};

Graph.prototype.setEdgeValue = function(val1, val2, edgeVal) {

};
*/
