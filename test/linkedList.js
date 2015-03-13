var assert       = require('assert');
var Node         = require('../src/node');
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

  describe('#list', function() {
    it('should return an empty array if there are no nodes', function() {
      assert.deepEqual(linkedList.list(), []);
    })
    it('should return an array of all node values', function() {
      linkedList.add('t');
      linkedList.add('e');
      linkedList.add('s');
      linkedList.add('t');
      assert.deepEqual(linkedList.list(), ['t','e','s','t']);
    })
  })

  describe('#find', function() {
    it('should find the node with the specified value and invoke the callback function', function() {
      linkedList.add('a');
      linkedList.add('b');
      linkedList.add('c');
      linkedList.find('b', function(node) {
        node.val = 'B';
      });
      assert.equal(linkedList.head.next.val, 'B');
    });
  })

  describe('#map', function() {
    it('should invoke the callback function on each node in list', function() {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.map(function(node) {
        node.val++;
      });
      assert.deepEqual(linkedList.list(), [2,3,4]);
    })
  })
});
