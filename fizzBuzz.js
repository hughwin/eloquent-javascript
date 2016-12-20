// FizzBuzz


for(var i = 1; i <= 100; i++){
	divThree = i % 3;
	divFive = i % 5;
	if(divFive === 0 && divThree === 0) {
		console.log("Fizzbuzz")
	}
	else if(divThree === 0){
		console.log("Fizz");
	}
	else if(divFive === 0){
		console.log("Buzz");
	}
	else console.log(i)
}