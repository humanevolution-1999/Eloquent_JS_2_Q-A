function reverseArray(arr){
    let resArr=[];
    for (let i=arr.length-1;i>=0;i--)
        resArr.push(arr[i]);
    return resArr;
}

function reverseArrayInPlace(arr){
    for(let i=0;i<arr.length/2;i++)
    {
        let tempVal=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=tempVal;
    }
    return arr;
}

console.log(reverseArray([2,3,45,25,3]));
console.log(reverseArrayInPlace([3,5,4,2,23,51]));