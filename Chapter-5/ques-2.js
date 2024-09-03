function loop(value,test,body,update){
    for(let i=0;i<value.length;i++){
        if(test(value[i])){
            body(value[i]);
            update(value[i]);
        }
    }
}

let modifiedArray=[]
loop([3,5,4],value=>value>3,value=>console.log(value),value=>modifiedArray.push(2*value));
console.log(modifiedArray);