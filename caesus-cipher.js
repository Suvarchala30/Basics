const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M'
  };
  
  function rot13(encodedStr){
    const codeArr = encodedStr.split("");  // String to Array
    let decodedArr = []; 
    // your code here

    for(let i=0;i<codeArr.length;i++){
        let char=codeArr[i]
        if(lookup[char]===undefined){
            decodedArr.push(char)
        }else{
            decodedArr.push(lookup[char])
        }
    }
    
    return decodedArr.join(""); // Array to String
  }

  console.log(rot13("SERR YBIR? NPPVBWBO"));