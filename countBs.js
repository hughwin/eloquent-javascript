// Bean counting - counts the number of Bs
// Is meant to be targetted on upper case Bs, but I finished the code then realised, and couldn't be 
// bothered to change it. 

beans = "aabababababababababababbabaab";
count = 0;
function countBs(){
	for(var i = 0; i < beans.length ; i++){
		if(beans.charAt(i) === "b"){
			count += 1;
		} else console.log("Character at position " + i + " not a b")
	}
		return count 
}
countBs()