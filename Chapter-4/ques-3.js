function createNewElement(val){
    let tempList = {
        value:val,
        rest:null,
    }
    return tempList;
}

function arrayToList(arr){
    let resList=null;
    for (let i=arr.length-1;i>=0;i--){
        let newVal = createNewElement(arr[i]);
        newVal['rest'] = resList;
        resList = newVal;
    }
    return resList;
}

function listToArray(list){
    let arr=[];
    while(list!=null){
        arr.push(list['value']);
        list=list['rest'];
    }
    return arr;
}

/* Comment out if you want to test the code

let testArr=[3,2,34,8,21,3,98];
let testList = arrayToList(testArr);
console.log(listToArray(testList));

*/