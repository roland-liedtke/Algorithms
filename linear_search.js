function linearSearch(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i;
    }
  }  
  return null;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = linearSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(linearSearch(primes, 73), 20);
Program.assertEqual(linearSearch(primes, 3), 1);
Program.assertEqual(linearSearch(primes, 7), 3);
