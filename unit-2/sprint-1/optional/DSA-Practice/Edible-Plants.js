function ediblePlants(N,edible,M,plants){
    let obj={}
    
    for(let i of edible){
        obj[i]?obj[i]++:obj[i]=1
    }
    let sum=0
    for(let i of plants){
        if(obj[i])  sum+=obj[i]   
    }
    console.log(sum)
}
