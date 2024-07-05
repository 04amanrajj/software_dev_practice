function vowelAndConsonantCount(N, str) {
    let vo=0,c=0,v="aeiou";
    for(let i=0; i<str.length; i++){
        for(let j=0; j<v.length; j++){
            if(str[i]==v[j]){
                vo++
            }
        }
       
    } c+=str.length-vo
    console.log(vo,c)
    
  }
  