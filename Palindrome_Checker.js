function palindrome(str) {
  var newstr=str.replace(/\W+|_/g,"").toLowerCase();
  let reversestr=newstr.split("").reverse().join("").toLowerCase();
  console.log(newstr);
  console.log(reversestr);
  if(newstr!==reversestr){
    return false;
  }
  return true;
  
  //console.log(newstr);
}



palindrome("_eye");
