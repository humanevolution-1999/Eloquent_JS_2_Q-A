class List{
    constructor(value){
        this.value=value;
        this.next=null;
    }

    isPresent(value){
        let current=this;
        while(current!=null)
        {
            if(current.value==value)
                return true;
            current=current.next;
        }
        return false;
    }

    deleteElement(value){
        let current=this;
        while(current.next!=null && current.next.value!=value)
        {
            //console.log(current.value);
            current=current.next;
        }
        if(current.next==null)
            console.log("No value exists!");
        else 
            current.next=current.next.next;
    }
    
    addElement(value){
        let flag=0;
        let current=this;
        while(current.next!=null){
            if(current.value==value)
            {
                flag=1;
                break;
            }
            current=current.next;
        }
        if(flag==0 && current.value!=value)
        {
            let tempListElement = new List(value);
            current.next=tempListElement;
        }
    }
}


class Group{
    #currentState = new List(Infinity);
    constructor(){
    }

    add(value){
        this.#currentState.addElement(value);
    }

    delete(value){
        this.#currentState.deleteElement(value);
    }

    has(value){
        return this.#currentState.isPresent(value);
    }

    static from(obj){
        let newGroup = new Group();
        for (let item of obj){
            if(!newGroup.has(item))
                newGroup.add(item);
        }
        return newGroup;
    }

    isEqual(otherGroup) {
        let current = this.#currentState;
        while (current != null) {
            if (!otherGroup.has(current.value)) {
                return false;
            }
            current = current.next;
        }

        current = otherGroup.#currentState;
        while (current != null) {
            if (!this.has(current.value)) {
                return false;
            }
            current = current.next;
        }

        return true;
    }
}


let anotherGroup = Group.from([3, 4, 1, 2, 4]);

// Testing the `anotherGroup` created with `from`
console.log(anotherGroup.has(3)); // true
console.log(anotherGroup.has(4)); // true
console.log(anotherGroup.has(1)); // true
console.log(anotherGroup.has(2)); // true
console.log(anotherGroup.has(5)); // false

let group1 = Group.from([1, 2, 3, 4]);
let group2 = Group.from([4, 3, 2, 1]);
let group3 = Group.from([1, 2, 3]);

console.log(group1.isEqual(group2)); // true
console.log(group1.isEqual(group3)); // false