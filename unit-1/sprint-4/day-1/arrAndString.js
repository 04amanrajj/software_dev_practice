let arr = [2,6,7, 12,19,10]


function checkPrime(n){
    let count = 0;

    for(let i = 2;i<n;i++){
        if(n%i == 0)count++

        if(count > 2) return false
        else return true
    }
}
let totalPrime = 0
for(let i = 0;i<arr.length;i++){
    if(checkPrime(arr[i+1]))  totalPrime++;;
}
console.log(totalPrime);