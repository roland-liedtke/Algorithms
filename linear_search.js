function linearSearch(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i;
    }
  }  
  return null;
}
