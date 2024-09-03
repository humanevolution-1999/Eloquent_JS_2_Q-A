let arrArr = [[2,3,5,6],[4,7,8,9],[9,3,2,4]];
console.log(arrArr.reduce(
       (flattenedArray,currentArray)=>flattenedArray.concat(currentArray)
        ,[]
    )
);