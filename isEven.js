function isEven(num){
  if (num < 0){
    isEven(num*=-1);
  }
  if (num === 2){
    return true;
  }
  if (num === 1){
    return false;
  }
  else {return isEven(num-2)}
}
isEven(-2)

