var assert       = require('assert');
var Node         = require('../src/node');
var LinkedList   = require('../src/linkedList');
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
    it('should add edge between two verticies', function() {
      graph.add('a', 'b');
      assert.equal(graph.adjList.a.head.next.val, 'b');
      assert.equal(graph.adjList.b.head.next.val, 'a');
    })
    it('should only add unique edges', function() {
      graph.add('a', 'b');
      graph.add('b', 'a');
      assert.equal(graph.adjList.a.length(), 2);
      assert.equal(graph.adjList.b.length(), 2);
    })
  })

  describe('#delete', function() {
    it('should remove edges correctly', function() {
      graph.add('a', 'b');
      assert.equal(graph.adjList.a.head.val, 'a');
      assert.equal(graph.adjList.a.tail.val, 'b');
      assert.equal(graph.adjList.b.head.val, 'b');
      assert.equal(graph.adjList.b.tail.val, 'a');
      graph.add('a', 'c');
      assert.equal(graph.adjList.a.head.next.val, 'b');
      assert.equal(graph.adjList.a.tail.val, 'c');
      assert.equal(graph.adjList.c.head.val, 'c');
      assert.equal(graph.adjList.c.tail.val, 'a');
      graph.delete('a', 'b');
      assert.equal(graph.adjList.a.head.next.val, 'c');
      assert.equal(graph.adjList.b.next, null);
      graph.delete('a', 'c');
      assert.equal(graph.adjList.a.next, null);
      assert.equal(graph.adjList.c.next, null);
    });
  })
});
