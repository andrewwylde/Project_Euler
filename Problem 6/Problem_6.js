var setArray = function(endPoint){
    originArray = [];
    for (i = 1; i<=endPoint; i++){
        originArray.push(i);
    }
    return originArray;
}

var squareIt = function(num){
    return num*num;
};

var sumIt = function(sumArray){
    var total = 0;
    for (var i = 0; i<sumArray.length; i++){
        total += sumArray[i];
    }
//    console.log(total);
//    console.log('SUMMED IT');
    return total;
};

var sumSquares = function(endPoint){
    var result = 0;
    var originArray = setArray(endPoint);
    var squaredArray = [];
    
    squaredArray = originArray.map(squareIt);
    result = sumIt(squaredArray);
    
    return result;
};

var squareSum = function(endPoint){
    var originArray = setArray(endPoint);
    var summedArray = sumIt(originArray);
    var result = squareIt(summedArray)
    
    console.log(result);
    
    return result;
};

var sumSquareDifference = function(endPoint){
    var sum = sumSquares(endPoint);
    console.log(sum);
    var square = squareSum(endPoint);
    console.log(square);
    
    var difference = square-sum;
    
    return difference;
};