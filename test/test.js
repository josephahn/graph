var assert = require('assert');
var Graph  = require('../graph');

describe('Graph', function() {
  describe('constructor', function() {
    it('should create new graph with empty adjList', function() {
      var g = new Graph();
      assert.deepEqual(g.adjList, {});
    })
  })
});
