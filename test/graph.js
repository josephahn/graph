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
    })
  })

  describe('#adjacent', function() {
    it('should return true if two vertices are adjacent', function() {
      graph.add('a', 'b');
      assert.equal(graph.adjacent('a', 'b'), true);
      graph.add('a', 'c');
      assert.equal(graph.adjacent('c', 'a'), true);
    })
    it('should return false if two vertices are not adjacent', function() {
      graph.add('a', 'b');
      graph.add('a', 'c');
      assert.equal(graph.adjacent('b', 'c'), false);
    })
  })

  describe('#neighbors', function() {
    it('should return an empty array if a vertex is not part of the graph', function() {
      assert.deepEqual(graph.neighbors('a'), []);
    })
    it('should return an array of all neighbors', function() {
      graph.add('a', 'b');
      graph.add('a', 'c');
      assert.deepEqual(graph.neighbors('a'), ['b','c']);
      graph.add('a', 'z');
      graph.add('z', 'a');
      assert.deepEqual(graph.neighbors('a'), ['b','c','z']);
    })
  })

  describe('#setVertVal', function() {
    it('should change vertex value', function() {
      graph.add('a', 'b');
      graph.add('a', 'c');
      assert.equal(graph.adjList.hasOwnProperty('a'), true);
      graph.setVertVal('a', 'z');
      assert.equal(graph.adjList.hasOwnProperty('a'), false);
      assert.equal(graph.adjList.hasOwnProperty('z'), true);
      assert.deepEqual(graph.neighbors('z'), ['b','c']);
      assert.deepEqual(graph.neighbors('b'), ['z']);
      assert.deepEqual(graph.neighbors('c'), ['z']);
    })
  })

  describe('#bfs', function() {
    it('should return an array with the node values visited in breadth first order', function() {
      graph.add('a', 'b');
      assert.deepEqual(graph.bfs('b'), ['b','a']);
      graph.add('a', 'c');
      assert.deepEqual(graph.bfs('b'), ['b','a','c']);
      graph.add('a', 'd');
      assert.deepEqual(graph.bfs('b'), ['b','a','c','d']);
      graph.add('a', 'f');
      assert.deepEqual(graph.bfs('b'), ['b','a','c','d','f']);
      graph.add('b', 'd');
      assert.deepEqual(graph.bfs('b'), ['b','a','d','c','f']);
      graph.add('b', 'f');
      assert.deepEqual(graph.bfs('b'), ['b','a','d','f','c']);
      graph.add('b', 'g');
      assert.deepEqual(graph.bfs('b'), ['b','a','d','f','g','c']);
      graph.add('d', 'e');
      assert.deepEqual(graph.bfs('b'), ['b','a','d','f','g','c','e']);
      graph.add('e', 'f');
      assert.deepEqual(graph.bfs('b'), ['b','a','d','f','g','c','e']);
      graph.add('f', 'g');
    })
  })

  describe('#dfs', function() {
    it('should return an array with the node values visited in depth first order', function() {
      graph.add('a', 'b');
      assert.deepEqual(graph.dfs('b'), ['b','a']);
      graph.add('a', 'c');
      assert.deepEqual(graph.dfs('b'), ['b','a','c']);
      graph.add('a', 'd');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d']);
      graph.add('a', 'f');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','f']);
      graph.add('b', 'd');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','f']);
      graph.add('b', 'f');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','f']);
      graph.add('b', 'g');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','f','g']);
      graph.add('d', 'e');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','e','f','g']);
      graph.add('e', 'f');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','e','f','g']);
      graph.add('f', 'g');
      assert.deepEqual(graph.dfs('b'), ['b','a','c','d','e','f','g']);
    })
  })
});
