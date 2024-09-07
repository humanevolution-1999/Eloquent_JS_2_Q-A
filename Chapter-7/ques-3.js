class PGroup{
    constructor(members){
        this.member=members;
    }

    add(member){
        if (!(member in this.member))
            return new PGroup(this.member.concat(member));
    }

    delete(member){
        let arr=[];
        for (let i=0;i<this.member.length;i++){
            if(this.member[i]==member)
            {
                this.member.splice(i,1);
                break;
            }     
        }
        return new PGroup(this.member);
    }

    static empty(){
        return new PGroup([]);
    }
}

let PGroup1 = PGroup.empty().add(['Alice','Bob']);
console.log(PGroup1);
