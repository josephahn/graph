var assert       = require('assert');
var Graph        = require('../src/graph');
var Node         = require('../src/node');
var Vertex       = require('../src/vertex');
var LinkedList   = require('../src/linkedList');

describe('Graph', function() {
  describe('constructor', function() {
    it('should create new graph with empty adjList', function() {
      var g = new Graph();
      assert.deepEqual(g.adjList, {});
    })
  })

  describe('#add()', function() {
    it('should add edge between two verticies', function() {
      var v1 = new Vertex('a');
      var v2 = new Vertex('b');
      var g = new Graph();
      g.add(v1, v2);
      assert.equal(g.adjList.a.head.val, 'b');
      assert.equal(g.adjList.b.head.val, 'a');
    })
  })
});
