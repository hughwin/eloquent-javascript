// Chess board
var board = " # # # #"
for(var i = 0; i < 8; i++){
	if(board[0]===" "){
		console.log("# # # #")
		board = "# # # #"
	}
	else if (board[0] === "#"){
		console.log(" # # # #")
		board = " # # # #"
	}
}