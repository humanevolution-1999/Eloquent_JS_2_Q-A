function everyByLoop(array,testFunction){
    let computedVal = array.reduce((calcSum,currentVal)=>testFunction(currentVal)?calcSum+1:calcSum,0);
    console.log(computedVal);
    return computedVal==array.length?true:false;
}

function everyBySome(array,testFunction){
    let computedVal = array.some(val=>!(testFunction(val)));
    return computedVal==true?false:true;
}

//console.log(everyBySome([3,5,7],n=>n%2==1));