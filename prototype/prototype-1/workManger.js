class WorkManager {
    #workList = [];
    #counter = 0;

    get workList(){
        return this.#workList;
    }

    addWork(work) {
        this.#counter = this.#counter + 1
        work.id = this.#counter
        this.#workList.push(work)
    }
    


    getAllItems() {
        return this.#workList.sort(function(a, b) {
            return a.title.localeCompare(b.title)
        })
    
    }
}