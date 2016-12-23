// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

var Solution1 = function() {};
Solution1.prototype.getMultiples = function(multiplicands, maxNum) {
  var multiples = [];
  for(var i = 0; i < maxNum; i++){
    multiplicands.forEach(function(multiplicand){
      if(i % multiplicand == 0)
      if(!multiples.includes(i)){
        multiples.push(i);
      }
    });
  }
  return multiples;
}

Solution1.prototype.getSum = function(nums){
  var sum = 0;
  nums.forEach(function(num){
    sum = sum + num;
  });
  return sum;
}
// 
// var solution = new Solution1();
// console.log(solution.getSum([1,2,3]));

//TODO implement tests with framework
