// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.


function getMultiples(multiplicands, maxNum) {
  var multiples = [];
  for(var i = 0; i < maxNum; i++){
    multiplicands.forEach(function(multiplicand){
      if(i % multiplicand == 0)
          multiples.push(i);
    });
  }
  multiples = stripDuplicates(multiples);
  return multiples;
}

function stripDuplicates(arr){
  arr = arr.sort();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1])
      arr.pop(i);
  }
  return arr;
}

function getSum(arrNums){
  var sum = 0;
  arrNums.forEach(function(arrNums){
    arrNums = sum + arrNums;
  });
  return sum;
}

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
