function countLetters(inputStr){ //Takes string input
//Return all indices of each character in an array
  var str = inputStr;
  var uniqueLetters = {};

  for (var i = 0; i < str.length; i++){
    if(str[i] !== " "){
      if (!uniqueLetters[str[i]]){
      uniqueLetters[str[i]] = [i];
    }else{
      uniqueLetters[str[i]].push(i);
    }
    }
  }
  return uniqueLetters;
}
console.log(countLetters("lighthouse in the house"));