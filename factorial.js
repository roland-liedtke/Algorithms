var factorialIteration = function(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *=i;
    }

    return result;
};

var factorialRecursion = function(n) {
	// base case: 
	if(n === 0) {
	    return 1;
	}
	// recursive case:
	return factorialRecursion(n-1) * n;
}; 

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorialIteration(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorialIteration(0));

console.log("The value of 0! is " + factorialRecursion(0) + ".");
console.log("The value of 5! is " + factorialRecursion(5) + ".");
