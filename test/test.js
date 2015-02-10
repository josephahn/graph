var assert       = require('assert');
var Graph        = require('../src/graph');
var Node         = require('../src/node');
var Vertex       = require('../src/vertex');
var LinkedList   = require('../src/linkedList');

describe('Graph', function() {
  var g;

  beforeEach(function() {
    g = new Graph();
  })

  describe('constructor', function() {
    it('should create new graph with empty adjList', function() {
      assert.deepEqual(g.adjList, {});
    })
  })

  describe('#add()', function() {
    var v1 = new Vertex('a');
    var v2 = new Vertex('b');
    it('should add edge between two verticies', function() {
      g.add(v1, v2);
      assert.equal(g.adjList.a.head.next.val, 'b');
      assert.equal(g.adjList.b.head.next.val, 'a');
    })
    it('should only add unique edges', function() {
      g.add(v1, v2);
      g.add(v2, v1);
      assert.equal(g.adjList.a.length(), 2);
      assert.equal(g.adjList.b.length(), 2);
    })
  })
});
