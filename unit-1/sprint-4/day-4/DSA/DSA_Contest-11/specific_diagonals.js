function specificDiagonals(n, m, mat, tar){
    let li = 0 , lj = 0;
    // find the location 
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(mat[i][j]==tar){
                li = i ;
                lj = j;
                
            }
            
        }
    }
    
    // find daignols
    
    let left = "" , right = "" ;
     for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i - j == li-lj){
                left+= mat[i][j]+" "
                
            }
            if(i + j == li+lj){
                right+= mat[i][j]+" "
            }
            
        }
    }
    
    
    console.log(left)
    console.log(right)
}