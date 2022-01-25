
// let bankbal=[30000,10000,50000,20000,40000]
// //return an arry with updated bank balances in such a fashion : if first digit is even give 20% bonus, if odd give 35% bonus

let bankBalances = [30000, 10000, 50000, 20000, 40000]


let xx=[]
       bankBalances.forEach(function(element){
           firstDigit=element;
           //console.log(firstDigit)
           while(firstDigit>=10){
               firstDigit= (firstDigit/10);
               //runs the loop till we get 1st element - if would check only once i.e., it divides by 10 only
           }

           //console.log(firstDigit)

           if(firstDigit%2==0){
               xx.push(element+= (20/100)*element);
            
           }
           else{
            xx.push(element+= (35/100)*element);
           }
        })
//always use an empty array and push elements i to it whenever using foreach
        console.log(xx)
        console.log(bankBalances)

// Main method

        bankBalances=bankBalances.map(balance => {
            if(Number(balance.toString()[0]) % 2===0){
                balance=balance + 0.2*balance
            } else {
                balance=balance + 0.35*balance
            }
            return balance
        })
        console.log(bankBalances)