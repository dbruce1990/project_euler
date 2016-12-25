// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

var Solution1 = function() {};
Solution1.prototype.getMultiples = function(multiplicands, maxNum) {
  var multiples = [];
  for(var i = 0; i < maxNum; i++){
    multiplicands.forEach(function(multiplicand){
      if(i % multiplicand == 0)
<<<<<<< HEAD:project_euler/problems/1/js/solution.js
          multiples.push(i);
=======
      if(!multiples.includes(i)){
        multiples.push(i);
      }
>>>>>>> 36b9ea8a8275f684dba48cd193d0e5f08c27b165:project_euler/problems/1/solution.js
    });
  }
  multiples = stripDuplicates(multiples);
  return multiples;
}

<<<<<<< HEAD:project_euler/problems/1/js/solution.js
function stripDuplicates(arr){
  arr = arr.sort();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1])
      arr.pop(i);
  }
  return arr;
}

function getSum(arrNums){
=======
Solution1.prototype.getSum = function(nums){
>>>>>>> 36b9ea8a8275f684dba48cd193d0e5f08c27b165:project_euler/problems/1/solution.js
  var sum = 0;
  arrNums.forEach(function(arrNums){
    arrNums = sum + arrNums;
  });
  return sum;
}
// 
// var solution = new Solution1();
// console.log(solution.getSum([1,2,3]));

function stopwatch(callback){
  var startTime = new Date().getTime();
  callback();
  var endTime = new Date().getTime();
  var totalTime = endTime - startTime;
  console.log("Start Time: " + startTime + "\nEnd Time: " + endTime);
  console.log("It took " + time + " ms to achieve the answer: " + sum);
}


stopwatch(function(){
  var multiples = getMultiples([3,5], 1000);
  var sum = getSum(multiples);
});

/*

*/
