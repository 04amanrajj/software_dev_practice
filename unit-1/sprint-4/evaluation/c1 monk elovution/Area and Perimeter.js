function areaAndPerimeter(L1,B1,L2,B2) {
    let R1area=L1*B1;
    let R2area=L2*B2;
    let R1Pera=2*(L1+B1);
    let R2Pera=2*(L2+B2);
    
    
    
    if(R1area>R2area){
        console.log('true')
    }else{
        console.log('false')
    }
    if(R1Pera>R2Pera){
        console.log('true')
    }else{
        console.log('false')
    }
}


areaAndPerimeter(1,2,2,3)