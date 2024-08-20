let ritikRuns={name:"Ritik",total:0,balls:{type:"leather"}}
let otherRuns=fun(ritikRuns)
// otherRuns.balls.type="tennis"

function fun(obj){
    let x=JSON.parse(JSON.stringify(obj))
    x.balls.type="tennis"
    // console.log(obj,obj)
    return x
}


console.log(ritikRuns)
console.log(otherRuns)