const assert = require('chai').assert
const sorter = require('../sort')

describe('Sorting functionality', function() {
  context('bubbleSort', function() {
    it('can sort an array of numbers', function() {
      var toSort = [5,2,4,3,1];
      var sorted = [1,2,3,4,5];
      assert.deepEqual(sorter.sortMe(toSort), sorted)
    });
  });
  context('check', function() {
    it('can determine if an array is sorted', function() {
      var toSort = [5,2,4,3,1];
      var sorted = [1,2,3,4,5];
      assert.equal(sorter.check(sorted), true)
    });
    it('can determine if an array is not sorted', function() {
      var toSort = [5,2,4,3,1];
      var sorted = [1,2,3,4,5];
      assert.equal(sorter.check(toSort), false)
    });
  });
});
