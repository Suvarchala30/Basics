function convertToRoman(num) {
    const symbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    //your code here
    var ans=" "
    for (var k of Object.keys(symbols)){  //k is key
      //console.log(symbols[k])
        var times=Math.floor(num/symbols[k])
//console.log(times)
        num=num-times*symbols[k]
        //console.log(num)
        ans=ans+k.repeat(times)
    }
  return ans;
  }
  console.log(convertToRoman(36));