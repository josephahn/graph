var LinkedList = require('./linkedList');

var Graph = module.exports = function() {
  this.adjList = {};
};

Graph.prototype.adjacent = function(val1, val2) {
  return this.adjList[val1].contains(val2);
};

Graph.prototype.neighbors = function(val) {
  if (!this.adjList.hasOwnProperty(val)) {
    return [];
  } else {
    return this.adjList[val].list().slice(1);
  }
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

Graph.prototype.setVertVal = function(oldVal, newVal) {
  if (this.adjList.hasOwnProperty(oldVal)) {
    for (var vert in this.adjList) {
      this.adjList[vert].map(function(node) {
        if (node.val === oldVal) {
          node.val = newVal;
        }
      });
    }
    this.adjList[newVal] = this.adjList[oldVal];
    delete this.adjList[oldVal];
  }
};

Graph.prototype.print = function() {
  for (var vert in this.adjList) {
    this.adjList[vert].print();
  }
};

Graph.prototype.bfs = function(val) {
  var result = [];
  var q = [];
  var discovered = {};
  result.push(val);
  q.push(val);
  discovered[val] = true;

  while (q.length > 0) {
    var vert = q.shift();
    this.adjList[vert].map(function(node) {
      if (discovered[node.val] === undefined) {
        result.push(node.val);
        q.push(node.val);
        discovered[node.val] = true;
      }
    })
  }

  return result;
};

Graph.prototype.dfs = function(val) {
  var result = [];
  var s = [];
  var discovered = {};
  s.push(val);

  // TODO: refactor
  // extra array needed to implement left to right dfs
  while (s.length > 0) {
    var vert = s.shift();
    if (discovered[vert] === undefined) {
      discovered[vert] = true;
      result.push(vert);
      var arr = [];
      this.adjList[vert].map(function(node) {
        arr.push(node.val);
      });
      s = arr.concat(s);
    }
  }

  return result;
};

Graph.prototype.getEdgeValue = function(val1, val2) {
  return this.adjList[val1].find(val2, function(node) {
    return node.weight;
  });
};

Graph.prototype.setEdgeValue = function(val1, val2, edgeVal) {
  this.adjList[val1].find(val2, function(node) {
    node.weight = edgeVal;
  });
};
