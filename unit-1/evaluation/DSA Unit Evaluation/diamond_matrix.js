let n = mat.length
let mid = (n-1)/2
let i = mid,j = n-1;
let ans = []
//L1 
  i = mid ; j = n-1;
 while(i>=0&&j>=mid){
    ans.push(mat[i][j])
    i--; j--;    
 } 
 
//L2
  i = 1; j = mid-1;
 while(i<=mid&&j>=0){
    ans.push(mat[i][j])
    i++; j--;    
 } 
 
//L3
  i = mid+1;   j = 1;
 while(i<=n-1&&j<=mid){
    ans.push(mat[i][j])
    i++; j++;    
 } 
 
//L4
  i = n-2;  j = mid+1;
 while(i>=mid&&j<n-1){
    ans.push(mat[i][j])
    i--; j++;    
 } 
 
console.log(l1+l2+l3+l4)