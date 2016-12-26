let assert = require('chai').assert;
let Solution1 = require('../problems/1/solution.js');


describe('Solution 1', function() {
  before(function(){
    this.solution = new Solution1();
    this.multiplicands = [3, 5];
  });

  it('should return sum of integers in array', function() {
    let sum = this.solution.getSum(this.multiplicands);
    assert.equal(sum, 8);
  });

  it('should return array', () => {
    let result = solution.getMultiples(this.multiplicands, 10);
    assert.isArray(result);
  });
});
