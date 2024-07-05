function mapSymbolsSum(N, str) {
    let value = {"!": 1, "@": 2, "#": 3, "$": 4, "%": 5, "^": 6, "&": 7, "*": 8};
          
      let sum=0
      for(let key in value){
              
              for(let j=0; j<=N; j++){
                  if(str[j]==key){
                      sum+=value[key]
                  }
              }
      }console.log(sum)
  }
  