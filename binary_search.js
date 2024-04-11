var doSearch = function(arr, targetValue) {
    var min = 0;
    var max = arr.length - 1;
    var guess;
    var shoot = 1;
    while(max >= min){
        guess = Math.floor((max + min) / 2);
        println(guess);
        if(arr[guess] === targetValue){
            println(shoot);
            return guess;
        }
        else if(arr[guess] < targetValue){
            min = guess + 1;
            shoot++;
        }
        else{
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 3), 1);
Program.assertEqual(doSearch(primes, 7), 3);
