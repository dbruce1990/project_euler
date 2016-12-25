var assert = require('chai').assert;

beforeEach(function(){
  require('../../../../problems/1/solution.js');
  var solution = new Solution1();
});

describe('Solution 1', function() {
  it('should return sum of all numbers', function() {
    console.log(solution.getSum([1]));
  });
});
