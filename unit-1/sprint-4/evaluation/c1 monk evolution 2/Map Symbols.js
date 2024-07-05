function mapSymbols(N) {
    let obj = {"!": 1, "@": 2, "#": 3, "$": 4, "%": 5, "^": 6, "&": 7, "*": 8};
        
    for(let key in obj){
        obj[key]+=N-1
        N++
        console.log(key+"-"+obj[key])
    }
}
