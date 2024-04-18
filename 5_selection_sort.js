var array = [22, 11, 99, 88, 9, 7, 42];

function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

function selectionSort(array) {
    var min;
    for(var j = 0; j < array.length; j++) {
        min = indexOfMinimum(array, j);
        swap(array, min, j);
    }
};

selectionSort(array);
console.log("Array after sorting:  " + array);    // Should be [7, 9, 11, 22, 42, 88, 99]
