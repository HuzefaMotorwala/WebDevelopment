function rot13(str) {
  var solved="";
  for(let i=0;i<str.length;i++){
    var asciival=str[i].charCodeAt();
    //console.log(asciival);
    if(asciival>=65 && asciival<=77){
      solved+= String.fromCharCode(asciival+13);
      //console.log(solved);
    }else if(asciival>=78 && asciival<=90){
      solved+=String.fromCharCode(asciival-13);
    }else{
      solved+=str[i];
    }


  }
  return solved;
}

let result=rot13("SERR PBQR PNZC");
console.log(result);
