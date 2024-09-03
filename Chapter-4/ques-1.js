function sumRange(start, end, step=1)
{
    let sum=start;
    let arr=[start];
    let curr=start;
    for(let i=Math.abs(step);i<=Math.abs(end-start);i+=Math.abs(step))
    {
        curr+=step;
        arr.push(curr);
        sum+=curr;
    }
    return {sumVal:sum,values:arr};
}

console.log(sumRange(1,10));