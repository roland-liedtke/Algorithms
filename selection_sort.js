function indexOfMinimum(arr, startIndex) {
    var minValue = arr[startIndex];    // Set initial values for minValue and minIndex
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < arr.length; i++) {
        if( arr[i] < minValue ) {
            minIndex = i;
            minValue = arr[i];
        }
    } 

    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   //  For the test array [18, 6, 66, 44, 9, 22, 14]
var index = indexOfMinimum(array, 2);    //  the value 9 is the smallest of [..66, 44, 9, 22, 14]  Since 9 is at index 4 in the original array, "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  ); // Should be 4 !

