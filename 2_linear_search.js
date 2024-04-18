var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function linearSearch(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i;
    }
  }
  return null;
}

var result = linearSearch(primes, 73);
console.log("Found prime at index " + result);  // should be 20!
