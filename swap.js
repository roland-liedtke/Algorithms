function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

console.log(testArray);    // Should be [9, 7, 4] !
