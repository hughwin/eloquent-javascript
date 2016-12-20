// Start & end - A function which takes two arguments a beginning and an end and creates an 
// array incrementing in one from start to finish. 

var arr = []
function startFinish(a, b){
	for(a; a <= b; a++){
		console.log(a);
		arr.push(a);
		
	}
	console.log(arr)
}

startFinish(1, 100)