// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

module.exports = () => {
  getMultiples(multiplicands, maxNum) {
    var multiples = [];
    for(var i = 1; i < maxNum; i++){
      multiplicands.forEach(function(multiplicand){
        if(i % multiplicand == 0)
        multiples.push(i);
      });
    }
    multiples = this.stripDuplicates(multiples);
    return multiples;
  }

  stripDuplicates(arr){
    arr = arr.sort();
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == arr[i+1])
      arr.pop(i);
    }
    return arr;
  }

  getSum(arrNums){
    var sum = 0;
    arrNums.forEach(function(num){
      sum += num;
    });
    return sum;
  }
}
