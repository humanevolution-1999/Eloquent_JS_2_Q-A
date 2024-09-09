const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(functionName){
    if(!box.locked){
        return functionName(box);
    }
    else{
        box.unlock();
        try{
            return functionName(box);
        }
        finally{
            box.lock();
        }
    }
}
    