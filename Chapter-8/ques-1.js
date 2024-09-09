function wrappedPrimitiveMultiply(){
    let result;
    for(;;){
        try{
            result = PrimitiveMultiply();
            break;
        }
        catch(e){
            if (e instanceof MultiplicatorUnitFailure){
                console.log("Error" + e);
            }
        }
    }
    return result;
}