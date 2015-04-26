//Project Euler - Problem 7: Case of the 10,0001st Prime

//input: all real numbers
//output: 1 number
//function: use algorithm to sort out non-primes most quickly


/*While this solution is inelegant and memory-wrecking, it works to a certain limit. However, I certainly don't like the firstNum*20 method I used.*/

var start = function(firstNum){
	var primeArray = [2,3,5,7]; //Set up Array to store primes
	var arrayLeng = primeArray.length;
//	console.log("Length of Array = " + arrayLeng);
	
	for (var i = 3; i<=firstNum*20; i+=2){
	    //console.log("Testing Value: " + i);
	    var divisible = false;
        
        for (var o = 0; o<primeArray.length; o++){
            //console.log ("Prime Array Value: " + primeArray[o]);
            if (i%primeArray[o]===0){
                //console.log("Result of Modulo: " + i%primeArray[o]);
                divisible = true;
                break;
                //console.log("Divisible? " + divisible + "\n");
            } else{
                //console.log("Result of Modulo: " + i%primeArray[o]);
                //console.log("Divisible? " + divisible + "\n");
            }
            
        }
        !divisible ? primeArray.push(i): null//console.log ("Divisor Found");
        //console.log(primeArray[firstNum-1]);
	    
	}
	console.log(primeArray[firstNum-1]);
	
};


