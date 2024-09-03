function deepEqual(val1, val2){
    if(val1===val2)
        return true;
    else if(typeof(val1)=="object" && typeof(val1)=="object" && val1!=null && val2!=null)
    {
        let keysObj1=Object.keys(val1);
        let keysObj2=Object.keys(val2);
        if(keysObj1.length!=keysObj2.length)
            return false;
        for(let i=0;i<keysObj1.length;i++)
        {
            if(keysObj1[i]!=keysObj2[i])
                return false;
            if(val1[`${keysObj1[i]}`]!=val2[`${keysObj2[i]}`])
                return false;
        }
        return true;
    }
    return false;
}

/*
//function to check code
let obj1={val:4,date:'20-08-2024'};
let obj2={val:4,date:'20-08-2024'};
let obj3=NaN;
let obj4=NaN;

console.log(deepEqual(obj3,obj4));*/
