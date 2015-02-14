var assert       = require('assert');
var Node         = require('../src/node');
var LinkedList   = require('../src/linkedList');
var Vertex       = require('../src/vertex');
var Graph        = require('../src/graph');

describe('Graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  })

  describe('constructor', function() {
    it('should create new graph with empty adjList', function() {
      assert.deepEqual(graph.adjList, {});
    })
  })

  describe('#add()', function() {
    var v1 = new Vertex('a');
    var v2 = new Vertex('b');
    it('should add edge between two verticies', function() {
      graph.add(v1, v2);
      assert.equal(graph.adjList.a.head.next.val, 'b');
      assert.equal(graph.adjList.b.head.next.val, 'a');
    })
    it('should only add unique edges', function() {
      graph.add(v1, v2);
      graph.add(v2, v1);
      assert.equal(graph.adjList.a.length(), 2);
      assert.equal(graph.adjList.b.length(), 2);
    })
  })
});
