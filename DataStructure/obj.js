function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];



    /*
    this.clear = clear;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
    */
}

// append添加元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// find查找元素
function find() {
    for(var i=0;i<=this.dataStore.length;++i){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

//toString 现实当前元素
function toString() {
    return this.dataStore;
}

var names = new List();
names.append("a");
names.append("b");
names.append("c");
console.log(names.toString);
names.remove("a");
console.log(names.toString);