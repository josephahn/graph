var assert       = require('assert');
var Graph        = require('../src/graph');
var Node         = require('../src/node');
var Vertex       = require('../src/vertex');
var LinkedList   = require('../src/linkedList');

describe('LinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  })

  describe('#add', function() {
    it('should correctly set head and tail for one node', function() {
      linkedList.add('a');
      assert.equal(linkedList.head.val, 'a');
      assert.equal(linkedList.tail.val, 'a');
    })
    it('should correctly set head and tail for multiple nodes', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      assert.equal(linkedList.head.val, 'a');
      assert.equal(linkedList.head.next.val, 'b');
      assert.equal(linkedList.tail.val, 'c');
    })
  })

  describe('#remove', function() {
    it('should handle a single node', function() {
      linkedList.add('a');
      linkedList.remove('a');
      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
    })
    it('should remove multiple nodes', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      linkedList.remove('b');
      assert.equal(linkedList.head.next.val, 'c');
      linkedList.remove('c');
      assert.equal(linkedList.tail.val, 'a');
    })
  })

  describe('#length', function() {
    it('should return length of 0 for empty linked list', function() {
      assert.equal(linkedList.length(), 0);
    })
    it('should return length of 1 for single node linked list', function() {
      linkedList.add('a');
      assert.equal(linkedList.length(), 1);
    })
    it('should return correct length for multiple nodes', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      assert.equal(linkedList.length(), 3);
      linkedList.remove('a');
      assert.equal(linkedList.length(), 2);
      linkedList.remove('b');
      linkedList.remove('c');
      assert.equal(linkedList.length(), 0);
    })
  })

  describe('#contains', function() {
    it('should return true for nodes added to linked list', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      assert.equal(linkedList.contains('a'), true);
      assert.equal(linkedList.contains('b'), true);
      assert.equal(linkedList.contains('c'), true);
    })
    it('should return false for nodes not in linked list', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      assert.equal(linkedList.contains(1), false);
      assert.equal(linkedList.contains('d'), false);
    })
  })
});

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
