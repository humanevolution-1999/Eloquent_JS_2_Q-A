class Vector{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(value){
        return new Vector(this.x+value.x,this.y+value.y);
    }
    minus(value){
        return new Vector(this.x-value.x,this.y-value.y);
    }
    get length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

//function calls for testing
let vector1 = new Vector(3,4);
console.log(vector1.length);