// Start & end - A function which takes two arguments a beginning and an end and creates an 
// array incrementing in one from start to finish. 

var arr = [];
function startFinish(a, b){
	for(a; a <= b; a++){
		arr.push(a);
		
	}
	return arr;
}
startFinish(1,100);
function sum(){
  return arr.reduce(function(a,b){
    return a+b;
  });
}

sum();