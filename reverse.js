// Reversing an array without the use of the .reverse method. 

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
reversed = []
function reverseArray(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		reversed.push(arr[i])
	}
	console.log(reversed)
	return reversed
}

reverseArray(arr)

// Reversing an array in place - Same as the above, but there is no new array crerated. 

// Reversing an array without the use of the .reverse method. 

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function reverseArrayInPlace(arr){
	for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
		// variable i decrements and j increases until i is less than j. 
	var temp = arr[i];
	// the variable i is stored in the temp variable 
	arr[i] = arr[j];
	// the i variable then has its identity set to what ever the j variable is. 
	arr[j] = temp;
	// the j variable is then in turn over written with the variable held in temp. 
}
	console.log(arr)
	return arr
}

reverseArrayInPlace(arr)
