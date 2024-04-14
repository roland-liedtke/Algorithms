var array = [18, 6, 66, 44, 9, 22, 14];

function indexOfMinimum(arr, startIndex) {
    var minValue = arr[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < arr.length; i++) {
        if( arr[i] < minValue ) {
            minIndex = i;
            minValue = arr[i];
        }
    } 
    
    return minIndex;
}; 

var index = indexOfMinimum(array, 2);
console.log("The index of the minimum value of the subarray starting at index 2 is " + index + "."  ); // Should be 4 !
