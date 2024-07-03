function identifyPrime(num) {
    let n=0
    for (let i = 2; i <num; i++) {
      if (num % i == 0) {
        n=1
      }
    }
    if(n==1){
        console.log("No")
    }else{
        console.log("Yes")
    }
  }
  
identifyPrime(14)  